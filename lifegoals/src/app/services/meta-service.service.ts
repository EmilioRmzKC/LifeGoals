import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  constructor(private firestore: AngularFirestore) { }

  getMetas(): Observable<Meta[]> {
    return this.firestore.collection<Meta>('metas').valueChanges({ idField: 'id' });
  }

  addMeta(meta: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('metas').doc(id).set({ meta });
  }

  deleteMeta(id: string): Promise<void> {
    return this.firestore.collection('metas').doc(id).delete();
  }
}