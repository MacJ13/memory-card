/* eslint-disable react/prop-types */
const CardGrid = ({ children }) => {
  return (
    <>
      <h2 className="h2">Level 1</h2>
      <div className="card-grid">{children}</div>;
    </>
  );
};

export default CardGrid;
