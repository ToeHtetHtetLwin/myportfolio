import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,TabMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}
  public items: MenuItem[] | undefined;
  ngOnInit() {
  this.items = [
    { label: 'Home', icon: 'pi pi-home',routerLink: ['/home']  },
    { label: 'about', icon: 'pi pi-info-circle',routerLink: ['/about']  },
    { label: 'skill', icon: 'pi pi-info-circle',routerLink: ['/skill']  },
    { label: 'Contact', icon: 'pi pi-phone',routerLink: ['/contact']  },
    {label:'Education',icon: 'pi pi-book',routerLink: ['/education'] }
]
}
}
