import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
 @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // console.dir(postInput);
  //   this.newPost = postInput.value;
  // }

  onAddPost() {
    // console.dir(postInput);
    // this.newPost = this.enteredValue;
    const post: Post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }
}
