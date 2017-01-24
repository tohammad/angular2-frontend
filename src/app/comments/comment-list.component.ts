import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from './services/comment.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentService]
})
export class CommentListComponent implements OnInit, OnChanges {

  // Local properties
    comments: Comment[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    // Constructor with injected service
    constructor(private commentService: CommentService) {}

    ngOnInit() {
            // Load comments
            //this.loadComments()
    }

    loadComments() {
        // Get all comments
        //  this.commentService.getComments()
        //                    .subscribe(
        //                        comments => this.comments = comments, //Bind to view
        //                         err => {
        //                             // Log errors if any
        //                             console.log(err);
        //                         });
    }

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadComments()});
    }


}
