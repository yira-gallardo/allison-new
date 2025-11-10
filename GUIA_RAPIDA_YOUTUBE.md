# 🎬 Guía Rápida: Configuración de YouTube

**⏱️ Tiempo estimado: 15 minutos**

---

## 🎯 ¿Qué vas a hacer?

Vas a obtener 2 códigos de tu cuenta de Google para que tu sitio web pueda mostrar tus videos de YouTube automáticamente.

---

## 📝 Pasos Resumidos

### PARTE 1: Obtener API Key (10 min)

1. 🌐 Ir a: https://console.cloud.google.com/
2. 🔑 Iniciar sesión con tu cuenta de Google
3. ➕ Crear nuevo proyecto
4. 📚 Ir a "APIs y servicios" → "Biblioteca"
5. 🔍 Buscar "YouTube Data API v3"
6. ✅ Habilitar la API
7. 🔐 Ir a "Credenciales" → "Crear credenciales" → "Clave de API"
8. 📋 Copiar tu API Key
9. 🔒 [Opcional] Restringir la clave a "YouTube Data API v3"

### PARTE 2: Obtener Channel ID (5 min)

**Opción A: Desde YouTube**

1. 🎥 Ir a: https://www.youtube.com
2. 👤 Clic en tu foto → "Tu canal"
3. 🔗 Copiar el código después de `/channel/` en la URL
   - Ejemplo URL: `youtube.com/channel/UCxxxxxx`
   - Tu ID: `UCxxxxxx`

**Opción B: Desde YouTube Studio**

1. 🎛️ Ir a: https://studio.youtube.com/
2. ⚙️ Configuración → Canal → Configuración avanzada
3. 📋 Copiar "ID del canal de YouTube"

---

## 📤 ¿Qué enviar?

Copia y completa esto:

```
YouTube API Key: [pega aquí tu API Key]
YouTube Channel ID: [pega aquí tu Channel ID]
```

**Envía esto a tu desarrollador por email, WhatsApp o el medio que uses.**

---

## ⚠️ IMPORTANTE

- ✅ Tu API Key es como una contraseña, no la compartas públicamente
- ✅ Solo compártela con tu desarrollador de confianza
- ✅ Estos datos NO dan acceso para modificar tu canal
- ✅ Solo permiten mostrar tus videos públicos en tu sitio web

---

## ❓ ¿Problemas?

### "No encuentro Google Cloud Console"

→ Busca en Google: "Google Cloud Console" y usa el primer enlace oficial

### "Me dice que cree una organización"

→ Puedes omitir esto, no es necesario para un proyecto personal

### "No encuentro 'YouTube Data API v3'"

→ Usa el buscador dentro de la "Biblioteca" de APIs

### "Mi Channel ID no empieza con UC"

→ Puede tener otro formato, eso está bien. Cópialo tal cual lo veas.

### "Me sale error al crear la API Key"

→ Verifica que la API esté habilitada primero (Paso 5-6)

---

## 🎉 ¿Listo?

Una vez que envíes los datos, tu desarrollador configurará todo y tus videos aparecerán automáticamente en tu sitio web. ¡Así de simple!

---

## 📚 Documentación Completa

Si necesitas más detalles o capturas de pantalla:

- **Tutorial completo**: `TUTORIAL_YOUTUBE_API.md`
- **Preguntas frecuentes**: Revisa el tutorial completo

---

**Creado con ❤️ para facilitar tu configuración**
