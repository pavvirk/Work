import {Component,OnInit} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

interface UserResponse{
    login:string;
    bio:string;
    company:string;

}

@Component({
    selector:'get-root',
    template:'<h1>Simple</h1>'
})
export class httpClientExample implements OnInit{


    constructor(private http:HttpClient){}

    ngOnInit():void{
        this.http.get<UserResponse>('https://github.com').subscribe(data=>{
            console.log("User Login"+data.login);
            console.log("Bio"+data.bio);
            console.log("Company"+data.company);

        },
        (err:HttpErrorResponse)=>{
            if(err.error instanceof Error)
            {
                console.log("Client Side error occurred");
            }
            else
            {
                console.log("Server Side error occurred");
            }
        });
    }

}