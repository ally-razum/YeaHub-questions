import { marked } from "marked"; //чтение Markdown файлов
  
  export function getCleanHtml(text: string): string {
    if (!text) return "";

    if (text.includes("#") || text.includes("```")) {
      return marked.parse(text) as string; //если Markdown парсим в HTML
    }

    return text;
  }