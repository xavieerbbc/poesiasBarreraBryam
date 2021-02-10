import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { User } from '../models/User';
import { Coment } from '../models/Coment';
import { Document } from '../models/Document';
import { HomeService } from '../home/services/home.service';
import {  AngularFireAuth  } from '@angular/fire/auth'
import {Injectable} from '@angular/core'



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  

  constructor(private googlePlus: GooglePlus, private auth:AuthenticationService, private router: Router, private homeServices: HomeService, private afAuth: AngularFireAuth) { }

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
  }
  
  

  async LoginGoogle(){
    let error = await this.auth.googleLogin()
    if(error === undefined){
      this.router.navigate(['home'])


    }else{
      alert(JSON.stringify(error))
    }
  }

  async login(email: string, password:string){
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['register'])
    } catch(error){
        console.log('Error->', error)
    }
  }


  async logout(){
    let error = await this.afAuth.signOut();
    if(error === undefined){
      this.router.navigate(['register'])


    }else{
      alert(JSON.stringify(error))
    }
  }

}
