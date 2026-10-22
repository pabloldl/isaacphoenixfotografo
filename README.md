# Isaac Phoenix — The Wedding Stories

Web local independiente, realizada con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code. Sin dependencias, compilación, formularios ni servicios externos de ejecución. Imágenes, fuentes y favicon incluidos mediante rutas relativas.

## Contenido confirmado

Isaac Phoenix. Fotógrafo de bodas de Cádiz y medio planeta. Bda. de la Feria, 34, 11670 El Bosque, Cádiz. Teléfono: 678 158 024 (`tel:+34678158024`). No se añaden precios, disponibilidad, destinos profesionales, premios, reseñas, email, WhatsApp ni redes sociales. Los textos editoriales son propuestas de composición; no son citas del fotógrafo.

## Fotografías y licencias

**Todas las fotografías son ilustrativas de otros autores. Ninguna se presenta como trabajo de Isaac Phoenix.** La web lo indica en portada, al iniciar el recorrido, en pies de imagen y en el cierre. No se recibió material autorizado de su portfolio.

Fotografías descargadas el 22 de octubre de 2026 desde páginas gratuitas de Unsplash. Licencia: [Unsplash License](https://unsplash.com/license). No se usan imágenes de Unsplash+. Las imágenes se conservan localmente en WebP; anchos de 1800 px y 2400 px para portada. Las fuentes exactas de descarga están en `img/sources.json`.

| Archivo en img/ | Autor | Fuente original |
| --- | --- | --- |
| portada.webp | Foto Pettine | https://unsplash.com/photos/IfjHaIoAoqE |
| panorama.webp | Micah & Sammie Chaffin | https://unsplash.com/photos/y6Ni07pvRtg |
| retrato.webp | Lauren Mitchell | https://unsplash.com/photos/glouLzM1PMg |
| gesto.webp | Jennifer Kalenberg | https://unsplash.com/photos/uSNIs-jLYQU |
| risa.webp | Rafa Sanfilippo | https://unsplash.com/photos/cWLEzYAcI3Q |
| manos.webp | Pablo Lancaster Jones | https://unsplash.com/photos/RivJ32Q9LY4 |
| camino.webp | Jaakko Perälä | https://unsplash.com/photos/7Hy6grhmRLQ |
| luz.webp | Autor consultable en la fuente | https://unsplash.com/photos/Qu-dnz_Kqgw |
| encuentro.webp | Redd Francisco | https://unsplash.com/photos/IBL1QKgXKwQ |
| silencio.webp | Vasylyna Kucherepa | https://unsplash.com/photos/NOYuIqEeCKg |

Para incorporar el portfolio autorizado: sustituir los archivos correspondientes en `img/`, ajustar textos alternativos, pies y encuadres `object-position`. Actualizar `img/sources.json` y este registro. Retirar avisos de imágenes ilustrativas únicamente de las fotografías efectivamente sustituidas y autorizadas. La imagen panorámica del bloque «Cádiz y medio planeta» no se identifica como Cádiz ni como destino profesional.

## Tipografía

Cormorant Garamond (normal y cursiva variable) y Outfit variable, locales en `fonts/`. Obtenidas del repositorio oficial [google/fonts](https://github.com/google/fonts/tree/main/ofl). Licencia SIL Open Font License, incluida por familia en `fonts/*-OFL.txt`. No se realizan peticiones a Google Fonts desde la web.

## Diseño y originalidad

Se revisaron HTML y CSS de los proyectos anteriores disponibles, especialmente Realty Canoe, el abogado e informática. La nueva composición utiliza una película de portada sin acciones superpuestas, navegación compacta de dos entradas con progreso real, manifiesto centrado sin imagen, secuencia panorámica–vertical–díptico–detalle–cierre, revelado lateral de encuadres y una carta como contacto. No se copiaron componentes ni fotografías. Cormorant Garamond y Outfit no figuran entre las familias revisadas en las otras webs. La originalidad se refiere a estas decisiones concretas, no a una garantía de inexistencia de recursos semejantes en Internet.

## Funciones y accesibilidad

- Navegación por anclas y progreso calculado sobre el documento.
- Teléfono enlazado, copia con Clipboard API y alternativa de selección manual cuando no hay permisos.
- Google Maps busca la dirección completa confirmada; no se inventan coordenadas ni una ficha de negocio.
- Navegación por teclado, enlace para saltar contenido, focos visibles y mensajes de copia anunciados mediante `role="status"`.
- `prefers-reduced-motion` elimina transiciones y muestra imágenes directamente.
- Sin JavaScript siguen disponibles fotografías, enlaces, teléfono y dirección.
- SEO: título, descripción, Open Graph y JSON-LD ProfessionalService con datos facilitados. `og:image` usa ruta relativa porque no hay dominio confirmado; algunos consumidores de Open Graph exigirán una URL absoluta cuando exista ese dominio.

## Verificación

Pruebas de navegador Chrome con Playwright a 375, 768, 1440 y 1920 px: ausencia de desbordamiento horizontal, carga de diez imágenes y fuentes locales, anclas válidas y ausencia de errores JavaScript o HTTP. Copia real al portapapeles comprobada con `678158024`. Comprobación de reducción de movimiento y capturas completas en `.qa/` (carpeta ignorada). Revisión visual de las capturas de móvil y escritorio. No se ha realizado una llamada telefónica ni verificado presencialmente la ubicación; el enlace de Maps contiene la dirección confirmada.

No se modificaron otros proyectos ni se añadieron configuraciones de Netlify. No se realizaron despliegues.
