# PetJavaScript
## [Project Planner](projectPlanner) application
Deployed on https://petjs-projectplanner-c0592.web.app/ using Firebase.  
It's a simple app that utilizes the Drag and Drop functionality to switch projects between active and finished statuses.

## [Share My Places](shareMyPlaces) application
Deployed on https://petjs-sharemyplaces-61e5d.web.app/ using Firebase.  
It serves as a FE and communicates with the server (BE) to receive and add google maps locations.  
**NOTE:** if Share Place button is still grayed out(disbaled) when google location is found then please wait a bit until BE server gets up. If server doesn't receive any requests for 15 mins it goes to sleep 😴

The BE for this app (see [nodeJS](nodeJS) application) is deployed on https://petjs-sharemyplaces.onrender.com/  
It accepts two API calls:
1) [POST] https://petjs-sharemyplaces.onrender.com/add-location/#payload  
payload example => ```{ "address":"Kyiv vul Peremohu","lat":50.4503596,"lng":30.5245025 }```
2) [GET] https://petjs-sharemyplaces.onrender.com/location/#locationId, here locationId is the id of location that is stored on BE.
