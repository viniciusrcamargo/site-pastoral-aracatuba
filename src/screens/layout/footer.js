import Logo from "../../assets/img/logo-pastoral.png";

export default function Footer() {
  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    year: "numeric",
  });

  return (
    <>
      {/* Botão Flutuante de WhatsApp com Pulso */}
      <a
        href="https://wa.me/5518997274442?text=Olá!%20Seja%20bem%20vindo(a)s%20a%20a%20Pastoral%20da%20Sobriedade.%20Pode%20me%20ajudar%20com..."
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp da Pastoral da Sobriedade"
        title="Fale Conosco no WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Rodapé Principal */}
      <footer className="mt-5 py-5 border-top border-white border-opacity-10 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row gy-4 align-items-center justify-content-between text-center text-md-start">
            <div className="col-md-5">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-2">
                <img src={Logo} alt="Logo Pastoral" width="100" height="50" className="object-fit-contain" />
                <span className="fw-bold fs-5 text-light">Pastoral da Sobriedade</span>
              </div>
              <p className="text-secondary small mb-0" style={{ maxWidth: '400px' }}>
                Diocese de Araçatuba — Ação Social da Igreja Católica na prevenção, recuperação e reintegração da pessoa humana.
              </p>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
                <a
                  href="https://sobriedadeata.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary text-decoration-none small"
                >
                  Sobre Nós
                </a>
                <span className="text-secondary">•</span>
                <a href="#onde-encontrar" className="link-secondary text-decoration-none small">
                  Endereços
                </a>
                <span className="text-secondary">•</span>
                <a
                  href="https://www.facebook.com/sobriedadearacatuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary text-decoration-none small text-info"
                >
                  <i className="bi bi-facebook me-1"></i> Facebook
                </a>
                <span className="text-secondary">•</span>
                <a
                  href="https://www.youtube.com/@Al%C3%B4sobriedade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary text-decoration-none small text-danger"
                >
                  <i className="bi bi-youtube me-1"></i> YouTube
                </a>
              </div>
              <p className="small mb-0" style={{ color: '#fff' }}>
                &copy; {dataFormatada} Pastoral da Sobriedade. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
