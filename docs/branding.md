# Guía de branding — Gasfitería Rioseco

Versión 1.0 · Referencia de la landing de portafolio

## 1. Esencia de marca

Gasfitería Rioseco se presenta como un servicio residencial local, técnico y transparente para Viña del Mar, Reñaca y Concón.

### Posicionamiento

> Un gasfiter que conoce el territorio, explica el diagnóstico antes de cotizar y deja claros los costos y la garantía.

### Personalidad

- Cercana, local y directa.
- Técnica, ordenada y confiable.
- Transparente con diagnóstico, repuestos, mano de obra y recargos.
- Resolutiva, especialmente ante fugas y urgencias.

### Tono de voz

Usar frases concretas, lenguaje cotidiano y beneficios comprobables. Hablar de la situación del cliente antes que de la empresa: “fuga activa”, “sin agua caliente”, “diagnóstico claro”.

Evitar promesas absolutas, tecnicismos innecesarios, exageraciones publicitarias y cualquier afirmación que no pueda respaldarse.

## 2. Identidad visual

La identidad combina una base verde petróleo con fondos verde grisáceos y un acento cobre. El resultado debe sentirse técnico y sobrio, pero no frío.

### Paleta principal

| Token | HEX | Uso recomendado |
| --- | --- | --- |
| `--ink` | `#0F3B3D` | Texto principal, header, footer y fondos de alto contraste |
| `--paper` | `#EEF3F1` | Fondo general de la página |
| `--paper-2` | `#E1EAE6` | Superficies secundarias, ilustraciones y badges |
| `--steel` | `#5C7B76` | Texto secundario, navegación y descripciones |
| `--steel-light` | `#9DB6AF` | Numeración y detalles de baja prioridad |
| `--copper` | `#A8752E` | CTA primario, acentos, indicadores y urgencias |
| `--copper-dark` | `#8A5F22` | Estado hover del cobre |
| `--line` | `#C6D6D0` | Bordes, divisores y contornos |
| `--white` | `#FBFCFB` | Texto sobre fondos oscuros y superficies claras |

### Contraste y uso del color

- `--ink` sobre `--paper` es la combinación principal para lectura.
- `--white` sobre `--ink` se reserva para navegación, footer y textos destacados.
- `--copper` identifica acciones y puntos de atención; no usarlo como color base para párrafos largos.
- `--steel` funciona como texto secundario, no como reemplazo del texto principal en títulos o botones.
- Mantener los bordes en `--line` para conservar la estética de ficha técnica.

## 3. Tipografía

Las fuentes se cargan desde Google Fonts en los documentos HTML de entrada:

- **Space Grotesk** — títulos, marca, cifras, nombres de servicios y pasos.
- **Inter** — cuerpo de texto, navegación, etiquetas y contenido auxiliar.

### Jerarquía actual

| Elemento | Familia | Tratamiento |
| --- | --- | --- |
| H1 | Space Grotesk | `clamp(34px, 5vw, 54px)`, peso 700 |
| H2 | Space Grotesk | `clamp(26px, 3.4vw, 36px)`, peso 700 |
| H3 | Space Grotesk | Peso 600 |
| Texto de lectura | Inter | 15–18px, color `--steel` cuando es secundario |
| Marca | Space Grotesk | 19–20px, peso 600 |
| Cifras | Space Grotesk | 26px, peso 700 |

No introducir otra familia tipográfica sin una decisión explícita de branding. Si las fuentes externas no están disponibles, conservar las familias declaradas como fallback del sistema.

## 4. Logotipo y símbolo

El logotipo está compuesto por el nombre **Gasfitería Rioseco** y un símbolo lineal de tuberías con dos puntos de conexión.

- El símbolo vive en `src/components/shared/InlineIcons.jsx`, dentro de `BrandMark`.
- Su tamaño base es `30 × 30px`.
- El cobre señala el recorrido y una conexión; el verde petróleo sostiene la estructura.
- Mantener el símbolo como SVG inline para conservar nitidez y evitar dependencias de imagen.
- No deformar, rotar, aplicar sombras ni cambiar sus colores sin actualizar primero los tokens de marca.
- Mantener una separación visible de `10px` entre símbolo y nombre, como en `.brand`.

