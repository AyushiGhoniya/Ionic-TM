import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  activeSegment = 'Baby-Health';

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.postService.activeSegment.next(this.activeSegment)
  }

  // when category gets changed
  segmentChanged(event: any) {
    this.activeSegment = event.target.value
    this.postService.activeSegment.next(this.activeSegment)
  }

}
