import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={s.overlay}>
        <div className={s.modalCont}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
