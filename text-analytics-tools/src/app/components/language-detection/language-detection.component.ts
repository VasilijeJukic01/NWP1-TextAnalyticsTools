import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DetectedLanguage } from '../../model/model';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  form: FormGroup
  result: Array<DetectedLanguage> = []
  clean: boolean = false

  constructor(
    private languageDetService: PostService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void { }

  predictLanguage = () => this.languageDetService.detectLanguages(
    this.form.get('text')?.value,
    this.clean,
    String(localStorage.getItem("token"))
  ).subscribe(result => {
    this.form.reset();
    this.result = result.detectedLangs;
  });
}
