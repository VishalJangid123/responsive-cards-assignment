import React, { useEffect, useState } from "react";
import "./App.css";
import { Tag, Place } from "./Places.type";
import Card from "./Components/Card";

const placesEndpoint = `${process.env.REACT_APP_PLACES_API_URL}`;
const tagsEndpoint = `${process.env.REACT_APP_TAGS_API_URL}`;

export default function App() {
  const [places, setPlaces] = useState<Place[]>([]);

  const fetchData = async () => {
    try {
      const placesResponse = await fetch(placesEndpoint);
      const tagsResponse = await fetch(tagsEndpoint);
      const placesData: Place[] = await placesResponse.json();
      const tagsData: Tag[] = await tagsResponse.json();

      const tagsMap = new Map<number, Tag>();
      tagsData.forEach((tag) => {
        tagsMap.set(tag.id, tag);
      });

      const updatedPlaces = placesData.map((place) => ({
        ...place,
        tagsNames: place.tags.map(
          (tagId) => tagsMap.get(tagId) || { id: -1, name: "Unknown" }
        ),
      }));
      setPlaces(updatedPlaces);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {places.map((place, index) => (
        <Card place={place} key={index} />
      ))}
    </div>
  );
}
