const form = document.querySelector("#leadForm");
const result = document.querySelector("#formResult");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const nome = data.get("nome");
  const servico = data.get("servico");
  const whatsapp = data.get("whatsapp");

  const message = `Olá, meu nome é ${nome}. Tenho interesse em ${servico}. Meu WhatsApp é ${whatsapp}.`;
  const link = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;

  result.innerHTML = `<a href="${link}" target="_blank" rel="noreferrer">Abrir conversa no WhatsApp</a>`;
});
