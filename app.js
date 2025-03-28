// 1. Força User Agent Desktop
Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    configurable: false
});

// 2. Carrega o WhatsApp Web
const iframe = document.getElementById('whatsappFrame');
iframe.src = 'https://web.whatsapp.com';

// 3. Ajustes pós-carregamento
iframe.onload = () => {
    // Reduz ainda mais o zoom se necessário
    iframe.style.transform = 'scale(0.8)';
    
    // Remove elementos desktop via JavaScript
    try {
        const waDoc = iframe.contentDocument || iframe.contentWindow.document;
        waDoc.querySelector('header').style.display = 'none';
        waDoc.querySelector('div[data-testid="sidebar"]').style.display = 'none';
    } catch (error) {
        console.log('WhatsApp atualizou sua interface!');
    }
};
