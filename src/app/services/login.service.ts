import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor(private http : HttpClient) {
    
   }

   login(email: string, password: string): Observable<boolean> {
    if (successfulLogIn(email, password)) {
        this.getLoggedInName.emit('SUCCESS');
        return of(true);
    } else {
        this.getLoggedInName.emit('FAILED');
        return of(false);
    }
}

logout(): void {
  this.getLoggedInName.emit('LOGOUT');
}
   
}
function successfulLogIn(email: string, password: string) {
  if(email==password){return true;}
  else{return false;}
}


