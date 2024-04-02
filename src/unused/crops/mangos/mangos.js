function initMap() {
//Philly
var blah = {
PangasinaninLuzon: {
    center: { lat: 15.8949, lng: 120.2863 },
    value: 603502,
},
westvisa: {
    center: { lat: 11.0050, lng: 122.5373 },
    value: 603502,
},
centralvisayas: {
    center: { lat: 9.8169, lng: 124.0641 },
    value: 603502,
},
davaoregion: {
    center: { lat: 7.1907, lng: 125.4553 },
    value: 603502,
},
cotabato: {
    center: { lat: 7.1083, lng: 125.0388 },
    value: 603502,
},
};
// Create the map.
var map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 5,
    center: { lat: 12.8797, lng: 121.7740 },
    mapTypeId: "roadmap",
});
// Construct the circle for each value in citymap.
// Note: We scale the area of the circle based on the value.
for (var i in blah) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map2,
        center: blah[i].center,
        radius: Math.sqrt(blah[i].value) * 100,
    });
};

//India
var citymap = {
    tirupati: {
    center: { lat: 13.6288, lng: 79.4192 }, // 13.6288° N, 79.4192° E 16.190083642609885, 79.74669425159729
    value: 603502,
},
    vishakha:{
        center: { lat: 17.6868, lng: 83.2185 }, // 17.6868° N, 83.2185° E
        value: 603502,
    }
};
// Create the map.
var map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 6,
    center: { lat: 16.22173, lng: 80.12023 },  // ap - 16.22173, 80.12023
    value: 603502,
    mapTypeId: "roadmap",
});
// Construct the circle for each value in citymap.
// Note: We scale the area of the circle based on the value.
for (var j in citymap) {
    // Add the circle for this city to the map.
    var cityCircleI = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map1,
        center: citymap[j].center,
        radius: Math.sqrt(citymap[j].value) * 100,
    });
};

}
window.initMap = initMap;
