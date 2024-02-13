import classes from "./Modal.module.css";
function Modal({ children }) {
  // children is a special prop from the parent (where it is used)
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
