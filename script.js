mapboxgl.accessToken = 'pk.eyJ1IjoiamltbWFiZWxsZSIsImEiOiJjamZ5MTBjeHAyNnYyMndxbjAyOTI0Y24yIn0.mvyT35xOV0oEtad34I0Vgg';
var k = 0;  // initial number for todo list
// geojson data
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

// map features
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
    'icon-image': 'star-15',
    'icon-allow-overlap': true,
  }
});

// map click event
map.on('click', 'locations', function (e) {
  var ltext = getValue();   // access getValue function after clicking
  if (ltext) {  // if the condition is true add to list
    // access locationList function
    // parameter e actual layer, k list number, l text/personal input text
    locationList(e, k, ltext);
    k++; // increment the list number
  }
});
map.on('mouseenter', 'locations', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'locations',  function () {
  map.getCanvas().style.cursor = '';
});
map.addControl(new mapboxgl.NavigationControl()); // zoom in and out
});

// input text value function and confirmation
function getValue(inpt) {
  var userInpt = inpt;
  userInpt = prompt("Add toGo list: ", "Write what you know about the country?");
  return userInpt;
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 8
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  // Check if there is already a popup on the map and if so, remove it
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + currentFeature.properties.place_name + '</h3>')
    .addTo(map);
}

// function list
function locationList(data, i, ltext) {
  var prop = data.features[0].properties;

  var list = document.getElementById('list'); // get element list id from html
  var listing = list.appendChild(document.createElement('li')); // create list element to html
  listing.className = 'item';
  listing.id = 'listing-' + i;

  var link = listing.appendChild(document.createElement('a')); // create anchor element to html
  link.href = '#';
  link.className = 'place';
  link.dataPosition = i;
  link.innerHTML = prop.place_name;

  var details = listing.appendChild(document.createElement('div')); // create div element to html
  details.innerHTML = prop.short_code;
  if (prop.wikidata) {
    details.innerHTML += ' &middot; ' + prop.wikidata;
  }

  // close button
  var close = listing.appendChild(document.createElement('span'));
  close.appendChild(document.createTextNode('\u00D7'));
  close.className = 'closeBttn';

  // input message and append to the list
  var msg = ltext;
  var message = details.appendChild(document.createElement('p')); // create new element
  message.className = "ltext";
  message.innerHTML = msg;

  // form input filter
  var formFilter = document.getElementById('form-1');

  // event for the list countries you created
  link.addEventListener('click', function(e) {
    e.preventDefault();

    var clickedListing = data.features[0];  // store and access the data features

    flyToStore(clickedListing);
    createPopUp(clickedListing);

    var activeItem = document.getElementsByClassName('active'); // hightligting the country you choose
     if (activeItem[0]) {
       activeItem[0].classList.remove('active');
     }
     this.parentNode.classList.add('active');
  });

  // event delegation list
  close.addEventListener('click', function(e) {
    event.preventDefault();
    var activeItem2 = document.getElementsByClassName('active');
    console.log ('activeItem2: ' + activeItem2.value);
    if (activeItem2) {
     listing.remove(activeItem2);
    }
  });

  // event form
  formFilter.addEventListener('submit', function(e) {
    event.preventDefault();
    console.log('första gång');

      var inptItem = document.getElementById('textItem');  // input id element
      var inptVal = inptItem.value.toUpperCase();
      var inptValFirst = inptVal.slice(0, 1);
      var item = document.getElementsByTagName('li');   // list tag element
      var itemPlace = document.getElementsByClassName('place');  // anchor class name place

      var arr = [];
      var xa  = 0;

      for(var j=0; j<item.length; j++) {
        var plce =  itemPlace[j].innerHTML;
        var plceFirst = plce.slice(0, 1);
          console.log(j);

           if (inptValFirst != plceFirst ) {
             console.log ('jag är här');
             var itemRemove = item;
             var itemRemove2 = item;
             var itemRemoveVal = itemRemove2[j].innerHTML;
              console.log('elements content removed: ' + itemRemoveVal);

              if (itemRemoveVal) {
                   listing.remove(itemRemoveVal);
                   arr[xa] = itemRemoveVal;
                   xa++;
                   console.log (arr);
              }
           }
      }

  });

}
