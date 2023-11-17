import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-relatorio',
  templateUrl: './geo-relatorio.component.html',
  styleUrls: ['./geo-relatorio.component.scss']
})
export class GeoRelatorioComponent implements OnInit {

  lat = -23.550520;
  lng = -46.633308;
  zoom = 10;

  google: any;

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const map = this.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: -33.9, lng: 151.2 },
    });

    this.setMarkers(map);
  }

  setMarkers(map: any) {
    const image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      size: new this.google.maps.Size(20, 32),
      origin: new this.google.maps.Point(0, 0),
      anchor: new this.google.maps.Point(0, 32),
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly',
    };

    const beaches = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1],
    ];

    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];

      new this.google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
      });
    }
  }

}
