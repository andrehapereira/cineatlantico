import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, filter } from 'rxjs';
import { MENU_CONFIG, MenuConfig, MenuItem } from '../../interfaces/menu';

@Component({
  selector: 'cineatlantico-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {

  menuConfig: MenuConfig = inject<MenuConfig>(MENU_CONFIG);

  private router = inject(Router);

  private MOBILE_MENU_BREAKPOINT = 768;

  private _isMobile$ = new BehaviorSubject(window.innerWidth < this.MOBILE_MENU_BREAKPOINT)

  private _isMenuOpen$ = new BehaviorSubject(false);

  private _currentActive: MenuItem | null = null;
  private _previousActive: MenuItem | null = null;

  onActivate(isActive: boolean, menuItem: MenuItem) {
    isActive ? this._currentActive = menuItem : this._previousActive = menuItem;
  }

  toggleMenu() {
    this._isMenuOpen$.next(!this._isMenuOpen$.value);
  }

  getSwipeInClass(route: string) { 
    const currentIndex = this.menuConfig.findIndex(r => r.route === this._currentActive?.route);
    const previousIndex = this.menuConfig.findIndex(r => r.route === this._previousActive?.route);
    if (!this.isRouteActive(route)) {
      return '';
    }
    return currentIndex === previousIndex || currentIndex > previousIndex ? "swipe-in-l" : "swipe-in-r" 
  } 
  getSwipeOutClass(route: string) { 
    const currentIndex = this.menuConfig.findIndex(o => o.route === this._currentActive?.route)
    const previousIndex = this.menuConfig.findIndex(o => o.route === this._previousActive?.route); 
    if (route !== this._previousActive?.route || this.isRouteActive(route)) {
      return '';
    }
    return currentIndex > previousIndex ? "swipe-out-r" : "swipe-out-l" 
  }

  isRouteActive(route: string) {
    return this.router.isActive(route, {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'});
  }

  @HostListener('window:resize')
  onScreenResize() {
    this._isMobile$.next(window.innerWidth < this.MOBILE_MENU_BREAKPOINT);
  }

  get isMobile$() {
    return this._isMobile$.asObservable().pipe(distinctUntilChanged());
  }

  get isMenuOpen$() {
    return this._isMenuOpen$.asObservable();
  }
}
