// Entity Extraction Model
export class Image {
  full: string = ''
  thumbnail: string = ''
}

export class Entity {
  title: string = ''
  abstract: string = ''
  categories: [] = []
  image: Image = new Image
}

export interface EntityExtraction {
  text: string,
  token: string
  annotations: []
}

// Language Detection Model
export class DetectedLanguage {
  lang: string = ''
  confidence: number = 0
}

export interface LanguageDetection {
  text: string,
  token: string,
  detectedLangs: DetectedLanguage[]
}

// Sentiment Analysis Model
export class Sentiment {
  score: number = 0
  type: string = ''
}

export interface SentimentAnalysis {
  text: string,
  token: string,
  sentiment: Sentiment
}

// Text Similarity Model
export interface TextSimilarity {
  time: string,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

// History Model
export class APICallData {
  constructor(date: string, time: string, method: string, url: string) {
    this.date = date
    this.time = time
    this.method = method
    this.url = url
  }
  date: string
  time: string
  method: string
  url: string
}
