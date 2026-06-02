## <p align="center" style="text-decoration: none !important;padding:0;margin:0;"> <br>DV 200 Term 2</p>

<p align="center"><img src="https://github.com/NicciVanZyl/Stitched_DV200/blob/main/frontend/src/Github_assets/StitchedLogoBg.jpg" width="600" /></p>

### <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [App description](#app-description)
  * [Built With](#built-with)
  * [ERD](#erd)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
  * [File Structure](#file-structure)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
* [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Presentation](#presentation)
* [Conclusion](#conclusion)
* [Acknowledgements](#acknowledgements)

---

## About the project:

### Built with:
This project is built using JavaScript and spanning across the entire MERN ecosystem:

- Frontend: React.js, React Router, Axios (API requests)
- Backend: Node.js, Express.js
- Database: MongoDB (via Mongoose ORM)
- Security & Auth: JSON Web Tokens (JWT), Bcrypt.js (Password hashing and salting)


### App Description:
Stitched is a pre-loved thrifting online website, wherein users can post their second hand clothing and accessories for a little side cash or buy reasonably priced second hand items

### ERD:
<p align="center"><img src="https://github.com/NicciVanZyl/Stitched_DV200/blob/main/frontend/src/Github_assets/ERD.png" width="600" /></p>

---

## Getting Started:

### Prerequisites:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [NPM](https://www.npmjs.com/)
* A MongoDB Atlas account

### How to install:

* React Bootstrap <br> ```npm install react-bootstrap bootstrap```
* React Router DOM <br> ```npm i react-router-dom```
* Axios <br> ```npm i axios```
* Material UI <br> ```npm i @mui/material @mui/icons-material @emotion/react @emotion/styled```
* Express <br> ```npm i express```
* Multer & Cloudinary <br> ```npm i multer cloudinary```

### File Structure:
```text
Stitched_DV200/
├── backend/
│   ├── controllers/
│   │   ├── commentsController.js
│   │   ├── flagsController.js
│   │   ├── listingsController.js
│   │   └── usersController.js
│   ├── middleware/
│   │   ├── requireAdmin.js
│   │   └── verifyToken.js
│   ├── models/
│   │   ├── comment.js
│   │   ├── flags.js
│   │   ├── listing.js
│   │   └── user.js
│   ├── routes/
│   │   ├── cloudinary.js
│   │   ├── commentsRoute.js
│   │   ├── flagRoute.js
│   │   ├── imagesRoute.js
│   │   ├── listingRoute.js
│   │   └── usersRoute.js
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   └── ...
        ├── context/
        │   └── authContext.js
        ├── Github_assets/
        │   └── ...
        ├── images/
        │   └── ...
        ├── pages/
        │   ├── addListing.js
        │   ├── Admin.js
        │   ├── Cart.js
        │   ├── CartAndAdmin.css
        │   ├── Home.js
        │   ├── Login.js
        │   ├── PDP.css
        │   ├── PDP.js
        │   ├── personalProfile.js
        │   ├── PLP.js
        │   ├── Profile.css
        │   └── ViewProfile.js
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── cloudinary.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```
---

## Features and Functionality:

In this project, users are greeted with a design-forward Sign Up and Login interface utilizing a unique 5-color palette selection input mechanism alongside traditional fields. 

The application features a Product Rack storefront where users can browse active, curated clothing collections. Clicking any item securely navigates users to a Product Details Page (PDP) displaying image assets, garment descriptions, prices, and seller parameters. Within this ecosystem, users can toggle favorites, add clothing items to their personal shopping carts, and submit listing validation reports via flag modals.

Sellers can independently compile new wardrobe entries using image file upload fields. For platform moderation, a protected Admin Portal filters pending items, allowing platform administrators to systematically audit and approve listings before they go live on the storefront display.

---

## Concept Process:

### Ideation:
To construct an intuitive, visually appealing e-commerce application that resolves the lack of online thrift applications, successfully blending user listings administration, real time listing interactions and explicit role-based access rules under a unified MERN stack application.

---

## Future Implementation:

### Community Features & Social Styling:
Expanding the platform to integrate localized social interactions would greatly amplify sustainable engagement. Users could build personalized digital lookbooks, follow alternative thrifters whose style alignment matches their own, and comment directly on product racks to negotiate bundles. Integrating community hubs or message groups focused on sub-fashion trends (such as streetwear or vintage tailoring) would allow enthusiasts to share sustainable styling tips, increasing daily application interaction loop metrics.

### Advanced Predictive Curation:
Incorporating advanced predictive metadata algorithms will enable Stitched to offer personalized shopping recommendations derived entirely from individual user activity. By analyzing structural metrics such as category searches, saved wishlist tracking data, and historical cart conversions, the application could provide tailored outfit inspirations on the home menu interface. Future iterations could predict a user's size and aesthetic preference parameters to automatically structure custom-curated digital shopping corridors.

### Integration with Secure Shipping APIs:
Connecting the system with external webhooks and smart multi-carrier shipping provider portals represents a major progression toward structural transaction processing. Integrating live fulfillment updates directly into the application framework would establish immediate shipping calculations, printable waybill barcodes for sellers, and end-to-end delivery map updates for consumers. This removes third-party payment anxiety, seamlessly turning Stitched from a school prototype into a highly competitive marketplace.

---

## Final Outcome:

### Mockups
To be add soon...

### Presentation:
[Google Slides]([https://drive.google.com/file/d/136giKXQF_lpRwwaefeg5wgBg3Ob_i5Sv/view?usp=sharing](https://docs.google.com/presentation/d/e/2PACX-1vQ-M0Th6eNv9HQ59XZeFUv6ZDA3GsxP2Gl17jnraLrNO8AuHeBSyPbq_Bamb718k1sw3L9_sGlT9vQu/pub?start=true&loop=true&delayms=10000))

---

### Authors
Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165

### Acknowledgements
MongoDB, Cloudinary and our lecturer, Tsungai Katsuro
