import Form from '../Form';
import Modal from '../Modal';

const ContactButton = () => {
  return (
    <div className="absolute right-8 hidden sm:block">
      <Modal>
        <Modal.Open opens="floating-form">
          <button className="hover:text-gold cursor-pointer text-neutral-300 transition">
            Contacto
          </button>
        </Modal.Open>
        <Modal.Window name="floating-form">
          <Form />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default ContactButton;
