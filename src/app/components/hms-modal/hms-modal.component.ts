import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hms-modal',
  templateUrl: './hms-modal.component.html',
  styleUrls: ['./hms-modal.component.css']
})
export class HmsModal implements OnInit {
  @ViewChild('dialog') dialog: ElementRef;

  @Input() 
  openDialogBtnName: string = ''

  @Input() 
  closeDialogBtnName: string = ''

  ngOnInit(): void {}

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }
  constructor() {}

}