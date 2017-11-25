import Modal from './modal';
import Alert from './alert';
import Prompt from './prompt';
import Confirm from './confirm';

export default class ModalController {
  constructor() {
    'ngInject';

    this.modal1 = null;
    this.modal2 = null;
  }

  $onInit() {

    this.modal1 = new Modal("#modal1");
    this.modal2 = new Modal("#modal2");

    window.onDeleteClick = () => {
      this.modal1.close();
      this.modal2.close();
    }

  }

  openModal1() {
    this.modal1.show();
  }

  openModal2() {
    this.modal2.show();
  }

  alert() {
    Alert('OK. The data has been deleted !!');
  }
  
  confirm() {
    Confirm('Are you sure ?', (isConfirmed) => {
      console.log(isConfirmed);
    });
  }

  prompt() {
    Prompt('Please provide your input', (response) => {
      console.log(response);
    });
  }

}
