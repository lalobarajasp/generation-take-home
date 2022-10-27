import React, { Component } from 'react';
import axios from 'axios'
/*
* Use this component as a launching-pad to build your functionality.
*
*/

export default class YourComponent extends Component {

  
  componentfunction = () => {
    axios.get('../store_directory.json')
    .then( response => {
      response.data.map( (store, i) => {
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDZsH2zpgfR2b1GCfp3GY7LAe_NKMCv3dM&address="'+ store.Address + '"'
        axios.get(url)
        .then( response => {
          let storeObject = {store: store, location: response.data}
          this.setState({
            storeLocations: this.state.storeLocations.concat(storeObject)
          })
        })
        .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))
  }

  handleMarkerClick = (event) => {
    this.setState({
      favoriteStores: this.state.favoriteStores.concat(event)
    })
  }

  render() {
    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDZsH2zpgfR2b1GCfp3GY7LAe_NKMCv3dM&v=3.exp&libraries=geometry,drawing,places'
    return (
      <div style={divStyle}>
		  {/* <h1> Put your solution here!</h1> */}
      <div style={{ height: '70%', width: '100%' }}>
          <InitMap
            googleMapURL={url}
            containerElement={<div style={{ height: '92vh' }} />}
            mapElement={<div style={{ height: '92vh', border:'1px solid rgb(255,255,255)' }} />}
            locations={this.state.locations}
            storeLocations={this.state.storeLocations}
            onMarkerClick={this.handleMarkerClick}
          />
        </div>
        <div style={storesStyle}>
          <h3>My Favorite Stores</h3>
            {this.state.favoriteStores.map( (favoriteStore, i) => {
              return <div key={i}>
                <p><strong>{favoriteStore.store.Name}: </strong><span>{favoriteStore.location.results[0].formatted_address}</span></p>
              </div>
            })}
        </div>


      </div>
     
     



    );
  }
}
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A&callback=initMap"></script> */}
var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};