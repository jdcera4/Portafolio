# Configuración de EmailJS para el Formulario de Contacto

## 📧 Estado Actual
El formulario de contacto actualmente abre el cliente de email del usuario con los datos pre-llenados. Para envío automático de emails, sigue estos pasos:

## 🚀 Configuración de EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar servicio de email
- En el dashboard, ve a "Email Services"
- Conecta tu servicio de email (Gmail, Outlook, etc.)
- Copia el **Service ID**

### 3. Crear template de email
- Ve a "Email Templates"
- Crea un nuevo template con este contenido:

```
Asunto: Nuevo mensaje desde el portafolio - {{from_name}}

Hola Jhojan,

Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Enviado desde tu portafolio web
```

- Copia el **Template ID**

### 4. Obtener Public Key
- Ve a "Account" > "General"
- Copia tu **Public Key**

### 5. Actualizar configuración
Edita el archivo `src/config/emailjs.js`:

```javascript
export const emailjsConfig = {
  serviceId: 'tu_service_id_aqui',
  templateId: 'tu_template_id_aqui', 
  publicKey: 'tu_public_key_aqui'
};
```

### 6. Activar EmailJS en Contact.js
Descomenta y actualiza las líneas en `src/components/Contact.js`:

```javascript
import { emailjsConfig } from '../config/emailjs';

// En handleSubmit, reemplaza el código actual con:
await emailjs.send(
  emailjsConfig.serviceId,
  emailjsConfig.templateId,
  templateParams,
  emailjsConfig.publicKey
);
```

## 📱 Funcionalidades Actuales

### ✅ Funcionando:
- **Formulario completo** con validación
- **Email directo**: jdcera4@gmail.com
- **WhatsApp**: 3022576761 con mensaje pre-configurado
- **GitHub**: Enlace a tu perfil
- **Diseño responsivo** para móviles

### 🔄 Estados del formulario:
- Loading mientras se procesa
- Mensajes de éxito/error
- Limpieza automática del formulario

## 🎯 Alternativas sin EmailJS

Si prefieres no usar EmailJS, el formulario actual:
1. Abre el cliente de email del usuario
2. Pre-llena destinatario, asunto y mensaje
3. El usuario solo debe hacer clic en "Enviar"

## 📞 Contacto Directo

Los usuarios pueden contactarte directamente:
- **Email**: jdcera4@gmail.com
- **WhatsApp**: +57 302 257 6761
- **GitHub**: github.com/jdcera4