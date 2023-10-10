/* eslint-disable react/prop-types */
const Button = ({ className, onClick, children }) => {
  return (
    <>
      {/* <button className="modal-btn" id="btn-start"> */}
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
