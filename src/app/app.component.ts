import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showFiller = false;

  users!: Observable<any[]>;

  constructor() {

    this.users = from(fetch('https://jsonplaceholder.typicode.com/users/').then((res => res.json()
    )
  )
); 

  }
}
