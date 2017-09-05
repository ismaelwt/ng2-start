import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RegisterService {

    private registerUrl: string = 'http://localhost:8000/usuario';

    constructor(private http: Http) { }

    head = new Headers({
        'Content-Type': 'application/json'
    });


    save(data: any) {
        
        return this.http.post(
          this.registerUrl,
          JSON.stringify(data),
          {headers: this.head}
        ).map (res => res.json()).subscribe(
            data => {console.log(data);},
            err => console.log(err),
            () => console.log('Fetching complete for Server Metrics')
        );
      }

}