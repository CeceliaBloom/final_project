  <!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Features](#features)
  * [Color Reference](#color-reference)
  * [Font Reference](#font-reference)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Run Locally](#run-locally)
  * [Folder Structure](#folder-structure)
- [Usage](#usage)

<!-- About the Project -->
## About the Project
Welcome to our soda company website! Our goal is to provide a delightful online experience for soda enthusiasts. This website features a homepage showcasing our latest products, a products page with detailed information on each soda variant, and a review page that allows users to explore pre-written reviews dynamically pulled from a SQL table.

<!-- Built With -->
### Built With

<details>
  <summary>Frameworks</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://vitejs.dev">Vite.js</a></li>
  </ul>
</details>

<details>
   <summary>Libraries</summary>
   <ul>
    <li><a href="https://react-slideshow-image.netlify.app/?path=/docs/introduction--page">react-slideshow-imager</li>
      <li><a href="https://react-slick.neostack.com/docs/get-started">react-slick</li>
      <li><a href="https://fontawesome.com/docs">@fortawesome free-regular-svg-icons</li>
      <li><a href="https://fontawesome.com/docs">@fortawesome/react-fontawesome</li>
      <li><a href="https://reactrouter.com/en/main">react-router-dom</li>
  </ul>
</details>

<details>
   <summary>Lanuages</summary>
   <ul>
    <li>Javscript</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

  <!-- Features -->
### Features

- **Homepage:** Discover our latest and featured products.
- **Products Page:** Explore detailed information about each soda variant we offer.
- **Review Page:** Read and explore a collection of pre-written reviews, dynamically fetched from a SQL table. While users can't submit new reviews, they can enjoy a variety of perspectives on our sodas.
- **About Page:** Learn more about our soda company and its history.

<!-- Color Reference -->
### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Gray Behind Logo | ![#929497] #929497 |
| White | ![#FFFFFF] #FFFFFF |
| Mint Background Color | ![#fffef6] #fffef6 |
| Lemon Background Color | ![#fdf9d1] #fdf9d1 |
| Caramel Background Color | ![#ffeaba] #ffeaba |
| Blue Button Color | ![#CADBEA] #CADBEA |
| Black Color | ![#000000] #000000 |

<!-- Font Reference -->
### Font Reference
| Font Style              | Font Family           | Font Weight | Font Style |
|-------------------------|-----------------------|-------------|------------|
| BC Alphapipe Regular    | "bc-alphapipe", sans-serif | 400         | normal     |
| BC Alphapipe Italic     | "bc-alphapipe", sans-serif | 400         | italic     |
| BC Alphapipe Bold       | "bc-alphapipe", sans-serif | 700         | normal     |


  <!-- Getting Started -->
## Getting Started

  <!-- Prerequisites -->
### Prerequisites

This project uses npm as the package manager. Make sure you have npm installed on your machine. You can install it by installing Node.js from [nodejs.org](https://nodejs.org/).


  <!-- Installation -->
### Installation

Install my-project with npm

```bash
  npm install 
```

  <!-- Run Locally -->
### Run Locally

Clone the project

```bash
  git clone https://github.com/CeceliaBloom/final_project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
 npm install 
```

Start the server

```bash
  npm run dev
```


### Folder Structure

```plaintext
/final_project
├── node_modules
├── public
│   ├── images
│       ├── (your image files)
│
├── src
│   ├── components
│   │   ├── footer.css
│   │   ├── footer.jsx
│   │   ├── navbar.css
│   │   ├── navbar.jsx
│
│   ├── pages
│   │   ├── aboutpage.css
│   │   ├── aboutpage.jsx
│   │   ├── homepage.css
│   │   ├── homepage.jsx
│   │   ├── index.js
│   │   ├── productspage.css
│   │   ├── productspage.jsx
│   │   ├── reviewspage.css
│   │   ├── reviewspage.jsx
│   │   ├── slider.css
│

├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js

