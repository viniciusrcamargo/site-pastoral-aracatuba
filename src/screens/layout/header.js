import Logo from "../../assets/img/logo-pastoral.png";
import imgLogin from "../../assets/img/login.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="fundonavbar">
        <nav className="navbar navbar-expand-lg navbar-dark py-2">
          <div className="container-fluid px-3 px-lg-5">
            {/* Logo */}
            <a className="navbar-brand d-flex align-items-center py-1" href="/">
              <img src={Logo} alt="Pastoral da Sobriedade Logo" width="140" height="70" className="logo-img object-fit-contain" />
            </a>

            {/* Botão hambúrguer para mobile */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Alternar navegação"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links de Navegação */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 my-2 my-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link link-menu"
                    href="https://sobriedadeata.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-info-circle me-1"></i> Sobre a Pastoral
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-menu" href="#onde-encontrar">
                    <i className="bi bi-geo-alt me-1"></i> Onde Encontrar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-menu"
                    href="https://www.facebook.com/sobriedadearacatuba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook me-1"></i> Facebook
                  </a>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <button
                    type="button"
                    className="btn link-menu custom-btn-contact"
                    data-bs-toggle="modal"
                    data-bs-target="#modalContato"
                  >
                    <i className="bi bi-chat-dots-fill me-2"></i> Contato
                  </button>
                </li>
                <li className="nav-item" hidden>
                  <Link className="nav-link">
                    <img src={imgLogin} alt="Login" width="35" height="35" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal de Contato */}
      <div
        className="modal fade"
        id="modalContato"
        tabIndex="-1"
        aria-labelledby="modalContatoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title d-flex align-items-center gap-2" id="modalContatoLabel">
                <i className="bi bi-telephone-outbound-fill text-success fs-4"></i> Nossos Contatos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div className="modal-body py-4">
              <p className="text-secondary mb-3 fs-6">
                Estamos prontos para acolher você e sua família. Entre em contato conosco:
              </p>

              {/* WhatsApp */}
              <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between mb-3">
                <div>
                  <small className="text-uppercase tracking-wider text-muted d-block fw-semibold" style={{ fontSize: '0.75rem' }}>
                    WhatsApp Pastoral
                  </small>
                  <span className="fs-5 fw-bold text-light">(18) 99727-4442</span>
                </div>
                <a
                  href="https://wa.me/5518997274442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm px-3 rounded-pill"
                >
                  <i className="bi bi-whatsapp me-1"></i> Abrir Chat
                </a>
              </div>

              {/* Facebook */}
              <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-uppercase tracking-wider text-muted d-block fw-semibold" style={{ fontSize: '0.75rem' }}>
                    Facebook Oficial
                  </small>
                  <span className="fs-6 fw-bold text-light">@sobriedadearacatuba</span>
                </div>
                <a
                  href="https://www.facebook.com/sobriedadearacatuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm px-3 rounded-pill"
                >
                  <i className="bi bi-facebook me-1"></i> Ir para a Página
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-light rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
