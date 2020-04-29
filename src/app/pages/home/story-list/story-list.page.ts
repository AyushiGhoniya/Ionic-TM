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
    this.getPosts();
  }

  // get a list of posts for selected category
  getPosts() {
    this.postService.activeSegment.subscribe(activeSegment => {
      this.postService.getPosts(activeSegment).subscribe(data => {
        this.posts = data
        this.datafatched = true
      })
    })
  }

  // show details for selected post
  navigateToPostDetail(category: string, post: string) {
    this.router.navigate(['/postdetail', category, post, 'home'])
  }

}
