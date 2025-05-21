import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject (AuthService);
  const router = inject (Router);

  return authService.getRole().pipe((
    map((userRole) => {
      if(!userRole) {
        router.navigate(['/auth']);
        return false;
      }

      if(userRole !== 'admin') {
        router.navigate(['/dashboard']);
        return false;
      }

    return true;
    })
  ))

};
