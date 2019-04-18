import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {

   }

  openDialog(data: any) {
    const dialogConfig = new MatDialogConfig();
    //Chequeamos que data tenga datos, o seteamos false para no mostrar el contenido del dialog
    dialogConfig.data = data || false;

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '200px';

    this.dialog.open(DialogComponent, dialogConfig);
  }

}
