import React, { Component } from 'react';

/*
* Use this component as a launching-pad to build your functionality.
*
*/

export default class YourComponent extends Component {
  map;
  marker;
  initMap = () => {
    let coord = {lat: (19.3952327) ,lng: (-99.2100748)};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: (8),
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
    marker();

  }

  render() {
    return (
      <div style={divStyle} id={map}>
		  {/* <h1> Put your solution here!</h1> */}
   
      </div>
      
    );
  }
}
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A&callback=initMap"></script>
var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};