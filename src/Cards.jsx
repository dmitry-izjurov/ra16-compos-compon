function Cards({ children }) {
  return (
    <>
      <div className="block__card">
        <div className="block__icon">
          <img src={children} className="icon" alt="Картинка" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className="button">Go somewhere</button>
        </div>
      </div>
    </>
  );
}
            
export default Cards;
