import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntityExtractionComponent } from "./components/entity-extraction/entity-extraction.component";
import { TextSimilarityComponent } from "./components/text-similarity/text-similarity.component";
import { LanguageDetectionComponent } from "./components/language-detection/language-detection.component";
import { SentimentAnalysisComponent } from "./components/sentiment-analysis/sentiment-analysis.component";
import { TokenComponent } from "./components/token/token.component";
import { HistoryComponent } from "./components/history/history.component";

const components = {
  entityExtraction: EntityExtractionComponent,
  textSimilarity: TextSimilarityComponent,
  languageDetection: LanguageDetectionComponent,
  sentimentAnalysis: SentimentAnalysisComponent,
  token: TokenComponent,
  history: HistoryComponent
};

const routes: Routes = [
  { path: "",                   redirectTo: "/entityExtraction", pathMatch: "full" },
  { path: "entityExtraction",   component: components.entityExtraction },
  { path: "textSimilarity",     component: components.textSimilarity },
  { path: "languageDetection",  component: components.languageDetection },
  { path: "sentimentAnalysis",  component: components.sentimentAnalysis },
  { path: "token",              component: components.token },
  { path: "history",            component: components.history }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
