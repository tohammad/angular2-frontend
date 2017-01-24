import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Comment } from './model/comment'
import { EmitterService } from './../emitter.service';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css'],
  providers: [CommentService]
})
export class CommentBoxComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  // Define input properties
    @Input() comment: Comment;
    @Input() listId: string;
    @Input() editId:string;

    editComment() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id:string) {
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(id).subscribe(
                                comments => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(comments);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}


