// Verificação robusta de iOS
const isIOS = () => {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPadOS
  );
};

// Configura User Agent Desktop
const setDesktopUserAgent = () => {
  Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    configurable: false
  });
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const iframe = document.getElementById('whatsappFrame');

  if (isIOS()) {
    loader.style.display = 'block';
    setDesktopUserAgent();
    
    // Forçar recarregamento após mudar User Agent
    setTimeout(() => {
      iframe.src = 'https://web.whatsapp.com';
    }, 100);
    
    iframe.onload = () => {
      loader.style.display = 'none';
      // Ajustes extras para modo mobile
      iframe.style.transform = 'scale(0.85)';
      iframe.style.transformOrigin = 'top left';
    };

    iframe.onerror = () => {
      loader.style.display = 'none';
      document.body.innerHTML = '<div class="error-message">Recarregue o app!</div>';
    };
  } else {
    document.body.innerHTML = '<div class="error-message">⚠️ Conecte-se a um iPhone!</div>';
  }
});
