import Logo from "../../assets/img/logo-pastoral.png";
import imgLogin from "../../assets/img/login.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="fundonavbar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Logo" width="150" height="80" />
            </a>

            {/* Botão hamburger (visível em telas pequenas) */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links que colapsam no hamburger */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link link-menu" href="https://sobriedadeata.wordpress.com/" target="_blank" rel="noopener noreferrer">
                    Sobre a Pastoral
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-menu" href="#onde-encontrar">
                    Onde Encontrar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-menu" data-bs-toggle="modal" data-bs-target="#modalContato">
                    Contato
                  </a>
                </li>
                <li className="nav-item" hidden>
                  <Link className="nav-link" >
                    <img src={imgLogin} alt="Logo" width="35" height="35" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        class="modal fade"
        id="modalContato"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div class="modal-dialog modal-dialog-centered" >
          <div class="modal-content" >
            <div class="modal-header" style={{backgroundColor:"white"}}>
              <h1 class="modal-title fs-5" id="exampleModalLabel" style={{backgroundColor:"white", color:"black"}}>
                Nossos Contatos
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{backgroundColor:"white", color:"black"}}>
              <p style={{backgroundColor:"white", color:"black", fontSize: '18px'}}>Whatsapp: (18) 99727-4442</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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
