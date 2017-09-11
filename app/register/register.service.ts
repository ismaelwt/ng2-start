import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

    private registerUrl: string = 'http://localhost:8000/usuario';

    constructor(private http: Http) { }

    save(data: any) {
        return this.http.post(this.registerUrl,JSON.stringify(data))
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}