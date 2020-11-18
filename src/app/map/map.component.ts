// import { environment}  from './../../environments/environment.ts;
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 30.3753
  lng = 69.3451;
  direction;
  constructor() { }
  ngOnInit() {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: this.style,
    //     zoom:5,
    //     center: [this.lng, this.lat]
    // });
    // Add map controls

    // this.map.addControl(new mapboxgl.NavigationControl());
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.4512, 43.6568],
      zoom: 13
      });
      var marker = new mapboxgl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(this.map);
      this.direction  = new Directions({
        accessToken: mapboxgl.accessToken
      })
this.map.addControl(this.direction,'top-right')

      this.direction.setOrigin("Lahore, Punjab, Pakistan"); // can be address in form setOrigin("12, Elm Street, NY")
      this.direction.setDestination("Karachi, Sindh, Pakistan");

      // this.map.addControl(direction  )
      // this.map.addControl(direction,'top-right')// can be address
      console.log(this.map)
      // this.direction.actions.hoverMarker();


    // this.  map.addControl(
    //     new Directions({
    //     accessToken: mapboxgl.accessToken
    //     }).setOrigin([12,23]),
    //     'top-right'
    //     )


  }


  // abc(){
  //   var geocoder = new MapboxGeocoder({
  //     accessToken: mapboxgl.accessToken,
  //     types: 'poi',
  //     // see https://docs.mapbox.com/api/search/#geocoding-response-object for information about the schema of each response feature
  //     render: function (item) {
  //     // extract the item's maki icon or use a default
  //     var maki = item.properties.maki || 'marker';
  //     return (
  //     "<div class='geocoder-dropdown-item'><img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/" +
  //     maki +
  //     "-15.svg'><span class='geocoder-dropdown-text'>" +
  //     item.text +
  //     '</span></div>'
  //     );
  //     },
  //     mapboxgl: mapboxgl
  //     });
  //    this.map.addControl(geocoder);
  // }

  a(){
    console.log(this.map)
    console.log(this.direction.actions)
    this.direction.setDestination("Larkana, Sindh, Pakistan");

    console.log(this.direction.actions.reverse())
    this.direction  .on("route", e => {
      // routes is an array of route objects as documented here:
      // https://docs.mapbox.com/api/navigation/#route-object
      let routes = e.route

      // Each route object has a distance property
      console.log("Route lengths", routes.map(r => r.distance))
  })
  }
}
