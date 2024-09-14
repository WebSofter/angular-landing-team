import { Component, HostListener, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TestComponent, NavigationComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'angular-landing';
  isMenuHidden = false;  // Флаг, указывающий на скрытие меню
  lastScrollTop = 0;     // Последняя позиция прокрутки

/*
   if (typeof document !== 'undefined') {
  // Your browser-specific code here
}
*/

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.lastScrollTop = window?.pageYOffset || document?.documentElement.scrollTop;
    }
  }

  // Отслеживание события прокрутки страницы
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof document !== 'undefined') {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > this.lastScrollTop) {
        // Прокрутка вниз - скрыть меню
        this.isMenuHidden = true;
      } else {
        // Прокрутка вверх - показать меню
        this.isMenuHidden = false;
      }

      // Обновляем последнюю позицию прокрутки
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
  }
}
