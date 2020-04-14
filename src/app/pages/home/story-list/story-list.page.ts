import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.page.html',
  styleUrls: ['./story-list.page.scss'],
})
export class StoryListPage implements OnInit {

  datafatched: boolean = false;
  posts = [];

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.activeSegment.subscribe(activeSegment => {
      this.postService.getPosts(activeSegment).subscribe(data => {
        this.posts = data
        this.datafatched = true
      })
    })
  }

  navigateToPostDetail(category: string, post: string) {
    this.router.navigate(['/postdetail', category, post, 'home'])
  }

}
