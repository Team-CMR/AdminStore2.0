import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username?: any;
  userpass?: any;

  ngOnInit(): void {
  }

  onKey(event: any) {
    switch (event.target.id) {
      // Login
      case 'inpUserNameLogin':
        this.username = event.target.value;
        break;
      case 'inpUserPassLogin':
        this.userpass = event.target.value;
        break;
    }
  }

  onSubmit(event: any) {
    event.preventDefault()

    var axios = require('axios');
    var data = JSON.stringify({
      "user": "RodrigoP",
      "password": "RodrigoP9982736"
    });

    var config = {
      method: 'post',
      url: 'https://localhost:8004/api/auth/generate-token',
      headers: {
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJBUFAgUFdBIEFOR1VMQVIgLyBTUFJJTkcgQk9PVCIsImp0aSI6IjEiLCJzdWIiOiJ3d3cudmFsaWRhbmRvLXRva2VuLXB3YS5jb20iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJuYW1lIjoiQWRtQ2xhdWRpYSIsImVtYWlsIjoiYWRtaW4uY2xhdWRpYUBtYWlsLmNvbSIsInJvbCI6IkFETUlOIiwiaWF0IjoxNjcwMjY5NzA1LCJleHAiOjE2NzAyNzAzMDV9.kGpRQCmn4cD9QAZq4lVzGtOxh_WIObFQUnDVzTA6CrlAEd9XqfceeqsAeJ1-q2XK3L6xAj69rE4N937T9QtPlxa_2zCR2XwaqppuTr0IppFEc8XEuAzWdGtXtEhPCbBF8FsjSZDHKwIEuA10h_yBoYk-x5Y5hgHtPWJTZC6YCFUH8KGQFQ5UT6emjNmbIqUZbksXfRZNoe4cbvmZbsoxFJdopJRGY1ImKjFl9mHK6P2XYwgBPcuiZediJ2WKhfzrCSCbxu5SkNtgkwTzvNvM_bHmd_qRALamMrO3M4XpJNOS3-M7-qOG9DUBg5A9tp-bPBg17H3GWfXSFc3q8V_XM-uYEVfyhfUI8wMd88aX4JjZExIGjuVz_2WDpSr0bpNxqN_CzlG8k7WAS7JsRXZjWNICcBGvYaOVxY_qLQLvRgEyqOD4Gcex04GFX4MjC_Zya1KvgVgZ_Zf_oSb6F10uZZYSXmAABk41832LLCsbcyPb01HJ7MkUpzNAkaqJmE2PF20I06v60c2mVjMguxsOpcbFOEUCyyjtcs81NLBorNpwb9g0hBzKrXfFWcYZrWa_BtDqDoHmoQl3ojFDiaRWnJGw1sd5ZOdwJtp3KsgbQoE225NTAecYbgFeUju2t9oZlPVL_h1tNG6SPDnR6GPYVookk1qj5qdEBiauNjFB50k',
        'Authorization': 'Bearer '+localStorage.getItem("Token"),
        'Content-Type': 'application/json',
        // 'Cookie': 'JSESSIONID=70F68DB5D3DCD84A19F9A4D9584C7890'
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });

  }
}
