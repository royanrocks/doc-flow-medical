// Doc Flow Medical — shared interactions
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const chat = document.querySelector('.chat-widget');
  if (chat) {
    chat.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
});
