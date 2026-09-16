import Imagem1 from '../../assets/img/slide1.jpeg';
import Imagem2 from '../../assets/img/slide2.jpeg';
import Imagem3 from '../../assets/img/slide3.jpeg';
import Imagem5 from '../../assets/img/slide5.jpeg';

export default function Carrosel() {
  return (
    <section className="hero-carousel-container mb-5">
      <div id="carroselImagens" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        {/* Indicadores */}
        <div className="carousel-indicators mb-4">
          <button
            type="button"
            data-bs-target="#carroselImagens"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carroselImagens"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carroselImagens"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carroselImagens"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item hero-carousel-item active">
            <img src={Imagem1} alt="Pastoral da Sobriedade Araçatuba" />
            <div className="hero-overlay">
              <h1 className="hero-title">5º Congresso Nacional da Sobriedade</h1>
              <p className="hero-subtitle">
                Tema: Conectados com a vida, tecendo redes de esperança e dignidade. 12 e 13 de setembro de 2026
              </p>
              <div>
                <a href="#onde-encontrar" className="btn btn-success rounded-pill px-4 py-2 me-3 fw-semibold">
                  <i className="bi bi-geo-alt-fill me-1"></i> Ver Grupos de Apoio
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item hero-carousel-item">
            <img src={Imagem2} alt="Acolhimento e Escuta Fraterna" />
            <div className="hero-overlay">
              <h2 className="hero-title">Manhã de espiritualidade</h2>
              <p className="hero-subtitle">
                Momento de oração e união entre agentes da pastoral em Gabriel Monteiro-SP.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
                  data-bs-toggle="modal"
                  data-bs-target="#modalContato"
                >
                  <i className="bi bi-chat-heart-fill me-1"></i> Conversar com a Equipe
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item hero-carousel-item">
            <img src={Imagem3} alt="Reuniões Semanais" />
            <div className="hero-overlay">
              <h2 className="hero-title">Encontros Semanais</h2>
              <p className="hero-subtitle">
                Orações, partilha e fortalecimento através do programa dos 12 passos da Sobriedade.
              </p>
              <div>
                <a href="#onde-encontrar" className="btn btn-success rounded-pill px-4 py-2 me-3 fw-semibold">
                  <i className="bi bi-calendar-event me-1"></i> Horários das Reuniões
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item hero-carousel-item">
            <img src={Imagem5} alt="Sobriedade e Vida Nova" />
            <div className="hero-overlay">
              <h2 className="hero-title">Pastoral da Sobriedade</h2>
              <p className="hero-subtitle">
                Ação concreta da igreja, na luta contra os males das dependências.
              </p>
              <div>
                <a
                  href="https://sobriedadeata.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                >
                  <i className="bi bi-journal-text me-1"></i> Conheça mais sobre nós
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Botões Ant / Próx */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carroselImagens"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon p-3 bg-dark bg-opacity-50 rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carroselImagens"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon p-3 bg-dark bg-opacity-50 rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}
