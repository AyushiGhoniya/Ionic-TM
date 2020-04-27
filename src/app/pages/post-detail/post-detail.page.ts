import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { IPost } from 'src/app/models/post.interface';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  @Input('header') header: any;

  postName: string;
  categoryName: string;
  postDetail: IPost;
  path: string;
  datafatched: boolean = false;
  showHeader: boolean = false;
  lastX: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private renderer: Renderer2,
    private shareService: ShareService
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

  logScrolling(event) {
    console.log(event.detail.scrollTop)

    if (event.detail.scrollTop > 200) {

      this.renderer.setStyle(this.header, 'background-color', '#517a9f');
      // this.renderer.setStyle(this.header, 'margin-top', '0');
      this.renderer.setStyle(this.header, 'position', 'fixed');

      // this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    } else if (event.detail.scrollTop < 200) {
      // console.log('less then 200')
      this.renderer.setStyle(this.header, 'background-color', 'red');

      // this.renderer.setStyle(this.header, 'margin-top', '0');
      // this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    }

    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }

  sharePost() {
    this.shareService.options = {
      message: this.postDetail.postName + "\n" + this.postDetail.content.substring(0, 99) + '...',
      subject: '',
      files: '',
      url: 'https://play.google.com/store',
      chooserTitle: ''
    }
    this.shareService.shareApp()
  }

}
