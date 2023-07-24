import { Link } from "react-router-dom"
import { CardProps } from "./interface"
import "./Card.scss"
import { useState } from 'react';
import Modal from "../Modal";
import { createPortal } from 'react-dom';

const Card = ({
  title,
  text,
  alt,
  src,
  link,
  techs,
  modalSrc
}: CardProps) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="animate__animated animate__backInUp card">
      <>
        <h3>{title}</h3>
        {link
          ?
          <Link to={link} target={link.charAt(0) === "/" ? "_self" : "_blank"}>
            <img src={src} alt={alt} className="card__image" />
          </Link>
          :
          <img src={src} alt={alt} className="card__image card__image--modal" onClick={() => {
            setShowModal(true)
          }} />
        }
      </>


      <p>{text}</p>
      {techs &&
        <p className="card__techs-list">
          Tecnologías utilizadas:
          {techs.map((item) => (
            <span key={item}>
              <i className={`fab fa-${item}`}></i>
            </span>
          ))}
        </p>
      }

      {showModal &&
        createPortal(
          <Modal
            title={title}
            src={modalSrc}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )
      }
    </div>
  )
}

export default Card