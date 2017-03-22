import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GithubServcies{
    private username: string;
    private client_id: string = "982866b86515a1467f88";
    private client_sectet: string = "279ce2e557f793875525912735e93b4400b92357";

    constructor(private _http: Http){
        this.username = 'benjaminhuanghuang';
        // this.username = 'hr2204';
    }

    getUser(){
        return this._http.get("http://api.github.com/users/" + this.username 
                + "?client_id" + this.client_id + "&client_secret="+ this.client_sectet)
                         .map(res=>res.json());
    }

    getRepos(){
        return this._http.get("http://api.github.com/users/" + this.username 
                + "/repos?client_id" + this.client_id + "&client_secret="+ this.client_sectet)
                         .map(res=>res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}
