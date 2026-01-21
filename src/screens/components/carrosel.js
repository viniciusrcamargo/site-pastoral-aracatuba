import Imagem1 from '../../assets/img/slide1.jpg';
import Imagem2 from '../../assets/img/slide2.jpeg';
import Imagem3 from '../../assets/img/slide3.jpeg';
import Imagem4 from '../../assets/img/slide4.jpeg';
import Imagem5 from '../../assets/img/slide5.jpeg';
import Imagem6 from '../../assets/img/slide6.jpeg';

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
        <div className="carousel-item">
          <img src={Imagem4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Imagem5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Imagem6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carroselImagens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carroselImagens "
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
