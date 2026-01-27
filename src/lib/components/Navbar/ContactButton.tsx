import Form from '../Form';
import Modal from '../Modal';

const ContactButton = () => {
  return (
    <div className="absolute right-8 hidden sm:block ">
      <Modal>
        <Modal.Open opens="floating-form">
          <button className="hover:text-gold focus-visible:rounded-3xl cursor-pointer text-neutral-300 transition p-2">
            <span className=''>Contacto</span>
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
