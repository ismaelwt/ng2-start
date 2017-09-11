import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Module } from '../shared/models/module';


@Injectable()
export class ModuleService implements OnInit {

    private serverUrl: string = 'http://localhost:8000/module/';
    Module: Module[];


    constructor(private http: Http) { }

    head = new Headers({
        'Content-Type': 'application/json'
    });

    ngOnInit() {

    }


    save(data: any): Observable<Module> {

        return this.http.post(
            this.serverUrl,
            JSON.stringify(data),
            { headers: this.head })
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAll(): Observable<Module[]> {
        return this.http.get(this.serverUrl)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    findById(id:string): Observable<Module> {
        return this.http.get(this.serverUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    deleteById(id:string): Observable<Module> {
        return this.http.delete(this.serverUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}