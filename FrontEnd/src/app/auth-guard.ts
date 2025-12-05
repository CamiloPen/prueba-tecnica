import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/main']);
    return false;
  }

  const payload = JSON.parse(atob(token.split('.')[1]));

  const expMs = payload.exp * 1000;

  if (Date.now() > expMs) {
    localStorage.removeItem('token');
    router.navigate(['/main']);
    return false;
  }

  return true;
};
