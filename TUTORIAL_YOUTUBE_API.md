# 📹 Tutorial: Cómo Obtener las Credenciales de YouTube para tu Sitio Web

Este tutorial te guiará paso a paso para obtener las credenciales necesarias para mostrar tus videos de YouTube en tu sitio web. **No necesitas conocimientos técnicos**, solo sigue las instrucciones.

---

## 🎯 ¿Qué necesitas obtener?

Al finalizar este tutorial tendrás:

1. **API Key de YouTube** (una clave secreta para acceder a tus videos)
2. **Channel ID** (el identificador único de tu canal de YouTube)

---

## 📋 Requisitos Previos

- Tener una cuenta de Google (la misma que usas para YouTube)
- Tener un canal de YouTube creado
- Navegador web (Chrome, Firefox, Safari, etc.)

---

## PARTE 1: Obtener tu API Key de YouTube

### Paso 1: Acceder a Google Cloud Console

1. Abre tu navegador web
2. Ve a: https://console.cloud.google.com/
3. Inicia sesión con tu cuenta de Google (la misma de tu canal de YouTube)

### Paso 2: Crear un Nuevo Proyecto

1. Una vez dentro, verás en la parte superior izquierda un menú que dice "**Seleccionar un proyecto**" o "**Select a project**"
2. Haz clic en ese menú
3. Se abrirá una ventana emergente
4. Haz clic en el botón "**NUEVO PROYECTO**" (o "**NEW PROJECT**") ubicado en la parte superior derecha
5. Te pedirá un nombre para el proyecto, escribe algo como: **"Mi Sitio Web"** o el nombre de tu proyecto
6. Deja las demás opciones como están
7. Haz clic en "**CREAR**" (o "**CREATE**")
8. Espera unos segundos mientras Google crea tu proyecto

### Paso 3: Activar la API de YouTube

1. Una vez creado el proyecto, asegúrate de que está seleccionado (lo verás en la parte superior)
2. En el menú de la izquierda, busca y haz clic en "**APIs y servicios**" o "**APIs & Services**"
3. Haz clic en "**Biblioteca**" o "**Library**"
4. Verás una página con muchas APIs disponibles
5. En el buscador superior, escribe: **YouTube Data API v3**
6. Haz clic en el resultado que dice "**YouTube Data API v3**"
7. Haz clic en el botón azul "**HABILITAR**" o "**ENABLE**"
8. Espera unos segundos mientras se habilita la API

### Paso 4: Crear tu API Key

1. Una vez habilitada la API, verás una página con información
2. En el menú de la izquierda, haz clic en "**Credenciales**" o "**Credentials**"
3. En la parte superior, haz clic en "**+ CREAR CREDENCIALES**" o "**+ CREATE CREDENTIALS**"
4. En el menú que se despliega, selecciona "**Clave de API**" o "**API Key**"
5. ¡Listo! Se creará tu API Key automáticamente
6. Verás una ventana emergente con tu API Key (es una cadena larga de letras y números)
7. **MUY IMPORTANTE**: Haz clic en el botón de copiar (📋) para copiar tu API Key
8. Pégala en un documento de texto temporal (como Notas o Word) para guardarla

### Paso 5: Restringir tu API Key (Recomendado por Seguridad)

1. En la ventana que muestra tu API Key, haz clic en "**RESTRINGIR CLAVE**" o "**RESTRICT KEY**"
2. Baja hasta la sección "**Restricciones de la API**" o "**API restrictions**"
3. Selecciona "**Restringir clave**" o "**Restrict key**"
4. En la lista que aparece, busca y marca **"YouTube Data API v3"**
5. Haz clic en "**GUARDAR**" o "**SAVE**" en la parte inferior

**✅ ¡Listo! Ya tienes tu API Key**

---

## PARTE 2: Obtener tu Channel ID de YouTube

Hay dos métodos fáciles. Elige el que te parezca más sencillo:

### Método 1: Desde tu Canal de YouTube (Más Fácil)

1. Ve a YouTube: https://www.youtube.com
2. Inicia sesión con tu cuenta
3. Haz clic en tu foto de perfil (arriba a la derecha)
4. Haz clic en "**Tu canal**" o "**Your channel**"
5. Observa la URL (dirección web) en la barra de direcciones de tu navegador
6. Busca la parte que dice `/channel/` seguida de una cadena de letras y números
7. **Tu Channel ID es esa cadena de letras y números después de `/channel/`**
   - Ejemplo: Si la URL es `https://www.youtube.com/channel/UCxxxxxxxxxxxxxx`
   - Tu Channel ID es: `UCxxxxxxxxxxxxxx`
8. Copia ese código y guárdalo en tu documento de texto

### Método 2: Desde YouTube Studio (Alternativo)

1. Ve a YouTube Studio: https://studio.youtube.com/
2. Inicia sesión con tu cuenta
3. En el menú de la izquierda, haz clic en "**Configuración**" o "**Settings**" (icono de engranaje)
4. Haz clic en "**Canal**" o "**Channel**"
5. Haz clic en "**Configuración avanzada**" o "**Advanced settings**"
6. Verás tu "**ID del canal de YouTube**" o "**YouTube channel ID**"
7. Cópialo y guárdalo en tu documento de texto

**✅ ¡Perfecto! Ya tienes tu Channel ID**

---

## 🎁 ¿Qué hacer con esta información?

Ahora debes enviar a tu desarrollador:

1. **YouTube API Key**: La clave larga que copiaste (empieza con letras y números aleatorios)
2. **YouTube Channel ID**: Tu ID de canal (generalmente empieza con "UC" seguido de más letras y números)

### Formato recomendado para enviar:

```
YouTube API Key: AIzaSy... [tu clave completa]
YouTube Channel ID: UC... [tu ID completo]
```

---

## ⚠️ IMPORTANTE: Seguridad

1. **NO COMPARTAS** tu API Key públicamente (en redes sociales, foros, etc.)
2. Solo compártela con personas de confianza (como tu desarrollador)
3. Si crees que tu API Key fue comprometida, puedes eliminarla y crear una nueva en Google Cloud Console

---

## ❓ Preguntas Frecuentes

### ¿Tiene algún costo?

No, la API de YouTube Data v3 tiene una cuota gratuita generosa. Para un sitio web personal/pequeño negocio, es completamente gratis.

### ¿Qué pasa si cometo un error?

No te preocupes, puedes repetir los pasos cuantas veces necesites. No hay riesgo de dañar tu canal de YouTube.

### ¿Caduca la API Key?

No, la API Key no caduca automáticamente. Seguirá funcionando hasta que la elimines manualmente.

### ¿Puedo crear varias API Keys?

Sí, puedes crear múltiples API Keys si lo necesitas en el futuro.

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas con algún paso:

1. Toma capturas de pantalla de dónde te quedaste
2. Contacta a tu desarrollador con las capturas
3. También puedes buscar en YouTube: "Como crear API Key YouTube" para ver tutoriales en video

---

## ✨ ¡Eso es todo!

Has completado el proceso exitosamente. Tu desarrollador ahora podrá configurar tu sitio web para mostrar tus videos de YouTube automáticamente.

---

**Última actualización**: Octubre 2025  
**Creado para**: Proyecto Web con Next.js
