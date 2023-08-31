import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private http: HttpClient) { }

	sendPostGetRawText(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<string>> {
		// call
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.post(url, body, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}

	sendPostWithString(url: string, body: string, headers: HttpHeaders): Observable<HttpResponse<any>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.post(url, body, {
			headers,
			observe: 'response'
		})
	}

	sendDelete<T>(url: string, headers?: HttpHeaders): Observable<HttpResponse<T>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		if (!headers)
			headers = new HttpHeaders();
		return this.http.delete<T>(url, {
			headers,
			observe: 'response',
			responseType: 'json'
		});
	}

	sendPost<T>(url: string, body?: any, headers?: HttpHeaders): Observable<HttpResponse<T>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.post<T>(url, body, {
			headers,
			observe: 'response',
			responseType: 'json'
		});
	}

	sendGet<T>(url: string, headers: HttpHeaders): Observable<HttpResponse<T>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.get<T>(url, {
			headers,
			observe: 'response'
		});
	}

	sendGetRawText(url: string, headers: HttpHeaders): Observable<HttpResponse<string>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.get(url, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}

	sendGetBlob(url: string): Observable<HttpResponse<Blob>> {
		if (!url.startsWith('/'))
			url = '/' + url;
		url = environment.baseRestUrl + url;
		return this.http.get(url, {
			observe: 'response',
			responseType: 'blob'
		});
	}

}
