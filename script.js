// Menu Mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Formulário WhatsApp
document.getElementById('form-whatsapp').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Preparando mensagem...';
  btn.disabled = true;

  // Captura os dados
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  // Monta a mensagem formatada (quebras de linha com \n)
  const texto = `*NOVA SOLICITAÇÃO DE ORÇAMENTO*\n\n` +
    `👤 *Nome:* ${nome}\n` +
    `📞 *Telefone:* ${telefone}\n` +
    `🔧 *Serviço:* ${servico}\n` +
    `📝 *Descrição:* ${mensagem || 'Não informado'}`;

  // 🔴 SUBSTITUA PELO SEU NÚMERO (apenas dígitos, com 55 + DDD)
  // Ex: 5511987654321
  const numeroWhatsApp = '5541988059554';

  // Cria a URL oficial do WhatsApp com texto codificado
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  // Abre em nova aba
  window.open(url, '_blank');

  // Feedback e reset
  alert('✅ WhatsApp aberto! Clique em "Enviar" no app para confirmar seu contato.');
  this.reset();
  btn.textContent = originalText;
  btn.disabled = false;
});
