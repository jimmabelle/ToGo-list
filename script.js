mapboxgl.accessToken = 'pk.eyJ1IjoiamltbWFiZWxsZSIsImEiOiJjamZ5MTBjeHAyNnYyMndxbjAyOTI0Y24yIn0.mvyT35xOV0oEtad34I0Vgg';
var k = 0;
var countries = {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "short_code": "se",
        "wikidata": "Q34",
        "place_name": "Sweden"
      },
      "geometry": {
        "coordinates": [
          17.675409,
          64.964875
        ],
        "type": "Point"
      },
      "id": "country.21595"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "fi",
        "wikidata": "Q33",
        "place_name": "Finland"
      },
      "geometry": {
        "coordinates": [
          26.199539,
          62.777754
        ],
        "type": "Point"
      },
      "id": "country.21596"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "es",
        "wikidata": "Q29",
        "place_name": "Spain"
      },
      "geometry": {
        "coordinates": [
          -4.055685,
          41.294856
        ],
        "type": "Point"
      },
      "id": "country.3110"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "no",
        "wikidata": "Q20",
        "place_name": "Norway"
      },
      "geometry": {
        "coordinates": [
          8.804821,
          61.248333
        ],
        "type": "Point"
      },
      "id": "country.31102"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "de",
        "wikidata": "Q183",
        "place_name": "Germany"
      },
      "geometry": {
        "coordinates": [
          10.018343,
          51.133481
        ],
        "type": "Point"
      },
      "id": "country.3135"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "us",
        "wikidata": "Q30",
        "place_name": "United States"
      },
      "geometry": {
        "coordinates": [
          -97.922211,
          39.381266
        ],
        "type": "Point"
      },
      "id": "country.3145"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "in",
        "wikidata": "Q668",
        "place_name": "India"
      },
      "geometry": {
        "coordinates": [
          78.476681,
          22.199166
        ],
        "type": "Point"
      },
      "id": "country.3146"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "fr",
        "wikidata": "Q142",
        "place_name": "France"
      },
      "geometry": {
        "coordinates": [
          2.618787,
          47.824905
        ],
        "type": "Point"
      },
      "id": "country.3148"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "jp",
        "wikidata": "Q17",
        "place_name": "Japan"
      },
      "geometry": {
        "coordinates": [
          138.59223,
          36.386493
        ],
        "type": "Point"
      },
      "id": "country.3178"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "dk",
        "wikidata": "Q35",
        "place_name": "Denmark"
      },
      "geometry": {
        "coordinates": [
          10.046297,
          55.963398
        ],
        "type": "Point"
      },
      "id": "country.3180"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "ph",
        "wikidata": "Q928",
        "place_name": "Philippines"
      },
      "geometry": {
        "coordinates": [
          124.69451,
          11.723699
        ],
        "type": "Point"
      },
      "id": "country.323"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "gb",
        "wikidata": "Q145",
        "place_name": "United Kingdom"
      },
      "geometry": {
        "coordinates": [
          -2.36967,
          54.237933
        ],
        "type": "Point"
      },
      "id": "country.358"
    },
    {
      "type": "Feature",
      "properties": {
        "short_code": "th",
        "wikidata": "Q869",
        "place_name": "Thailand"
      },
      "geometry": {
        "coordinates": [
          101.017438,
          15.127333
        ],
        "type": "Point"
      },
      "id": "country.375"
    },
    {
      "type": "Feature",
      "properties": {
        "wikidata": "Q334",
        "place_name": "Singapore, North West, Singapore"
      },
      "geometry": {
        "coordinates": [
          103.808053,
          1.351616
        ],
        "type": "Point"
      },
      "id": "place.8529875252536600"
    }
  ],
  "type": "FeatureCollection"
};

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [17.675409, 64.964875],
    zoom: 1
});

map.on('load', function () {
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: countries
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });

  map.on('click', 'locations', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var place = e.features[0].properties.place_name;
    var data =  e.features[0].properties;

    // var optEl = document.getElementById('options');
    // var select =document.createElement('select');
    // var option = select.appendChild(document.createElement('option'));
    // var option2 = select.appendChild(document.createElement('option'));
    // option.innerHTML = 'Yes';
    // option2.innerHTML = 'No';


    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(place)
      .addTo(map);

    // getValue(countries);
    // locationList(e , k);
    // k = k + 1;

    var ltext = getValue(countries);
    console.log(ltext);
    if (ltext) {
      locationList(e , k);
      k++;
    }

  });



  map.on('mouseenter', 'locations', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'locations', function () {
    map.getCanvas().style.cursor = '';
  });

  map.addControl(new mapboxgl.NavigationControl());

  location(countries);


});

// function locationList(data) {
//   for(var i=0; i<data.features.length; i++) {
//
//     var prop, list, listing, link, details;
//
//     prop = data.features[i].properties;
//     list = document.getElementById('list'); // accesing html element
//     listing = list.appendChild(document.createElement('li')); // creating list element
//     listing.className = 'item';
//     listing.id = 'listing-' + i;
//
//     link = listing.appendChild(document.createElement('a')); // creating anchor element
//     link.href = '#';
//     link.className = 'title';
//     link.dataPosition = i;
//     link.innerHTML = prop.place_name;
//
//     details = listing.appendChild(document.createElement('div')); // creating div element
//     details.innerHTML = prop.wikidata;
//
//     if (prop.wikidata) {
//       details.innerHTML += ' &middot; ' + prop.wikidata;
//     }
//
//   }
// }

function locationList(data, i) {
  // for(var i=0; i<data.features.length; i++) {

    var prop, list, listing, link, details;

    prop = data.features[0].properties;
    list = document.getElementById('list'); // accesing html element som heter list
    listing = list.appendChild(document.createElement('li')); // creating list element
    listing.className = 'item';
    listing.id = 'listing-' + i;

    link = listing.appendChild(document.createElement('a')); // creating anchor element
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.place_name;

    details = listing.appendChild(document.createElement('div')); // creating div element
    details.innerHTML = prop.short_code;

    if (prop.wikidata) {
      details.innerHTML += ' &middot; ' + prop.wikidata;
    }

    // var msg = ltext;
    // var message = details.appendChild(document.createElement('p'));
    // message.innerHTML = msg;

  // }
}

function getValue(inpt) {
    var userInpt = inpt;
    userInpt = prompt("Add toGo list: ", "Write what you know about the country?");
    return userInpt;


  }
