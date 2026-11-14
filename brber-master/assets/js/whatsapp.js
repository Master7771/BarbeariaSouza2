/* Botão flutuante do WhatsApp - Barbearia Souza
   >>> TROQUE O NÚMERO ABAIXO (só dígitos: 55 + DDD + número) <<< */
(function () {
  var WHATSAPP_NUMBER = "5519993862968"; // (19) 99386-2968
  var MENSAGEM = "Olá! Vim pelo site da Barbearia Souza e gostaria de agendar um horário.";

  var css = document.createElement("style");
  css.textContent =
    ".wpp-float{position:fixed;right:24px;bottom:86px;z-index:99999;display:flex;align-items:center;flex-direction:row-reverse;text-decoration:none}" +
    ".wpp-float .wpp-btn{width:60px;height:60px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;font-size:34px;box-shadow:0 4px 14px rgba(0,0,0,.35);animation:wppPulse 2s infinite;transition:transform .2s}" +
    ".wpp-float:hover .wpp-btn{transform:scale(1.08)}" +
    ".wpp-float .wpp-label{background:#fff;color:#222;font:500 14px Poppins,sans-serif;padding:8px 14px;border-radius:20px;margin-right:10px;box-shadow:0 2px 8px rgba(0,0,0,.25);opacity:0;transform:translateX(10px);transition:.25s;pointer-events:none;white-space:nowrap}" +
    ".wpp-float:hover .wpp-label{opacity:1;transform:none}" +
    "@keyframes wppPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%{box-shadow:0 0 0 16px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}" +
    "@media(max-width:575px){.wpp-float{right:16px;bottom:78px}.wpp-float .wpp-label{display:none}}";
  document.head.appendChild(css);

  var a = document.createElement("a");
  a.className = "wpp-float";
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Falar no WhatsApp");
  a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(MENSAGEM);
  a.innerHTML = '<span class="wpp-btn"><i class="fab fa-whatsapp"></i></span><span class="wpp-label">Fale conosco no WhatsApp</span>';
  document.body.appendChild(a);
})();
