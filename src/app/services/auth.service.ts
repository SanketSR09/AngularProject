import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdminUser(): boolean {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
