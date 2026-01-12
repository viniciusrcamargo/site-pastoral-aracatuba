export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="container-sm p-4 border border-white rounded shadow"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-white mb-4 text-center">Acesso ao Sistema</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Informe seu email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Informe sua senha"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
