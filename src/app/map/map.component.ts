import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { GeocodingService } from '../services/geocoding.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @Input() address: string | undefined;
  map: L.Map | undefined;
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(private geocodingService: GeocodingService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['address'] && this.address) {
      this.geocodingService.geocodeAddress(this.address).subscribe((response: any) => {
        const location = response.results[0].geometry.location;
        this.latitude = location.lat;
        this.longitude = location.lng;

        // Initialize the map if not already initialized
        if (!this.map) {
          this.map = L.map('map').setView([0, 0], 13);

          // Add a tile layer (you can use your preferred map provider)
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(this.map);
        }

        // Remove previous markers
        this.map.eachLayer((layer: L.Layer) => {
          if (layer instanceof L.Marker) {
            this.map!.removeLayer(layer);
          }
        });

        // Check if this.address is defined before using it in bindPopup
       // Check if this.address is defined before using it in bindPopup
if (this.address) {
  // Add a marker with the profile's address and bind a popup
  L.marker([this.latitude!, this.longitude!])
    .bindPopup(this.address as string)
    .addTo(this.map!);
}

      });
    }
  }
}
