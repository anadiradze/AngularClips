import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';
  constructor(public modal: ModalService, public el: ElementRef) {
    // modal is argument, we will anotate this argument with the ModalServce class
    console.log(el)
  }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
