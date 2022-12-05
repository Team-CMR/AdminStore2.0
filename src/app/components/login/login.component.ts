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
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJBUFAgUFdBIEFOR1VMQVIgLyBTUFJJTkcgQk9PVCIsImp0aSI6IjEiLCJzdWIiOiJ3d3cudmFsaWRhbmRvLXRva2VuLXB3YS5jb20iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJuYW1lIjoiQWRtQ2xhdWRpYSIsImVtYWlsIjoiYWRtaW4uY2xhdWRpYUBtYWlsLmNvbSIsInJvbCI6IkFETUlOIiwiaWF0IjoxNjcwMDI3OTM1LCJleHAiOjE2NzAwMjg1MzV9.hb32qpD94E237IERPtyL30J830AzDv2u6Wa91riYGuBm55HSTzRQgAV4UgGG6CMoGcVA-OWDbyYWAuyX2Fs4P8oz_pxBu69LQNMrUudjRJs9ePuqAdT-zLApep4ErDNEZNg_SDi8byH9rw3AQZQl_hgVXxjKydCka1FCREH-vONo_LhddtvK4HrwyXtWmmIU9JpQ4ERYuTST7SMuOefRmqS-x4vP3FXdndHGT9qZr0Cm76rYb30LLliwPBuHkYBBq3_8Hq0-L-A7cIOTmjRk9pG92-tDtDwviK8XmCA3j3ZcGqLDsDK7QgTfCRKa5d1QWsdx3CoYDvmd6Qw3jUubFWG7uB1JDOQrqL6FpByO9ywg390JTBmjOem76x2m2KOrUy1ZsXlvJ9lsMxFi1g04ZVfmat7LfWawK351pMhHAXkiovBm-l2wD9NxPw_IdeX1dwOh_m4z7SrnAmMzXBNL4luUZWwmqvXUlVdf2Dll__FMrTsiOD2eUIq4LKzpwDgJBqkrTCqNMoGPaQ8ACCoirSgW0SpY9gfcYL30gAGfMdl_DkUG8UQPhG20Addz5JpIJWkXqOe-jSQ6eHrsZDLTL6XhaeVaOIA15E4Z53Yx7YS-_0oQl2a512NrCgnUAdZPgItgUuVvZT0RchqvH0akdAgctf0HqistvRYhSib6h_4',
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=70F68DB5D3DCD84A19F9A4D9584C7890'
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
