import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  form: FormGroup;
  result: number = 0

  constructor(
    private textSimService: PostService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      text1: ['', [Validators.required]],
      text2: ['', [Validators.required]],
    })
  }

  ngOnInit(): void { }

  calculateSimilarity() {
    const token = String(localStorage.getItem("token"));
    const [text1, text2] = ['text1', 'text2']
      .map(field => this.form.get(field)?.value);

    this.textSimService.compareTexts(text1, text2, token)
      .subscribe(({ similarity }) => {
        this.form.reset();
        this.result = similarity * 100;
        console.log(this.result);
      });
  }

}
