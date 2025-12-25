import Logo from '../../assets/img/logo-pastoral.png';
export default function Header() {
  return (
            <div className="fundonavbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="150" height="80" />
          </a>

          {/* Botão hamburger (visível em telas pequenas) */}
          <button
            className="navbar-toggler"
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
                <a className="nav-link link-menu" href="#">Sobre a Pastoral</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-menu" href="#">Onde Encontrar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-menu" href="#">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}
