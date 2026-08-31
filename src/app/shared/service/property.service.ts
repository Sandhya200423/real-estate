import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  budget: string;
  bhk: string;
  price: number;
  area: string;
  image: string;

  bathrooms: number;
  status: string;
  possession: string;
  propertyAge: number;
  furnishing: string;
  carParking: number;
  floor: number;
  totalFloors: number;
  facing: string;

  features: string[];

  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly apiUrl = 'http://localhost:3000/properties';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }
}
