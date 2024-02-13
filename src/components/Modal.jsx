import classes from "./Modal.module.css";
function Modal({ children, onClose }) {
  // children is a special prop from the parent (where it is used)
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
