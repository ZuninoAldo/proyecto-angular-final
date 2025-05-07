import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  authUser: Observable<any>;

constructor(private router: Router, private authService: AuthService) {
  this.authUser = this.authService.authUser$;
}

logOut() {
  this.router.navigate(['/auth']);
}

}