import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  private selectedCategory = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}


  //get all products
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/all`); 
  }

  setSelectedCategory(category: string): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory.asObservable();
  }

  //get laptop products 
  getLaptopCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/laptop`)
  }

  //get dasktop products
  getDesktopCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/desktop`)
  }

  //get monitor products
  getMonitorCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/monitor`)
  }

  //get tv products
  getTvCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/tv`)
  }

  //get gaming products
  getGamingCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/gaming`)
  }

  //get accessories products
  getAccessoriesCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/accessories`)
  }

  //get bluetooth-speaker products
  getSpeakerCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/bluetooth-speaker`)
  }

  // get single product
  getSingleProduct(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}
