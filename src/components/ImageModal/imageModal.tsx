
import Modal from 'react-modal';
import css from "./imageModal.module.css"
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "rgba(0, 0, 0, 0.456)"
  },
};

type Props = {
   urls: string;
  alt_description: string;
  closeModal: () => void;
  modalIsOpen: boolean;
}

export default function ImageModal({urls, alt_description, closeModal, modalIsOpen}:Props) {
   

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={true}   style={customStyles} >
        <div onClick={closeModal} >
          <div className={css.modalContent}>
                <img
                    className={css.image}
                     src={urls}
                    alt={alt_description }/>
          </div>
        </div>
</Modal>)
}