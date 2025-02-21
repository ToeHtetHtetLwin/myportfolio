import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabMenuModule,ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: MenuItem[] | undefined;

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
