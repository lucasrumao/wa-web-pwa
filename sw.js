self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
    console.log('Interceptando requisição para:', event.request.url);
});

// Função para abrir o WhatsApp Web automaticamente
function openWhatsApp() {
    window.location.href = "https://web.whatsapp.com/";
}

// Aguarda 2 segundos e abre automaticamente
setTimeout(openWhatsApp, 2000);
