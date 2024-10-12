import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";
import { formatDate } from "@angular/common";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EntityExtraction, TextSimilarity, LanguageDetection, SentimentAnalysis, APICallData } from "../model/model";

@Injectable({
  providedIn: 'root',
})
export class PostService {

  apiCalls: APICallData[];

  constructor(private httpClient: HttpClient) {
    this.apiCalls = [];
  }

  private createUrl(endpoint: string, params: Record<string, any>): string {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    return `${endpoint}/?${query}`;
  }

  private apiRequest<T>(endpoint: string, params: Record<string, any>): Observable<T> {
    const url = this.createUrl(endpoint, params);
    this.saveApiCall('GET', url);
    return this.httpClient.get<T>(url);
  }

  // API Calls
  compareTexts(text1: string, text2: string, token: string): Observable<TextSimilarity> {
    return this.apiRequest<TextSimilarity>(environment.textSimilarity, { text1, text2, token });
  }

  detectLanguages(text: string, option: boolean, token: string): Observable<LanguageDetection> {
    return this.apiRequest<LanguageDetection>(environment.languageDetection, { text, option, token });
  }

  extractEntities(text: string, min_confidence: number, include: string, token: string): Observable<EntityExtraction> {
    return this.apiRequest<EntityExtraction>(environment.entityExtraction, { text, min_confidence, include, token });
  }

  analyseSentiment(text: string, lang: string, token: string): Observable<SentimentAnalysis> {
    return this.apiRequest<SentimentAnalysis>(environment.sentimentAnalysis, { text, lang, token });
  }

  private saveApiCall(method: string, url: string): void {
    this.apiCalls.push(new APICallData(
      formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      formatDate(new Date(), 'hh:mm:ss', 'en'),
      method,
      url
    ));
    console.log(this.apiCalls);
  }
}
