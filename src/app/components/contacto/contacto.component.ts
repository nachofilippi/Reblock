import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
// spinner
import { NgxSpinnerService } from 'ngx-spinner';
// sweet alert
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']

})
export class ContactoComponent implements OnInit {

  URI = 'https://s2th6emz9d.execute-api.us-east-1.amazonaws.com/prod';

  constructor(private spinner: NgxSpinnerService,
    private _http: HttpClient) { }

  sendMessage(body) {
    return this._http.post(this.URI, body);
  }

  ngOnInit() {
    // this.sendMessage({
    //   "name": "nacho",
    //   "subject": "hola",
    //   "phone": "hola",
    //   "email": "nachofilippi@live.com.ar",
    //   "html": "asfsga"
    // })
    // swal({
    //   title: 'MENSAJE NO ENVIADO',
    //   text: 'Intente nuevamente más tarde',
    //   // tslint:disable-next-line:quotemark
    //   icon: "error"
    // });
  }

  contactForm(form: NgForm) {
    this.spinner.show();
    this.sendMessage(form.value).subscribe(() => {
      this.spinner.hide();
      swal({
        title: 'MENSAJE ENVIADO',
        text: 'Nos estaremos contactando a la brevedad',
        icon: 'success'
      });
    },
      (error) => {
        this.spinner.hide();
        console.log(error);
        swal({
          title: 'MENSAJE NO ENVIADO',
          text: 'Intente nuevamente más tarde',
          // tslint:disable-next-line:quotemark
          icon: "error"
        });
      }
    );
  }
}
