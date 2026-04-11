import Form from '@/components/ui/Form/Form';
import Modal from '@/lib/components/modal';

const ContactButton = () => {
  return (
    <div className="absolute right-8 hidden sm:block">
      <Modal>
        <Modal.Open opens="floating-form">
          <button
            aria-label="contacto"
            className="hover:text-gold cursor-pointer p-2 text-neutral-300 transition focus-visible:rounded-3xl"
          >
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
