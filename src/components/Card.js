export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      <div className="card-status-img">
        {badgeText && <div className="card-status">{badgeText}</div>}
        <img className="card-img" src={`./images/${props.coverImg}`} alt="" />
      </div>
      <div className="card-rating">
        <img src="./images/star.png" alt="" />
        <p>{props.img}</p>
        <p className="card-rating-amt-country">
          {`${props.stats.rating} (${props.stats.reviewCount}) • ${props.location}`}
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
