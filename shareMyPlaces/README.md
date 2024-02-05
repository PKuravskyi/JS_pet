## Share My Places Application

**Frontend Deployment:** [Firebase](https://petjs-sharemyplaces-61e5d.web.app/)  
This application serves as a front-end, communicating with the back-end server to manage Google Maps locations.

**Backend Deployment:** [Railway](https://pkuravskyi-sharemyplaces.up.railway.app/)  
The back-end for the Share My Places application. It handles two API calls to manage Google Maps locations.

- **API Endpoints:**

  1. [POST] `https://pkuravskyi-sharemyplaces.up.railway.app/add-location/`
     - Payload Example: `{ "address": "Kyiv vul Peremohu", "lat": 50.4503596, "lng": 30.5245025 }`
  2. [GET] `https://pkuravskyi-sharemyplaces.up.railway.app/location/#locationId`
     - Replace `#locationId` with the actual location ID.
