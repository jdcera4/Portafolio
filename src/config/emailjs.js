// Configuración de EmailJS
// Para usar EmailJS, necesitas:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un servicio de email
// 3. Crear un template
// 4. Obtener tu Public Key

export const emailjsConfig = {
  serviceId: 'your_service_id', // Reemplaza con tu Service ID
  templateId: 'your_template_id', // Reemplaza con tu Template ID
  publicKey: 'your_public_key' // Reemplaza con tu Public Key
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