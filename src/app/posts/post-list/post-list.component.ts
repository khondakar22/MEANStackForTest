import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
//  posts = [
//    {title: 'First Post', content: 'This is the first post\'s connent'},
//    {title: 'Second Post', content: 'This is the second post\'s connent'},
//    {title: 'Third Post', content: 'This is the third post\'s connent'}
//  ];
@Input() posts: Post[] = [];
  constructor() { }

  ngOnInit() {
  }

}
