login = {
  iniciar() {
    login.eventos();
  },
  eventos() {
    $(document).on("submit", ".formulario", login.enviar);
  },
  enviar(e) {
    let el = e.currentTarget;
    const valor = $(el).val();
    const valorSenha = $(".senha").val();
    const valorUsuario = $(".usuarioEmail").val();
      let form = el.closest("form");
      if (form) {
            window.location.href = `/index.html`;

      }
  },
};
login.iniciar();
