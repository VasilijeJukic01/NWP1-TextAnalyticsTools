import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/header/header.component";
import { EntityExtractionComponent } from "./components/entity-extraction/entity-extraction.component";
import { LanguageDetectionComponent } from "./components/language-detection/language-detection.component";
import { SentimentAnalysisComponent } from "./components/sentiment-analysis/sentiment-analysis.component";
import { TextSimilarityComponent } from "./components/text-similarity/text-similarity.component";
import { TokenComponent } from './components/token/token.component';
import { HistoryComponent } from './components/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreComponent } from './components/core/core.component';

@NgModule({
  declarations: [
    HeaderComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    TokenComponent,
    HistoryComponent,
    FooterComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})

export class AppModule { }