En fondos oscuros debe priorizarse una variante específica del símbolo antes que aplicar filtros o invertirlo automáticamente.

## 5. Recursos gráficos

La landing no utiliza fotografías. Su lenguaje visual se construye con diagramas SVG de líneas, cuadrículas, nodos y etiquetas técnicas:

- La ilustración del hero representa una red de cañerías y un calefont.
- El mapa de cobertura usa una forma abstracta, puntos de servicio y una ruta punteada.
- Los servicios usan iconos lineales de 18–20px.
- Las cinco estrellas del testimonio utilizan el color `--copper`.
- El botón flotante de WhatsApp usa `#25A25A` y su hover `#1E8A4C`.

Los recursos gráficos deben apoyar la explicación del servicio; no agregar imágenes decorativas que compitan con el CTA o el diagnóstico.

## 6. Componentes de marca

| Componente | Rol de marca | Ubicación |
| --- | --- | --- |
| Demo badge | Declara que el contenido es ficticio y no operativo | `App.jsx` |
| Header | Identidad, navegación y CTA persistente | `components/layout/Header.jsx` |
| Hero | Promesa principal, territorio y prueba de experiencia | `components/sections/Hero.jsx` |
| Trust strip | Evidencias de transparencia y garantía | `components/sections/TrustStrip.jsx` |
| Services list | Oferta concreta con precios o modalidad de cotización | `components/sections/ServicesSection.jsx` |
| Process | Reduce incertidumbre explicando cuatro pasos | `components/sections/ProcessSection.jsx` |
| Coverage | Refuerza cercanía geográfica | `components/sections/CoverageSection.jsx` |
| Urgency banner | Acción inmediata para emergencias | `components/sections/UrgencyBanner.jsx` |
| Testimonial | Prueba social breve y localizada | `components/sections/TestimonialSection.jsx` |
| Footer | Contacto, horarios, servicios y estado de demo | `components/layout/Footer.jsx` |

## 7. Patrones de contenido

### Mensajes principales

- Diagnóstico antes de cotizar.
- Repuestos y mano de obra detallados.
- Garantía de 6 meses.
- Recargo de urgencia informado antes de confirmar.
- Cobertura en Viña del Mar, Reñaca y Concón.

### CTAs

Usar verbos de acción específicos:

- “Solicitar visita técnica” para la acción principal.
- “Llamar ahora” para contacto inmediato.
- “Pedir visita” en la navegación.
- “Llamar a urgencias” para el bloque de emergencia.

Mantener un único objetivo por bloque. No convertir etiquetas de precio o texto de confianza en botones si no existe una acción real detrás.

## 8. Responsive y accesibilidad

- Mantener el contenido legible desde móvil, sin cambiar el orden conceptual de las secciones.
- A partir de `900px`, el arte del hero pasa sobre el texto para priorizar la ilustración en pantallas estrechas.
- A partir de `760px`, la navegación textual se oculta; si se agrega un menú móvil, debe conservar los mismos anchors y recibir una decisión visual propia.
- A partir de `640px`, los servicios pasan a dos columnas internas y el precio ocupa una fila completa.
- Conservar el foco visible en enlaces y controles con el color `--copper`.
- Respetar `prefers-reduced-motion: reduce`.
- Mantener `aria-label` en el botón flotante de WhatsApp y `aria-hidden` en iconos decorativos.

## 9. Estado de demo y producción

El proyecto actual es una pieza de portafolio. Antes de publicarlo como negocio real hay que sustituir, como mínimo:

- El teléfono `+56 9 0000 0000`.
- El enlace de WhatsApp.
- El correo de contacto.
- Los textos que indiquen “demo”, “ficticio” o “portafolio”.
- Las cifras, precios, garantía, horarios y reseña si no están verificadas.

No presentar datos de ejemplo como testimonios, precios o tiempos reales.

## 10. Fuente de implementación

Los tokens visuales se mantienen en `src/styles/base.css`; la composición de layout está en `src/styles/layout.css`; las secciones viven en `src/styles/sections.css` y los breakpoints en `src/styles/responsive.css`.

Cuando se actualice el branding, cambiar primero los tokens y después revisar estados hover, contraste, SVG y componentes antes de modificar valores aislados.
