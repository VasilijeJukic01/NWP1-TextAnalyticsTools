import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token: string;
  savedToken: string;

  constructor() {
    this.token = '';
    this.savedToken = '';
  }

  ngOnInit(): void {
    this.savedToken = String(localStorage.getItem("token"))
  }

  setToken(): void {
    localStorage.setItem("token", this.token);
    console.log('Token: ' + localStorage.getItem("token"));
  }

}
