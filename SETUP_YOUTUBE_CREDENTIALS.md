# 🔧 Guía para Desarrolladores: Configurar Credenciales de YouTube

Esta guía es para el equipo de desarrollo. Explica cómo configurar las credenciales que el cliente proporcionará.

---

## 📦 Credenciales Necesarias

Una vez que el cliente complete el tutorial (`TUTORIAL_YOUTUBE_API.md`), te enviará:

1. **YouTube API Key**: Clave de API para acceder a YouTube Data API v3
2. **YouTube Channel ID**: ID único del canal del cliente

---

## ⚙️ Configuración en el Proyecto

### Paso 1: Crear archivo de variables de entorno

1. En la raíz del proyecto, crea un archivo llamado `.env.local` (si no existe)
2. Agrega las siguientes variables:

```bash
# YouTube API Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=AIzaSy....... # API Key del cliente
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UC......... # Channel ID del cliente
```

### Paso 2: Verificar que .env.local esté en .gitignore

**IMPORTANTE**: Asegúrate de que `.env.local` está en el archivo `.gitignore` para no subir las credenciales al repositorio.

Agrega esta línea a `.gitignore` si no está:

```
.env.local
```

### Paso 3: Crear archivo de ejemplo (opcional pero recomendado)

Crea un archivo `.env.example` para documentar las variables necesarias:

```bash
# YouTube API Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_youtube_channel_id_here
```

---

## 🧪 Probar la Integración

### Desarrollo Local

1. Asegúrate de tener las variables en `.env.local`
2. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre http://localhost:3000
4. Verifica que se cargue el video más reciente del canal del cliente

### Verificar en la Consola

Si hay errores, abre la consola del navegador (F12) y busca:

- Errores 403: La API Key no es válida o no tiene permisos
- Errores 404: El Channel ID es incorrecto
- Errores de cuota: Se excedió el límite gratuito de la API (poco probable)

---

## 🚀 Despliegue en Producción

### Vercel (Recomendado para Next.js)

1. Ve al dashboard de tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables:

   - Name: `NEXT_PUBLIC_YOUTUBE_API_KEY`
   - Value: [API Key del cliente]

   - Name: `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID`
   - Value: [Channel ID del cliente]

4. Redeploy el proyecto

### Otras Plataformas

#### Netlify

1. Site settings → Build & deploy → Environment
2. Agrega las variables de entorno

#### AWS Amplify

1. App settings → Environment variables
2. Agrega las variables

#### Railway, Render, etc.

1. Busca la sección de Environment Variables
2. Agrega las variables

---

## 🔍 Componentes que Usan las Credenciales

### YouTubeSection.js

```javascript
const channelId =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUR_CHANNEL_ID_HERE";
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "YOUR_API_KEY_HERE";
```

### DynamicVideo.js

Recibe `channelId` y `apiKey` como props y hace las llamadas a la API:

- Obtiene información del canal
- Busca el playlist de uploads
- Obtiene el video más reciente
- Lo renderiza en un iframe

---

## 📊 Límites de la API

YouTube Data API v3 tiene cuotas:

- **Cuota diaria**: 10,000 unidades gratis por día
- **Consultas de este proyecto**: ~3 unidades por carga de página
- **Visitas estimadas**: ~3,000 visitas por día sin exceder la cuota

### Si se Excede la Cuota

1. Implementar caché del lado del servidor
2. Almacenar el último video en una base de datos
3. Actualizar cada cierta cantidad de tiempo (ej: cada hora)
4. Solicitar aumento de cuota a Google (gratis, pero requiere justificación)

---

## 🐛 Solución de Problemas Comunes

### Error: "Channel ID and API key are required"

- Las variables de entorno no están configuradas correctamente
- Verifica que los nombres sean exactos: `NEXT_PUBLIC_YOUTUBE_API_KEY` y `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID`
- Reinicia el servidor de desarrollo

### Error: "Failed to fetch channel data"

- La API Key puede estar mal configurada
- Verifica en Google Cloud Console que:
  - La API está habilitada
  - La API Key tiene permisos para YouTube Data API v3
  - No hay restricciones IP/HTTP que bloqueen la petición

### Error: "Channel not found"

- El Channel ID es incorrecto
- Pide al cliente que verifique su Channel ID siguiendo el tutorial

### El componente se carga pero no muestra video

- El canal puede no tener videos públicos
- Verifica manualmente el canal en YouTube
- Revisa la consola del navegador para más detalles

---

## 🔒 Seguridad

### Buenas Prácticas

1. ✅ Nunca subir `.env.local` al repositorio
2. ✅ Usar variables con prefijo `NEXT_PUBLIC_` solo para las que se exponen al cliente
3. ✅ La API Key del cliente debe tener restricciones configuradas en Google Cloud
4. ✅ Recomendar al cliente restringir la API Key a su dominio específico

### Restricción por Dominio (Recomendado)

Pide al cliente que en Google Cloud Console:

1. Vaya a Credenciales → Su API Key
2. En "Restricciones de la aplicación" seleccione "Referencias HTTP"
3. Agregue sus dominios:
   - `https://sudominio.com/*`
   - `https://www.sudominio.com/*`
   - `http://localhost:3000/*` (para desarrollo)

---

## 📝 Checklist de Configuración

Antes de entregar al cliente:

- [ ] Variables de entorno configuradas en `.env.local`
- [ ] `.env.local` está en `.gitignore`
- [ ] Archivo `.env.example` creado
- [ ] Probado en desarrollo local
- [ ] Variables configuradas en plataforma de producción
- [ ] Probado en producción
- [ ] API Key del cliente tiene restricciones configuradas
- [ ] Documentación entregada al cliente

---

## 📚 Recursos Adicionales

- [YouTube Data API v3 Documentation](https://developers.google.com/youtube/v3)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**Última actualización**: Octubre 2025
