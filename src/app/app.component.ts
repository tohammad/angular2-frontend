import { Component, OnInit } from '@angular/core';
import { PostService } from './posts/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  isLoading = true;
  constructor(private postService: PostService) {
    // this.postService.createPost({
    //   userId: 1,
    //   title: 'h',
    //   body: 'b'
    // });
  }

  ngOnInit() {
    //     this.postService.getPosts()
    // .subscribe(posts => {
    //   this.isLoading = true; 
    //   console.log(posts);
    // });
  }


}
