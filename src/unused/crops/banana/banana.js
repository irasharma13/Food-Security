function initMap() {
    //china
    var china = {
        Guangdong: {
            center: { lat: 23.1371, lng: 103.1954 },
            value: 2590000,
        },
        Guangxi: {
            center: { lat: 22.8152 , lng: 108.3275 },
            value: 2590000,
        },
        Yunnan: {
            center: { lat: 25.0453, lng: 102.7097 },
            value: 2590000,
        },
        Hainan: {
            center: { lat: 20.0200, lng: 110.3486 },
            value: 2590000,
        },
    };
    // Create the map.
    var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 4,
        center: {lat: 30.8617, lng: 104.1954},        
        mapTypeId: "roadmap",
    });
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the value.
    for (var i in china) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map1,
            center: china[i].center,
            radius: Math.sqrt(china[i].value) * 100,
        });
    }
    //indonesia
    var indonesia = {
        Lampung: {
            center: { lat: -4.69931, lng: 105.0097 }, //-4.699314881941552, 105.00975409000337
            value: 603502,
        },
        eastjava: {
            center: { lat: -7.4851 , lng: 112.17081 }, //-7.485111328082559, 112.17081791590583
            value: 603502,
        },
        westjava: {
            center: { lat: -6.735131, lng: 107.296093}, //-6.735131, 107.296093
            value: 603502,
        },
    };
    // Create the map.
    var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 5,
        center: {lat: 0.7893, lng: 113.9213}, //Indonesia 0.7893° S, 113.9213° E 
        mapTypeId: "roadmap",
    });
    // Construct the circle for each value in iran.
    // Note: We scale the area of the circle based on the value.
    for (var j in indonesia) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map2,
            center: indonesia[j].center,
            radius: Math.sqrt(indonesia[j].value) * 50,
        });
    }
};
    window.initMap = initMap;
    