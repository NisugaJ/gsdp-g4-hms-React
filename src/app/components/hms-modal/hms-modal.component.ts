import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hms-modal',
  templateUrl: './hms-modal.component.html',
  styleUrls: ['./hms-modal.component.css']
})
export class HmsModal implements OnInit {
  @ViewChild('dialog') dialog: ElementRef;

  @Input() 
  dialogTitle: string

  @Input() 
  openDialogBtnName: string

  @Input() 
  closeDialogBtnName: string

  ngOnInit(): void {}

  openDialog() {
    // show the modal to the user
    this.dialog.nativeElement.showModal();

    // start the event listener to detect when user selects the backdrop of the dialog.
    this.dialog.nativeElement.addEventListener("click", e => {
      const dialogDimensions = this.dialog.nativeElement.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        this.dialog.nativeElement.close()
      }
    })
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }
  
  constructor() {}

}