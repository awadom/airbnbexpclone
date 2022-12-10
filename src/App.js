import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        status="SOLD OUT"
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}
