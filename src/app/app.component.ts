import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './posts/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent implements OnInit {
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
