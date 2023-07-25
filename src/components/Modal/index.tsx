import "./Modal.scss"
import { ModalProps } from "./interface";

export default function Modal({ onClose, title, src}:ModalProps) {
    return (
      <div className="modal">
        <h3>{title} <img src="https://res.cloudinary.com/duzwtwivp/image/upload/v1690245960/images/assets/close_wwzg0s.png" className="modal__close-icon" onClick={onClose} alt="close" /></h3>
        <iframe className="modal__iframe" src={src} width="800" height="550" />
      </div>
    );
  }