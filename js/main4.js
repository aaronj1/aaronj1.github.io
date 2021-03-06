function initMap() {
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  const styledMapType = new google.maps.StyledMapType(
    [
      //{ elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      {
        elementType: "geometry",
        stylers: [{
          color: "#e6e6e6"
        }]
      },
      //{ elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#525151"
        }]
      },
      //{ elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#f2f2f2"
        }]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        //stylers: [{ color: "#c9b2a6" }],
        stylers: [{
          color: "#b5b3b1"
        }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        //stylers: [{ color: "#dcd2be" }],
        stylers: [{
          color: "#d9d9d9"
        }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#ae9e90" }],
        stylers: [{
          color: "#b0b0b0"
        }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        //stylers: [{ color: "#dfd2ae" }],
        stylers: [{
          color: "#c9c9c9"
        }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        //stylers: [{ color: "#dfd2ae" }],
        stylers: [{
          color: "#c9c9c9"
        }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#93817c" }],
        stylers: [{
          color: "#8f8f8f"
        }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        //stylers: [{ color: "#a5b076" }],
        stylers: [{
          color: "#b0b0b0"
        }],

      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#447530" }],
        stylers: [{
          color: "#6b6b6b"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        //stylers: [{ color: "#f5f1e6" }],
        stylers: [{
          color: "#f5f5f5"
        }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        //stylers: [{ color: "#fdfcf8" }],
        stylers: [{
          color: "#ffffff"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        //stylers: [{ color: "#f8c967" }],
        stylers: [{
          color: "#c7c7c7"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        //stylers: [{ color: "#e9bc62" }],
        stylers: [{
          color: "#9e9d9b"
        }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        //stylers: [{ color: "#e98d58" }],
        stylers: [{
          color: "#adabaa"
        }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        //stylers: [{ color: "#db8555" }],
        stylers: [{
          color: "#cfcdcc"
        }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#806b63" }],
        stylers: [{
          color: "#858585"
        }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        //stylers: [{ color: "#dfd2ae" }],
        stylers: [{
          color: "#cfcfcf"
        }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#8f7d77" }],
        stylers: [{
          color: "#8c8c8c"
        }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        //stylers: [{ color: "#ebe3cd" }],
        stylers: [{
          color: "#d4d4d4"
        }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        //stylers: [{ color: "#dfd2ae" }],
        stylers: [{
          color: "#d1d1d1"
        }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        //stylers: [{ color: "#b9d3c2" }],
        stylers: [{
          color: "#becee4"
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        //stylers: [{ color: "#92998d" }],
        stylers: [{
          color: "#878787"
        }],
      },
    ], {
      name: "Styled Map"
    }
  );
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 38.627222,
      lng: -90.197778
    },
    zoom: 11,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map", "bicycling"],
    },
  });
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  //const bikeLayer = new google.maps.BicyclingLayer();
  //bikeLayer.setMap(map);

  // Set the stroke width, and fill color for each polygon
  map.data.setStyle({
    strokeWeight: 1,
    strokeColor: "green"
  });

  var GBP_BL = map.data.loadGeoJson(
    "https://raw.githubusercontent.com/KeHaDo/ATR/main/GBP_BL.geojson"
  );

  var BP_MUP = map.data.loadGeoJson(
    "https://raw.githubusercontent.com/KeHaDo/ATR/main/GBP_MUP.geojson"
  );



}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "700px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

myFunction();

function myFunction() {
  alert("Navigating cities like St. Louis by walking, biking, or using a mobility device isn't the easiest with the prioritization of automobiles since their adoption in the early 20th century. Active transportation and protecting vulnerable roadway users is of great importance in urban areas where the various modes mix with automobile traffic.");
}

