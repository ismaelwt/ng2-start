import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GroupModule } from '../shared/models/group-module';


@Injectable()
export class GroupModuleService implements OnInit {

    private serverUrl: string = 'http://localhost:8000/group-module/';
    groupModuels: GroupModule[];


    constructor(private http: Http) { }

    head = new Headers({
        'Content-Type': 'application/json'
    });

    ngOnInit() {

    }


    save(data: any): Observable<GroupModule> {

        return this.http.post(
            this.serverUrl,
            JSON.stringify(data),
            { headers: this.head })
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAll(): Observable<GroupModule[]> {
        return this.http.get(this.serverUrl)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    findById(id:string): Observable<GroupModule> {
        return this.http.get(this.serverUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    deleteById(id:string): Observable<GroupModule> {
        return this.http.delete(this.serverUrl + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}