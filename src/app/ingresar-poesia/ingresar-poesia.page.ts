import { Component, OnInit } from '@angular/core';
import { Document } from '../models/Document';
import { PoesiaService } from './services/poesia.service';
import { User } from '../models/User';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-ingresar-poesia',
  templateUrl: './ingresar-poesia.page.html',
  styleUrls: ['./ingresar-poesia.page.scss'],
})
export class IngresarPoesiaPage implements OnInit {

  user: User
  
  document: Document

  constructor(private poesiaService: PoesiaService, private auth: AuthenticationService) { }

  ngOnInit() {

    

    this.auth.getCurrentUser().then(user =>{

      this.user=user
      

    })

    this.document = {

      uid: '',
      text: '',
      user: this.user
    }
    
  }

  insertDocument(){
    
    this.poesiaService.insertDocument(this.document, this.user.uid)

  }

}
