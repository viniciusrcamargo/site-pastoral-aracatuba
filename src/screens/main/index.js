import Header from "../layout/header";
import Carrosel from "../components/carrosel";
import Cards from "../components/cards";
import Enderecos from "../components/enderecos";
import Rodape from "../layout/footer";


export default function Main() {
  return (
    <div className="container">
      <Header />
      <Carrosel />
      <Cards />
      <Enderecos />
      <Rodape />
    </div>
  );
}
