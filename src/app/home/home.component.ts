import { Component } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabMenuModule,ProfileComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
 
 private _currentRoute:string='';
 public showData:boolean=true;
    ngOnInit() {
        
        this.checkRoute();
    }
    checkRoute(): void {
      this._currentRoute = this.router.url;
      // if (this.currentRoute !== 'main') {
      //   this.showData = false;
      // } else {
      //   this.showData = true;
      // }
      this.showData = this._currentRoute == '/home' ? true : false;
    }
  
}
