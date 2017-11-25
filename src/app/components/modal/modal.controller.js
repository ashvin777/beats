import { Modal, Alert } from './modal';

export default class ModalController {
  constructor() {
    'ngInject'; 
  }

  $onInit() {
    this.modal1 = new Modal('#modal1-opener', '#modal1');
    this.modal2 = new Modal('#modal2-opener', '#modal2');

    this.modal1.on('close', () => {
      console.log('on close modal1 click');
    });

    this.modal2.on('close', () => {
      console.log('on close modal2 click');
    });

    window.onDeleteClick =  () => {
      alert('Deleted');
      this.modal1.close();
      this.modal2.close();
    }
  }

  closeModal1() {
    this.modal1.close();
  }

  closeModal2() {
    this.modal2.close();
  }

  alert() {
    let alert = new Alert('This is alert text');
  }
}
