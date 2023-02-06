import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  notification(msg: string){
    this.snackBar.open(msg, "", {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    })
  }
}
