import { Component, VERSION } from '@angular/core';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import { HttpClient } from "@angular/common/http";
import { map, delay } from "rxjs/operators";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  private apiURL = "https://api.github.com/";
  public message: string = "Uninitialized";
  public response;

  constructor(private httpClient: HttpClient) {}

  async fetchData() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
    this.message = "Fetched";
  }
}

var username = document.getElementById('username');
var password = document.getElementById('password');

console.log("username :",username,"password : ",password);
const firebaseConfig = {
  apiKey: "AIzaSyAZbFQA1JsLJ77T83sCx80BnkmUqdc-yak",
  authDomain: "trickster-e9744.firebaseapp.com",
  databaseURL: "https://trickster-e9744-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trickster-e9744",
  storageBucket: "trickster-e9744.appspot.com",
  messagingSenderId: "927794888106",
  appId: "1:927794888106:web:0b98442cc91d79a5187fd3"
};

const app = initializeApp(firebaseConfig);

const data = {
  username: username,
  password: password
};

const db = getFirestore();
const res =  db.collection('login_data').doc('login_data').set(data);