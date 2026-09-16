export default function Cards() {
  return (
    <section className="py-5">
      <div className="text-center mb-4">
        <span className="section-title-badge">Nossos Pilares de Apoio</span>
        <h2 className="section-heading mt-2">Como podemos te ajudar</h2>
        <p className="section-subtext">
          Oferecemos uma rede acolhedora e espiritual para apoiar quem busca a sobriedade e a restauração da vida familiar.
        </p>
      </div>

      <div className="row g-4 text-start">
        {/* Card 1: Acolhimento */}
        <div className="col-md-4">
          <div className="custom-card">
            <div className="card-icon-wrapper">
              <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <h3 className="card-title">Acolhimento e Escuta Fraterna</h3>
            <p className="card-text">
              Oferecemos apoio e escuta fraterna para pessoas em situação de dependência e seus familiares.
            </p>
            <p className="card-text">
              <strong>Espaço Seguro:</strong> Um ambiente acolhedor onde o respeito, amor e fortalecimento da fé são armas fundamentais para superar as dificuldades.
            </p>
          </div>
        </div>

        {/* Card 2: Grupos de Autoajuda */}
        <div className="col-md-4">
          <div className="custom-card">
            <div className="card-icon-wrapper">
              <i className="bi bi-people-fill"></i>
            </div>
            <h3 className="card-title">Grupos de Autoajuda</h3>
            <p className="card-text">
              Encontros semanais que promovem vivência com a palavra de Deus, partilha de vida e orações.
            </p>
            <p className="card-text">
              <strong>12 Passos da Sobriedade:</strong> Semanalmente vivênciamos um passo do programa de vida nova, vivenciando na prática a sobriedade.
            </p>
          </div>
        </div>

        {/* Card 3: Orientação e Encaminhamento */}
        <div className="col-md-4">
          <div className="custom-card">
            <div className="card-icon-wrapper">
              <i className="bi bi-compass-fill"></i>
            </div>
            <h3 className="card-title">Oração</h3>
            <p className="card-text">
              Leitura da palavra de Deus e orações que juntas são uma base fundamental para o sustendo da sobriedade na vida do dependente.
            </p>
            <p className="card-text">
              <strong>Todas as reuniões:</strong> São baseadas na palavra de Deus, nos espelhando sempre em Jesus para vivermos a sobriedade.
            </p>
          </div>
        </div>
      </div>

      {/* Banner de Citação Inspiradora */}
      <div className="mt-5 p-4 rounded-4 text-center bg-white bg-opacity-10 border border-white border-opacity-10 shadow-sm">
        <blockquote className="blockquote mb-0">
          <p className="fs-5 italic text-light mb-2">
            "Sobriedade é a paz da mente, a alegria da alma e o fortalecimento do amor na família."
          </p>
          <footer className="blockquote-footer text-success fw-semibold mt-1">
            Pastoral da Sobriedade
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
