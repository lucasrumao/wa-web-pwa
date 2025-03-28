// Verifica se é um dispositivo iOS
const isIOS = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

// Configura User Agent Desktop
const setDesktopUserAgent = () => {
  Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      configurable: false
  });
};

// Exibe mensagem de erro
const showError = (message) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const iframe = document.getElementById('whatsappFrame');

  if (isIOS()) {
      loader.style.display = 'block'; // Mostra o loading
      setDesktopUserAgent();
      
      iframe.src = 'https://web.whatsapp.com';
      
      iframe.onload = () => {
          loader.style.display = 'none'; // Esconde o loading
      };

      iframe.onerror = () => {
          loader.style.display = 'none';
          showError('Erro ao carregar. Recarregue o app!');
      };
  } else {
      showError('Dispositivo não suportado! Use um iPhone/iPad.');
  }
});
