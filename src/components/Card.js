export default function Card() {
  return (
    <section className="card">
      <div className="card-status-img">
        <div className="card-status">SOLD OUT</div>
        <img className="card-img" src="./images/katie-zaferes.png" alt="" />
      </div>
      <div className="card-rating">
        <img src="./images/star.png" alt="" />
        <p>5.0</p>
        <p className="card-rating-amt-country">(6) · USA</p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <div className="card-price">
        <p className="card-price-cost">From $136</p>
        <p>/ person</p>
      </div>
    </section>
  );
}
