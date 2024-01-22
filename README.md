# PetJavaScript

Pet repository for practicing JavaScript

projectPlanner app is deployed on https://petjs-projectplanner-c0592.web.app/ using Firebase

nodeJS app is deployed on https://petjs-sharemyplaces.onrender.com/ using Render
It acts as a server and has two API calls:
1) [POST] https://petjs-sharemyplaces.onrender.com/add-location/<payload>
payload example => { "address":"Kyiv vul Peremohu","lat":50.4503596,"lng":30.5245025 }
2) [GET] https://petjs-sharemyplaces.onrender.com/location/<locationId>
