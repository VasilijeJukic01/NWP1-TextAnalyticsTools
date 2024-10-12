import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Entity } from "../../model/model";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  form: FormGroup
  included: string = ''
  abstract: boolean = false
  categories: boolean = false
  image: boolean = false
  minConfidence: number = 0.5
  result: Array<Entity> = []

  constructor(
    private service: PostService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void { }

  checkFilters() {
    this.included = [
      this.abstract && "abstract",
      this.categories && "categories",
      this.image && "image"
    ].filter(Boolean).join(",");
  }

  extractEntities() {
    this.included = ''
    this.checkFilters()

    this.service.extractEntities(
      this.form.get('text')?.value,
      this.minConfidence,
      this.included,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.form.reset()
      this.result = result.annotations
    })
  }

}
