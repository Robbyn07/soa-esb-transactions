import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Banco del Austro', url: '/banco-austro', icon: 'home' },
    { title: 'Banco del Pacifico', url: '/banco-pacifico', icon: 'home' },
    { title: 'Transferencia', url: '/transferencia', icon: 'card' },
    
  ];
  constructor() {}
}
