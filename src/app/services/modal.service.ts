import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSubject.asObservable();

  open() {
    this.modalOpenSubject.next(true);
  }

  close() {
    this.modalOpenSubject.next(false);
  }

  toggle() {
    this.modalOpenSubject.next(!this.modalOpenSubject.value);
  }
}
