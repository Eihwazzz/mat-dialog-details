import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentObject: any;

  constructor(private dialogService: DialogService) { 
    this.parentObject = {
      "nombre":"Test",
      "apellido":"Ejemplo"
    }
  }

  ngOnInit() {
  }

  showDetail(){
    this.dialogService.openDialog(this.parentObject);
  }

}
