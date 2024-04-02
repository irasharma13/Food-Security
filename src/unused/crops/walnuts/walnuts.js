function initMap() {
//cali
var cali = {
sanjoaquin: {
    center: { lat: 36.6040, lng: -120.1868 }, //Latitude: 36.6040 Longitude: -120.1868
    value: 603502,
},
sacramento: {
    center: { lat: 38.4747, lng: -121.3542 }, //38.4747° N, 121.3542° W
    value: 603502,
},
};
// Create the map.
var map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 6,
    center: { lat: 36.7783, lng: -119.4179 }, //36.7783° N, 119.4179° W
    mapTypeId: "roadmap",
});
// Construct the circle for each value in citymap.
// Note: We scale the area of the circle based on the value.
for (var i in cali) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map1,
        center: cali[i].center,
        radius: Math.sqrt(cali[i].value) * 100,
    });
}
//iran
var iran = {
    kerman: {
    center: { lat: 13.6288, lng: 79.4192 },
    value: 603502,
},

kermanshah: {
    center: { lat: 30.2839, lng: 57.0834 }, //30.2839° N, 57.0834° E
    value: 603502,
},
hamedan: {
    center: { lat: 34.7983, lng: 48.5148 }, //34.7983° N, 48.5148° E
    value: 603502,
},
lorestan: {
    center: { lat: 33.5818, lng: 48.3998 }, //33.5818° N, 48.3988° E
    value: 603502,
},
kohgiloyeh: {
    center: { lat: 30.7246 , lng: 50.8456 }, //30.7246° N, 50.8456° E
    value: 603502,
},
khorasanrazavi: {
    center: { lat:35.1020 , lng: 59.1042 }, //35.1020° N, 59.1042° E
    value: 603502,
},
bakhtiari: {
    center: { lat: 35.5685 , lng: 45.3991 }, //35.5685° N, 45.3991° E
    value: 603502,
},
eastazerbaiajn: {
    center: { lat: 38.4281, lng: 45.9071 }, //38.4281° N, 45.9071° E
    value: 603502,
},
westazerbaiajn: {
    center: { lat:37.7595 , lng: 45.0000 }, //37.7595° N, 45.0000° E
    value: 603502,
},
markazi: {
    center: { lat: 34.6962, lng: 49.6911 }, //34.6962° N, 49.6911° E
    value: 603502,
},
};
// Create the map.
var map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 6,
    center: { lat: 32.4279, lng: 53.6880 }, // iran 32.4279° N, 53.6880° E
    mapTypeId: "roadmap",
});
// Construct the circle for each value in iran.
// Note: We scale the area of the circle based on the value.
for (var j in iran) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map2,
        center: iran[j].center,
        radius: Math.sqrt(iran[j].value) * 50,
    });
}
}
window.initMap = initMap;
