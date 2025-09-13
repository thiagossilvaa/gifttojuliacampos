function mostrarMensagem() {
  const mensagem = document.getElementById('mensagem');
  mensagem.style.display = 'block';
  setTimeout(() => {
    mensagem.style.opacity = 1;
  }, 100);
}

// Corações animados no fundo
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(criarCoracao, 500);
