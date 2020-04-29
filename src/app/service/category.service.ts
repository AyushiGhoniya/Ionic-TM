import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICategory } from '../models/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  // get category list from firebase database
  getCategories(): Observable<ICategory[]> {
    return this.angularFireDatabase.list<ICategory>('/categories').valueChanges()
  }
}
