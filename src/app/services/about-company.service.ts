import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class AboutCompanyService {
	constructor(private http: HttpClient) {}

	getItems() {
		return this.http.get<{ any: any }>('/assets/shipping.json');
	}
}
