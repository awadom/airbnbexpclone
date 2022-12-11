import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import data from "./data.js";

export default function App() {
  const cards = data.map((userData) => {
    return (
      <Card
        key={userData.id}
        status={userData.status}
        title={userData.title}
        description={userData.description}
        price={userData.price}
        coverImg={userData.coverImg}
        rating={userData.stats.rating}
        reviewCount={userData.stats.reviewCount}
        location={userData.location}
        openSpots={userData.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
