// geocoding.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  constructor(private http: HttpClient) {}

  geocodeAddress(address: string): Observable<any> {
    const apiKey = environment.googleMapsApiKey;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    return this.http.get(apiUrl);
  }
}
