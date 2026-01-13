export default function Footer() {
  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    year: "numeric",
  });

  return (
    <>
      <a
        href="https://wa.me/5518997274442"
        class="btn btn-success btn-lg rounded-circle position-fixed"
        style={{bottom: '20px', right: '20px', zIndex: 1030}}
        target="_blank"
      >
        <i class="bi bi-whatsapp" style={{backgroundColor:'#0d884f', width: '160px', height: '160px'}}></i>
      </a>

      <div className="fundonavbar">
        <footer className="text-white text-center p-3 mt-4">
          &copy; {dataFormatada} Pastoral da Sobriedade. Todos os direitos
          reservados.
        </footer>
      </div>
    </>
  );
}
