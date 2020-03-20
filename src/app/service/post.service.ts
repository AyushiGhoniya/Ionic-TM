import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IPost } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  getPosts(category: string) {
    return this.angularFireDatabase.list<IPost>('/posts/categories/' + category).valueChanges()
  }

  getMostLikedPost(): Observable<IPost[]> {
    return this.angularFireDatabase.list<IPost>('/posts/mostLiked').valueChanges()
  }

  getRecentPost(): Observable<IPost[]> {
    return this.angularFireDatabase.list<IPost>('/posts/recent').valueChanges()
  }

  getPostDetail(category ,post): Observable<any> {
    return this.angularFireDatabase.object<IPost>('posts/categories/' + category + '/' + post).valueChanges()
  }
}
