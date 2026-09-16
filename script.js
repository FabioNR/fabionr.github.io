// Menu Mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Fecha menu mobile se estiver aberto
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
  }
});

// Animação de fade-in nos elementos ao fazer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplica animação aos cards
document.querySelectorAll('.service-card, .diff-card, .testimonial-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Botão WhatsApp - Form (caso seja reativado no futuro)
const whatsappForm = document.getElementById('form-whatsapp');
if (whatsappForm) {
  whatsappForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Preparando mensagem...';
    btn.disabled = true;

    // Captura os dados
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    // Monta a mensagem formatada
    const texto = `*NOVA SOLICITAÇÃO DE ORÇAMENTO*\n\n` +
      `👤 *Nome:* ${nome}\n` +
      `📞 *Telefone:* ${telefone}\n` +
      `🔧 *Serviço:* ${servico}\n` +
      `📝 *Descrição:* ${mensagem || 'Não informado'}`;

    const numeroWhatsApp = '5541988059554';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    alert('✅ WhatsApp aberto! Clique em "Enviar" no app para confirmar seu contato.');
    this.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  });
}

// Console log para debug
console.log('NydzaTech - Site Eletricista Profissional carregado com sucesso! ⚡');
