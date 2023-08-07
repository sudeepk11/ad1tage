const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.use(express.static('public'))


app.get("/", function (req, res) {
    res.render('home.ejs');
});

app.get("/hotels", function (req, res) {
    var types = [
        { type: "Camping",  image: "https://t3.ftcdn.net/jpg/05/39/76/28/360_F_539762817_90lTAPZAQwcS9nMzlfpGW0GW1JIttMTE.jpg" },
        { type: "Kitchen",  image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
        { type: "Mountain", image: "https://img.freepik.com/free-photo/scenic-sunrise-high-mountains-alpes-generative-ai_191095-494.jpg" },
        { type: "Castles",  image: "https://hips.hearstapps.com/hmg-prod/images/bojnice-castle-1603142898.jpg" },
        { type: "Camping",  image: "https://t3.ftcdn.net/jpg/05/39/76/28/360_F_539762817_90lTAPZAQwcS9nMzlfpGW0GW1JIttMTE.jpg" },
        { type: "Kitchen",  image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
        { type: "Mountain", image: "https://img.freepik.com/free-photo/scenic-sunrise-high-mountains-alpes-generative-ai_191095-494.jpg" },
        { type: "Castles",  image: "https://hips.hearstapps.com/hmg-prod/images/bojnice-castle-1603142898.jpg" },
        // Add more objects here...
    ];
    res.render('hotels/hotel.ejs' , {types: types});
});

app.get("/hotels/:id", function (req, res) {
    var types = [
        { type: "Kitchen",  image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
 
    ];
    res.render('hotels/single-hotel.ejs' , {types: types});
});

// For Setting Up the Port at Local Host 4000
app.listen('1000', function () {
    console.log("Listening");
});