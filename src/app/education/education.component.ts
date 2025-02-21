import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(private _router:Router){
    
  }
goToHome(){
  this._router.navigate(['/home'])
}
}
