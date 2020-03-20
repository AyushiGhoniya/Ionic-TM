import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { IPost } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postList: IPost[]
  datafatched: boolean = false;
  categoryName: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    this.postService.getPosts(this.categoryName).subscribe(item => {
      this.postList = item
      this.datafatched = true
    })
  }

  navigateToPostDetail(post: string) {
    this.router.navigate(['/postdetail',this.categoryName, post, 'category'])
  }

  fun() {
    console.log('hellloooo')
  }
}
