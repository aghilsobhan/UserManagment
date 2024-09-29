import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';
  constructor() { }
  setTheme(theme: string) {
    this.theme = theme;
    document.body.className = theme; // Apply the theme to the body
  }

  getTheme(): string {
    return this.theme;
  }
}
