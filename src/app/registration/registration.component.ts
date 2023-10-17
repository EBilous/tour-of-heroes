import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports: [
    FormsModule,
    BrowserModule
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData: any = {
    "id": 1,
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "address": {
      "street": "string",
      "city": "string",
      "state": "string",
      "zipCode": "string"
    },
    "role": [2],
    "created_at": "timestamp",
    "updated_at": "timestamp"
  };

  register() {
    console.log('Registration data:', this.formData);
    // You can send the registration data to your backend API
  }
}
