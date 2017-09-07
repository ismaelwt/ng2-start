import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../shared/models/company';


@Injectable()
export class CompanyService implements OnInit {

    private registerUrl: string = 'http://localhost:8000/empresa/';
    companies: Company[];
    test: any;


    constructor(private http: Http) { }

    ngOnInit() {

    }

    save(data: any): Observable<Company> {

        return this.http.post(
            this.registerUrl,
            JSON.stringify(data))
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAll(): Observable<Company[]> {

        return this.http.get(this.registerUrl)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    findById(id:string): Observable<Company> {
        return this.http.get(this.registerUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    deleteById(id:string): Observable<Company> {
        return this.http.delete(this.registerUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}