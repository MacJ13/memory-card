/* eslint-disable react/prop-types */
const Button = ({ onClick, children }) => {
  return (
    <>
      {/* <button className="modal-btn" id="btn-start"> */}
      <button className="modal-btn" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
