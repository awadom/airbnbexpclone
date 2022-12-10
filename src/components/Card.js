export default function Card(props) {
  return (
    <section className="card">
      <div className="card-status-img">
        <div className="card-status">{props.status}</div>
        <img className="card-img" src={`./images/${props.img}`} alt="" />
      </div>
      <div className="card-rating">
        <img src="./images/star.png" alt="" />
        <p>{props.rating}</p>
        <p className="card-rating-amt-country">
          {props.reviewCount} · {props.country}
        </p>
      </div>
      <p>{props.title}</p>
      <div className="card-price">
        <p className="card-price-cost">From ${props.price}</p>
        <p>/ person</p>
      </div>
    </section>
  );
}
