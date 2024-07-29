import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenHeight: any;
  screenWidth: any;
  isMenuOpen = false;
  isMobile = false;
  isLoggedIn = false;
  dropdownVisible = false;
  cartData: any = { products: [] }; // Initialize cartData with products as an empty array

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    this.isMobile = this.screenWidth <= 768;
  }

  constructor(
    private _token: TokenStorageService,
    private _auth: AuthService,
    private _cart: CartService
  ) {
    this.getScreenSize();
    this._auth.user.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
    this._cart.cartDataObs$.subscribe((cartData) => {
      this.cartData = cartData || { products: [] }; // Ensure cartData is always an object with products
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this._token.getUser();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  removeProductFromCart(id: number) {
    this._cart.removeProduct(id);
  }

  logout() {
    this._auth.logout();
    this.isMenuOpen = false;
  }
}
