import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Document } from 'src/app/models/Document';


@Injectable({
  providedIn: 'root'
})
export class PoesiaService {

  constructor(private afs: AngularFirestore) { }

  insertDocument(document: Document, user: string){

    const refDocument = this.afs.collection("documents")
    document.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(document))
    refDocument.doc(document.uid).set(param)
    
    this.afs.collection("documents").doc(document.uid).update({
      user: this.afs.collection("users").doc(user).ref
    })

    
  }



}
