import { useState } from "react";

export default function Enderecos() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("TODAS");

  const locais = [
    {
      cidade: "Araçatuba",
      titulo: "Paróquia Sant'Ana - Araçatuba",
      endereco: "Rua Tenente Alcides Theodoro dos Santos, S/N - Aviação, Araçatuba - SP",
      reuniao: "Todas as Quintas-feiras às 19h30",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.879795547423!2d-50.43594712588628!3d-21.196933579006263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949643fef11b5537%3A0xbd0098ce3c84b403!2sPar%C3%B3quia%20Sant'Ana%20-%20Diocese%20Ara%C3%A7atuba!5e0!3m2!1spt-BR!2sbr!4v1789564750476!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Araçatuba",
      titulo: "Paróquia Divino Espírito Santo - Araçatuba",
      endereco: "Rua Araçatuba, 488 - Alvorada, Araçatuba - SP",
      reuniao: "Todas as Segundas-feiras às 20h00",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0620003504337!2d-50.42478592385192!3d-21.22938988008557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964178421eae9d%3A0x998e6ef15599e619!2sPar%C3%B3quia%20Divino%20Esp%C3%ADrito%20Santo!5e0!3m2!1spt-BR!2sbr!4v1768251223250!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Araçatuba",
      titulo: "Paróquia São Sebastião - Araçatuba",
      endereco: "Rua São Sebastião, 220 - TV, Araçatuba - SP",
      reuniao: "Todos os Sábados às 15h30",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.107857990671!2d-50.4589635238532!3d-21.187873878710292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496446c2bb9fae3%3A0xc24cd127d823a3fd!2zUGFyw7NxdWlhIFPDo28gU2ViYXN0acOjbw!5e0!3m2!1spt-BR!2sbr!4v1768251348037!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Birigui",
      titulo: "Paróquia São Brás - Birigui",
      endereco: "Rua Dr. Carlos Carvalho Rosa, N° 973 - Vila Brasil, Birigui - SP",
      reuniao: "Todas as Terças-feiras às 20h00",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.656330622571!2d-50.33150812385051!3d-21.285067181934124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949614df9a66b0ed%3A0x4512314cab205bfb!2zUGFyw7NxdWlhIFPDo28gQnLDoXMgQmlyaWd1aQ!5e0!3m2!1spt-BR!2sbr!4v1768251454859!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Valparaíso",
      titulo: "Paróquia Nossa Sra. Auxiliadora - Valparaíso",
      endereco: "Rua Padre Mauro Eduardo, Nº 98, Valparaíso - SP",
      reuniao: "Todas as Segundas-feiras às 20h00",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2455571160503!2d-50.869086523852246!3d-21.22210907984419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496e569e0d186f1%3A0x5469c197c8ffa981!2sPar%C3%B3quia%20Nossa%20Senhora%20Auxiliadora!5e0!3m2!1spt-BR!2sbr!4v1768251635939!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Castilho",
      titulo: "Paróquia São José - Castilho",
      endereco: "Av. Dr. Getúlio Vargas, Nº 746-788, Castilho - SP",
      reuniao: "Todas as Segundas-feiras às 20h00",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.995858825848!2d-51.49035272386119!3d-20.87221716834139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490b711943f65b7%3A0x592c05815cb1f452!2sIgreja%20Matriz%20da%20Par%C3%B3quia%20S%C3%A3o%20Jos%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1768251776735!5m2!1spt-BR!2sbr"
    },
    {
      cidade: "Araçatuba",
      titulo: "Capela São Vicente",
      endereco: "Rua Dr. Carlos Carvalho Rosa, N° 973 - Vila Brasil, Araçatuba - SP",
      reuniao: "Todas as Terças-feiras às 19h30",
      mapaSrc: "https://www.google.com/maps/embed?pb=!4v1768415043353!6m8!1m7!1s6DvmRVDOGLY6Dhtn9-xbnw!2m2!1d-21.15008413472364!2d-50.50287089127048!3f57.345845555471975!4f6.968771537775723!5f1.0713917813119094"
    },
    {
      cidade: "Campinas",
      titulo: "Paróquia Sagrada Família",
      endereco: "Rua Pedro Paulino, Nº 171 - Jardim das Bandeidas, Campinas - SP",
      reuniao: "Todas as Segundas-feiras às 20h00",
      mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.982294840593!2d-47.09712642547884!3d-22.96500003995258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9742f2bff2b%3A0x93c743752ca99b23!2sPar%C3%B3quia%20Sagrada%20Fam%C3%ADlia%20-%20Comunidade%20Matriz%20S%C3%A3o%20Jos%C3%A9%20Oper%C3%A1rio!5e1!3m2!1spt-BR!2sbr!4v1790619891159!5m2!1spt-BR!2sbr"
    }
  ];

  // Extrai lista única de cidades
  const cidadesUnicas = Array.from(new Set(locais.map((item) => item.cidade))).sort();

  // Filtra locais de acordo com a seleção
  const locaisFiltrados = cidadeSelecionada === "TODAS"
    ? locais
    : locais.filter((item) => item.cidade === cidadeSelecionada);

  return (
    <section id="onde-encontrar" className="py-5">
      <div className="text-center mb-4">
        <span className="section-title-badge">Onde Nos Encontrar</span>
        <h2 className="section-heading mt-2">Nossos Grupos e Endereços</h2>
        <p className="section-subtext">
          Encontre o grupo de apoio da Pastoral da Sobriedade mais próximo de você na região.
        </p>
      </div>

      {/* Menu Seletor de Cidades */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <label htmlFor="selectCidade" className="form-label text-light fw-semibold small d-flex align-items-center justify-content-center gap-2 mb-2">
            <i className="bi bi-funnel-fill text-success"></i> Selecione a Cidade:
          </label>
          <select
            id="selectCidade"
            className="form-select form-select-lg bg-dark text-light border-secondary shadow-sm text-center"
            value={cidadeSelecionada}
            onChange={(e) => setCidadeSelecionada(e.target.value)}
            style={{ borderRadius: '12px', cursor: 'pointer' }}
          >
            <option value="TODAS">📍 Todas as Cidades ({locais.length} locais)</option>
            {cidadesUnicas.map((cid) => (
              <option key={cid} value={cid}>
                {cid} ({locais.filter(l => l.cidade === cid).length} {locais.filter(l => l.cidade === cid).length === 1 ? 'local' : 'locais'})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Cards Filtrados */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {locaisFiltrados.map((item, index) => (
          <div className="col" key={index}>
            <div className="map-card">
              <div className="map-card-header d-flex justify-content-between align-items-center">
                <h3 className="map-card-title mb-0">{item.titulo}</h3>
              </div>
              <div className="map-card-body">
                <div>
                  <iframe
                    src={item.mapaSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mapa-frame"
                    title={`Mapa de ${item.titulo}`}
                  ></iframe>

                  <div className="location-info">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                    <span>{item.endereco}</span>
                  </div>
                </div>

                <div className="meeting-badge mt-3">
                  <i className="bi bi-clock-fill"></i>
                  <span>{item.reuniao}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
