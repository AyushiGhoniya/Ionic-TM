import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  postName: string;
  categoryName: string;
  postDetail: IPost;
  path: string;
  datafatched: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.path = this.activatedRoute.snapshot.paramMap.get('path');
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    this.postName = this.activatedRoute.snapshot.paramMap.get('post');
    this.postService.getPostDetail(this.categoryName, this.postName).subscribe(item => {
      this.postDetail = item
      this.datafatched = true
    })
  }

}
