# Responsive Card Display with React and TypeScript

This is a simple web application built using **React** and **TypeScript** to display a responsive card layout. The data is fetched from two APIs: one for **places** and one for **tags**. The layout is fully responsive and adapts to both desktop and mobile screens.

**No CSS frameworks were used**. The layout and styling are implemented with custom, plain CSS.


## Live Demo

A live demo of this project is available at:



## No CSS Frameworks Used

This project does not use any CSS frameworks like Bootstrap, Tailwind CSS, etc. All styling is done using vanilla CSS, ensuring the application is lightweight and customizable.



## Project Structure

```
/responsive-cards-assignment
  /public
    index.html         # HTML template
  /src
    App.tsx            # Main App component. Contains API calls and data parsing
    App.css            # Custom styles for the app (no CSS framework used)
    index.tsx          # React entry point
    /Components
      Card.tsx         # Card reusable Component.
  Places.type.ts.      # Interface declarations
  .env                 # Environment variables for API URLs
  package.json         # Project dependencies and scripts
  tsconfig.json        # TypeScript configuration
```


## Problem Statement

### Create a responsive card display

Please use below data to create Places and Tags

- [Full Image](https://drive.google.com/file/d/14Im3uxxC7phJRyAZogihnUHcOAsVnpfv/view?usp=sharing)
- [Places json](https://gist.githubusercontent.com/knot-freshket/142c21c3e8e54ef36e33f5dc6cf54077/raw/94ebab16839484f06d42eb799e30d0a945ff1a1b/freshket-places.json)
- [Tags json](https://gist.githubusercontent.com/knot-freshket/fa49e0a5c6100d50db781f28486324d2/raw/55bc966f54423dc73384b860a305e1b67e0bfd7d/freshket-tags.json)

Instruction

- Require requesting to JSON endpoints
- Use JavaScript/HTML/CSS to display the details of each card, including:
    - Picture
    - Name
    - Description
    - Tag chip
- Retrieve the formatted data using JavaScript
- Display the formatted data in the HTML + CSS layout created in step A, sticking to the design, placing data where it fits. Don’t worry about pixel perfect.
- You are free to use any framework you wish or do it VanillaJS style
- **No CSS framework**
- Ensure that it should be responsive on desktop and mobile devices

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/VishalJangid123/responsive-cards-assignment.git
cd responsive-cards-assignment
```

### Step 2: Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Step 3: Configure API URLs

In the root of your project, create a `.env` file. You'll need to define the API URLs for fetching data. Create or update the `.env` file with the following variables:

```.env

REACT_APP_PLACES_API_URL=https://api.example.com/places
REACT_APP_TAGS_API_URL=https://api.example.com/tags
```

### Step 4: Run the Application

After configuring the `.env` file, you can run the development server by executing the following command:

```bash
npm start
```
This will start the app at `http://localhost:3000` in your browser.

### Code Overview

1. **`App.tsx`**: The main React component where the card display is implemented. It fetches data from the API and creates cards based on the place data and corresponding tags.
2. **`App.css`**: Custom styling for the app, ensuring a responsive grid layout for the cards. No CSS framework is used; all styles are custom written in CSS.
3. **`.env`**: Holds environment variables for the API endpoints. This allows you to easily change the API URLs without modifying the source code.
4. **TypeScript**: The project uses TypeScript to provide static typing and better development experience with autocompletion and error-checking.
