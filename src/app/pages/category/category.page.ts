import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ICategory } from '../../models/category.model';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryList: ICategory[]
  datafatched: boolean = false

  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(item => {
      this.categoryList = item
      this.datafatched = true
    })
  }

  navigateToPost(category: string) {
    this.router.navigate(['/post', category])
  }

}
