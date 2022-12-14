import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import data from "./data.js";

export default function App() {
  const cards = data.map((userData) => {
    return <Card key={userData.id} {...userData} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
