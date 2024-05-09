const Modal = ({ isOpen, onClose, image }) => {

    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <img src={image} />
        
        <button onClick={onClose}>Close</button>
      </div>
    )
  
  }
  
  export default Modal;