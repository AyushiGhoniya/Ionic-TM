import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IPost } from '../models/post.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  activeSegment = new BehaviorSubject('')

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  // get all posts of selected category from firebase database
  getPosts(category: string): Observable<IPost[]> {
    return this.angularFireDatabase.list<IPost>('/posts/categories/' + category).valueChanges()
  }

  // get post details of selected post from firebase database
  getPostDetail(category ,post): Observable<IPost> {
    return this.angularFireDatabase.object<IPost>('posts/categories/' + category + '/' + post).valueChanges()
  }
}
