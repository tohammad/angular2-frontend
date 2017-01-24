import { Component, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import { CommentBoxComponent } from './comment-box.component'
import { CommentService } from './services/comment.service';
import { EmitterService } from './../emitter.service';
import { Comment } from './model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {

// Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';

 }
