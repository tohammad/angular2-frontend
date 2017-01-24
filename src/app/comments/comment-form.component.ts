import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './services/comment.service';
import { EmitterService } from './../emitter.service';
import { Comment } from './model/comment';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  providers: [CommentService]
})
export class CommentFormComponent implements OnInit {

  constructor(
        private commentService: CommentService
        ){}
    // Local properties
    private model = new Comment(new Date(), '', '');
    private editing = false;

    // Input properties
     @Input() editId: string;
     @Input() listId: string;

    submitComment(){
        // Variable to hold a reference of addComment/updateComment
        let commentOperation:Observable<Comment[]>;

        if(!this.editing){
            // Create a new comment
            commentOperation = this.commentService.addComment(this.model)
        } else {
            // Update an existing comment
             commentOperation = this.commentService.updateComment(this.model)
        }

        // Subscribe to observable
        commentOperation.subscribe(
                                comments => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(comments);
                                    // Empty model
                                    this.model = new Comment(new Date(), '', '');
                                    // Switch editing status
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((comment:Comment) => {
            this.model = comment
            this.editing = true;
        });
    }

     ngOnInit(): void {
        //throw new Error('Not implemented yet.');
    }

}
