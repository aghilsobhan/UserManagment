import { Component, Input } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management';
  @Input() test=<number>(0);
  tes=this.test * 2;
constructor(private themeService:ThemeService){}
  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

}
