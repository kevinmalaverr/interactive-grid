import React from "react"
import "./styles.css"
import { createPortal } from "react-dom"
import Close from "../icons/Close"

const Modal = ({ isOpen, header, children, close = () => {} }) =>
  isOpen
    ? createPortal(
        <div className="modal">
          <div className="modal__background" onClick={close} />
          <div className="modal__container">
            <header className="modal__header">
              <div>{header}</div>
              <button
                type="button"
                aria-label="Close"
                data-tooltip-pos="left"
                onClick={close}
              >
                <Close />
              </button>
            </header>
            <main className="modal-content">{children}</main>
          </div>
        </div>,
        document.getElementById("modal-portal")
      )
    : null

export default Modal
