import { verifyHostBindings } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private sneakBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.sneakBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
