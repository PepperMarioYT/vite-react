import './Modal.css';

interface ModalProps {
  content: string;
  onClose: () => void;
  onAgree: () => void;
}

function Modal({ content, onClose, onAgree }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Do Not Interact Criteria</h2>
        <pre>{content}</pre> {/* Display the Markdown content */}
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
          <label>
            <input type="checkbox" id="agreeCheckbox" />
            I agree to respect the criteria
          </label>
          <button
            onClick={() => {
              const checkbox = document.getElementById('agreeCheckbox') as HTMLInputElement;
              if (checkbox && checkbox.checked) {
                onAgree();
              } else {
                alert('You must agree to the criteria before proceeding.');
              }
            }}
          >
            Proceed to Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
