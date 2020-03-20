import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  datafatched: boolean = false;
  toggleMenu: boolean = false;
  sliders = []

  imageSliderConfig = {
    autoplay: {
      disableOnInteraction: false
    }
  }

  postSliderConfig = {
    spaceBetween: 5,
    slidesPerView: 1.75
  }

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postService.getMostLikedPost().subscribe(mostLikedPosts => {
      this.sliders.push(mostLikedPosts)
    })
    this.postService.getRecentPost().subscribe(recentPosts => {
      this.sliders.push(recentPosts)
      this.datafatched = true
    })
  }

  navigateToPostDetail(category: string, post: string) {
    this.router.navigate(['/postdetail', category, post, 'home'])
  }

  navigateToPost(category: string) {
    console.log(category)
    this.router.navigate(['/post', category])
  }

  navigateToAddPost() {
    this.router.navigateByUrl('/addpost');
  }
}
