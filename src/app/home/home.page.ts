import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Coment } from '../models/Coment';
import { AuthenticationService } from '../services/authentication.service';
import { Document } from '../models/Document';
import {  AngularFireAuth  } from '@angular/fire/auth'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private homeServices: HomeService, private auth: AuthenticationService, private afAuth: AngularFireAuth) {}

  documents: Observable<any[]>
  document: Document
  user: User
  coment: Coment
  
  ngOnInit() {

    this.documents = this.homeServices.getDocument()
    console.log(this.documents)

    this.auth.getCurrentUser().then(user =>{

      this.user=user
      

    })

    this.coment = {

      uid: "",
      text: "",
      document: this.document,
      user: this.user

    }

    this.document = {

      uid: "",
      text: "",
      user: this.user

    }


  }


  redirect(){

    this.router.navigate(['ingresar-poesia'])

  }

  insertComent(){


    console.log(this.user.uid)

  }


  async logout(){
    await this.afAuth.signOut();
  }
}
