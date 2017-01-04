import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
  
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

 constructor(private postService: PostService) {
    
  }

  ngOnInit() {
        this.postService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
