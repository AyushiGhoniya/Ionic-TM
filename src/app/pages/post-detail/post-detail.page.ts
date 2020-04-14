import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  @Input('header') header:any;

  postName: string;
  categoryName: string;
  postDetail: IPost;
  path: string;
  datafatched: boolean = false;
  showHeader: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private renderer: Renderer2
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

  lastX:any;

  logScrolling(event) {
    if(event.detail.scrollTop > Math.max(0, this.lastX)) {
      this.showHeader = true;

      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    } else {
      
      this.renderer.setStyle(this.header, 'margin-top', '0');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    }

    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }

}
