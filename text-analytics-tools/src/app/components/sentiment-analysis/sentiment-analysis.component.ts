import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Sentiment } from "../../model/model";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  form: FormGroup
  color: string = ''
  result: Sentiment = new Sentiment()
  language: string = 'auto'

  constructor(
    private service: PostService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void { }

  createColor(score: number): void {
    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
    const green = clamp(((score + 1) / 2) * 255, 0, 255);
    const red = 255 - green;
    this.color = `rgb(${red}, ${green}, 0)`;
  }

  analyseSentiment(): void {
    const token = String(localStorage.getItem("token"));
    const text = this.form.get('text')?.value || '';

    this.service.analyseSentiment(text, this.language, token)
      .subscribe(({ sentiment }) => {
        this.form.reset();
        this.result = sentiment;
        this.createColor(sentiment.score);
        console.log(this.result);
      });
  }

}
