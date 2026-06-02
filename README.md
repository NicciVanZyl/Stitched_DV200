## <p align="center" style="text-decoration: none !important;padding:0;margin:0;"> <br>DV 200 Term 2</p>

## <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Dashboard</p>

<p align="center"><img src="https://github.com/NicciVanZyl/Stitched_DV200/blob/main/frontend/src/Github_assets/StitchedLogoBg.jpg" width="600" /></p>

### <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Project description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
  * [File Structure](#filestructure)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
* [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
* [Conclusion](#conclusion)
* [Acknowledgements](#acknowledgements)

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

## Getting Started:

### Prerequisites:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [NPM](https://www.npmjs.com/)

### How to install:

* React Bootstrap <br> `npm install react-bootstrap bootstrap`
* React Router DOM <br> `npm i react-router-dom`
* Bootstrap <br> `npm i bootstrap`
* Material UI <br> `npm install @mui/material @emotion/react @emotion/styled`

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
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── AdminRoute.js
        │   ├── CartCard.js
        │   ├── OrangeFooter.js
        │   ├── ProductCard.js
        │   ├── ProtectedRoute.js
        │   ├── RedFooter.js
        │   ├── btt.js
        │   ├── filterBar.js
        │   ├── flagModal.js
        │   ├── flagSelector.js
        │   ├── modal.js
        │   ├── navbar.js
        │   ├── searchField.js
        │   ├── selectors.js
        │   ├── textField.js
        │   ├── PantoneCardBurgundy.js
        │   ├── PantoneCardDenim.js
        │   ├── PantoneCardDustRose.js
        │   ├── PantoneCardMocha.js
        │   ├── PantoneCardMutedClay.js
        │   ├── PantoneCardPaleHaze.js
        │   ├── PantoneCardPetal.js
        │   ├── PantoneCardSepia.js
        │   ├── PantoneCardSlateSilk.js
        │   ├── PantoneCardSoftPeach.js
        │   ├── PantoneCardSunset.js
        │   └── PantoneCardTerracotta.js
        ├── context/
        │   └── authContext.js
        ├── Github_assets/
        │   ├── ERD.png
        │   └── StitchedLogoBg.jpg
        ├── images/
        │   ├── AccessCtgryImg.png
        │   ├── CardPlaceholderImg.jpg
        │   ├── CartIcon.png
        │   ├── FBIcon.png
        │   ├── FBIconRed.png
        │   ├── FlagIcon.png
        │   ├── HeroTagline.png
        │   ├── HomeHeroImg.png
        │   ├── IGIcon.png
        │   ├── IGIconRed.png
        │   ├── KidsCtgryImg.png
        │   ├── MenCtgryImg.png
        │   ├── NewCtgryImg.png
        │   ├── product image placeholder.png
        │   ├── ProfileIcon.png
        │   ├── ShoeCtgryImg.png
        │   ├── StitchedRedLogo.png
        │   ├── StitchedWhiteLogo.png
        │   ├── TTIcon.png
        │   ├── TTIconRed.png
        │   ├── WishlistIcon.png
        │   ├── WomenCtgryImg.png
        │   ├── XIcon.png
        │   └── XIconRed.png
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

## Authors
Eunice van Zyl 251023, Kiera Poley 251197, Leandre Nel 251139 & Danika Rood 251165

## Acknowledgements
MongoDB, Cloudinary and our lecturer, Tsungai Katsuro
