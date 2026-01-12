import Header from "../layout/header";
import Carrosel from "../components/carrosel";
import Cards from "../components/cards";

export default function Main() {
  return (
    <div className="container">
      <Header />
      <Carrosel />
      <Cards />
    </div>
  );
}
