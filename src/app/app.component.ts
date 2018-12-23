import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    ngOnInit() {
        const config = {
            apiKey: "AIzaSyAQ5rV-_HRvxGEn1BiTaKCGufWRz0MXUQo",
            authDomain: "web-project-solod.firebaseapp.com",
            databaseURL: "https://web-project-solod.firebaseio.com",
            projectId: "web-project-solod",
            storageBucket: "web-project-solod.appspot.com",
            messagingSenderId: "539342761433"
        };

        firebase.initializeApp(config);
    }
}
