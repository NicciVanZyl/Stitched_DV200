## <p align="center" style="text-decoration: none !important;padding:0;margin:0;"> <br>DV 200 Term 2</p>

<p align="center"><img src="https://github.com/NicciVanZyl/Stitched_DV200/blob/main/frontend/src/Github_assets/StitchedLogoBg.jpg" width="600" /></p>

### <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [App description](#app-description)
  * [Creative Login Description](#creative-login-description)
  * [Built With](#built-with)
  * [ERD](#erd)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
  * [File Structure](#file-structure)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Figma File](#figma-file)
* [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Presentation](#presentation)
    * [Demo Video](#demo-video)
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

## Creative Login Description:
This project incorporates a creative authentication challenging the paradigm of traditional text-based passwords, this system introduces a **Colour Sequence Memory Login**. 

Instead of typing a traditional password, users interact with a beautifully curated grid of Pantone™ colour cards. During registration, users select a personalised 5 colour sequence that acts as their secure key. Upon logging in, the user must remember and click their unique 5 colour sequence from the palette grid to gain entry. This brings a visual, highly intuitive and gamified memory twist to security, making it ideal for visual thinkers while preserving strong core authentication principles.

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

### Figma File
Want to view our wireframes?
[Figma Document](https://www.figma.com/design/dXQdQCffaYe4Mf3UyegkJk/DV-200-Stitched?node-id=21-144&t=hcedBxrwU0RvJZzc-1)

---

## Future Implementation:

### Community Features & Social Styling:
Expanding the platform to integrate social interactions would greatly amplify sustainable engagement. Users could build personalised digital lookbooks, follow other users whose style alignment matches their own and have an integrated chat feature so that they are able to message the seller directly to negotiate prices or build connections. Integrating community hubs or message groups focused on fashion trends (such as streetwear or vintage tailoring) would allow enthusiasts to share sustainable styling tips.

### Advanced Predictive Curation:
Incorporating personalised shopping recommendations derived entirely from individual user activity. By analysing structural metrics such as category searches, saved wishlist tracking data and historical cart conversions, the application could provide tailored outfit inspirations on the home menu interface. Future iterations could predict a user's size and aesthetic preference parameters to automatically structure a custom curated digital shopping experience.

### Integration with Secure Shipping APIs:
Integrating live fulfillment updates directly into the application framework would establish immediate shipping calculations, printable waybill barcodes for sellers and end-to-end delivery map updates for consumers. This removes third party payment anxiety.

---

## Final Outcome:

### Mockups:

## Desktop
<p align="center"><img src="[https://github.com/NicciVanZyl/Stitched_DV200/blob/e0d20c5885d031bdff478e19d13dd38a1a2cc546/frontend/src/Github_assets/Desktop%20Mockup%20Stitched.png] width="600" /></p>

## Tablet
<p align="center"><img src="[https://github.com/NicciVanZyl/Stitched_DV200/blob/e0d20c5885d031bdff478e19d13dd38a1a2cc546/frontend/src/Github_assets/Tablet%20Mockup%20Stitched.png] width="600" /></p>

## Mobile
<p align="center"><img src="[https://github.com/NicciVanZyl/Stitched_DV200/blob/e0d20c5885d031bdff478e19d13dd38a1a2cc546/frontend/src/Github_assets/Mobile%20Mockup%20Stitched.png] width="600" /></p>

---

### Presentation:
[Google Slides](https://docs.google.com/presentation/d/e/2PACX-1vQ-M0Th6eNv9HQ59XZeFUv6ZDA3GsxP2Gl17jnraLrNO8AuHeBSyPbq_Bamb718k1sw3L9_sGlT9vQu/pub?start=true&loop=true&delayms=10000)

### Demo Video:
[Google Drive Link]()

---

### Authors
Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165

### Acknowledgements
MongoDB, Cloudinary and our lecturer, Tsungai Katsuro
