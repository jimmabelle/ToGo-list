mapboxgl.accessToken = 'pk.eyJ1IjoiamltbWFiZWxsZSIsImEiOiJjamZ5MTBjeHAyNnYyMndxbjAyOTI0Y24yIn0.mvyT35xOV0oEtad34I0Vgg';

var country = {
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

map.on('load', function (){

  map.addLayer({
    id: 'locations',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: country
    }
  });

  map.on('click', 'locations', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var place = e.features[0].properties.place_name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(place)
            .addTo(map);
  });

  map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
  });

  map.addControl(new mapboxgl.NavigationControl());
})
