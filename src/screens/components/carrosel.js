import Imagem1 from '../../assets/img/slide1.jpg';
import Imagem2 from '../../assets/img/slide2.jpg';
import Imagem3 from '../../assets/img/slide3.jpg';

export default function Carrosel() {
  return (
    <div id="carroselImagens" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{height: '600px'}}>
        <div className="carousel-item active">
          <img src={Imagem1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Imagem2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Imagem3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carroselImagens"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carroselImagens "
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
