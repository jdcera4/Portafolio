// Configuración de EmailJS
// Para usar EmailJS, necesitas:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un servicio de email
// 3. Crear un template
// 4. Obtener tu Public Key

export const emailjsConfig = {
  serviceId: 'TU_SERVICE_ID_AQUI', // Ejemplo: 'service_abc123'
  templateId: 'TU_TEMPLATE_ID_AQUI', // Ejemplo: 'template_xyz789'
  publicKey: 'TU_PUBLIC_KEY_AQUI' // Ejemplo: 'abcdef123456'
};

// Template de ejemplo para EmailJS:
/*
Hola Jhojan,

Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Enviado desde tu portafolio web
*/