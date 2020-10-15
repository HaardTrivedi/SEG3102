import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InfoDbService {

  constructor(private firestore: AngularFirestore) {}

  addInfo(first, last, phoneNum, mail): Promise < DocumentReference > {
    return this.firestore.collection('userinfo').add({ 
      firstname: first,
      lastname: last,
      phone: phoneNum,
      email: mail
    });
  }

}
