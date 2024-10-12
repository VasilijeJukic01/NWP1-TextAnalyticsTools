import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import { APICallData } from "../../model/model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  apiCalls: APICallData[] = []

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.apiCalls = this.service.apiCalls
  }
}
