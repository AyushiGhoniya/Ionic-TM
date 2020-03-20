import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  getCategories() {
    return this.angularFireDatabase.list<ICategory>('/categories').valueChanges()
  }
}
