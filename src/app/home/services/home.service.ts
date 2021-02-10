import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Coment } from 'src/app/models/Coment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private afs: AngularFirestore) { }

  getDocument(): Observable<any[]>{

    return this.afs.collection('documents', 
        ref => ref.orderBy('uid', 'asc')).valueChanges();
  }

  getUser(): Observable<any[]>{

    return

  }

  insertComent(coment: Coment, user: string, document: string){

   

    const refDocument = this.afs.collection("coments")
    coment.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(coment))
    refDocument.doc(coment.uid).set(param)
    
    
    this.afs.collection("coments").doc(coment.uid).update({
      user: this.afs.collection("users").doc(user).ref,
      document: this.afs.collection("documents").doc(document).ref
    })
  
      
    

  }
}


