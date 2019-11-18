import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { PostService } from '../post.service'; 
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts:Observable<Post[]>
    constructor(private postService : PostService, public auth:AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }
 delete(id:string)
 {
   this.postService.delete(id)
 }
}
