# CRO Analysis — Homepage pimpimfotomatones.com
**Fecha:** 2026-06-02 | **Scope:** Recommended | **Baseline CR:** sin datos (GA4 recién activado)

---

## Conversion Scorecard

| Elemento | Puntuación | Estado |
|---|---|---|
| Propuesta de valor (hero) | 5/10 | 🟡 |
| CTA principal | 4/10 | 🔴 |
| Trust signals | 6/10 | 🟡 |
| Formulario | 5/10 | 🟡 |
| Social proof (testimonios) | 7/10 | 🟢 |
| Fricción general | 6/10 | 🟡 |

---

## Cambios aplicados en esta sesión ✅

| Cambio | Impacto esperado |
|---|---|
| Añadido botón "Pedir presupuesto" en el hero | +15-25% más clics hacia el formulario desde el hero |
| Hero text reescrito (empresa → cliente/servicio) | Mejor entendimiento inmediato del servicio |
| Trust strip 4th stat corregido: "2026/Desde 350€" → "<24h Respuesta garantizada" | Argumento de velocidad relevante para bodas |
| Form intro: elimina sesgo hacia WhatsApp | Flujo neutral entre WhatsApp y formulario |
| Form placeholders: "Texto de respuesta corta" → ejemplos reales | Reduce fricción cognitiva; mejora experiencia |

---

## Análisis del formulario (presupuesto)

### Diagnóstico de campos

| Campo | Tipo | Requerido | Fricción | Recomendación |
|---|---|---|---|---|
| Nombre y apellidos | text | ✅ | Baja | Conservar |
| Número de teléfono | tel | ✅ | **Alta** | Hacer opcional si email requerido |
| Correo electrónico | email | ✅ | Baja | Conservar como principal |
| Ciudad o municipio | text | ✅ | Media | Conservar (necesario para precio) |
| Comentarios | textarea | ❌ | Media | Mover al final, antes de privacidad |
| Fecha estimada | date | ❌ | Baja | Mover al inicio de "Datos del evento" |
| Servicio que te interesa | select | ✅ | Baja | Conservar |
| Horas | select | ❌ | Baja | Conservar optional |
| Invitados aproximados | number | ❌ | Media | **Eliminar o convertir en radio** |
| Política de privacidad | checkbox | ✅ | Baja | Conservar |

**Total campos visibles: 10** — Según benchmarks, 10 campos equivale a ~35% de reducción respecto a un formulario de 5 campos. Para un quote form, el benchmark es 3-8% de conversión; con 10 campos probablemente estamos en el límite inferior.

### Problema principal: phone + email obligatorios

Pedir tanto teléfono como email como campos requeridos es el mayor punto de fricción. El teléfono es el tipo de campo de mayor fricción después de la dirección física. Para este contexto, **el email solo** es suficiente para el primer contacto — el seguimiento por WhatsApp llega igualmente si el formulario incluye un mensaje de que responderán por ese canal.

**Opción A (conservadora):** Hacer `phone` opcional.
**Opción B (agresiva):** Hacer phone OR email — el usuario elige cómo quiere ser contactado.

---

## Recomendaciones pendientes de implementar

### 🔴 Alta prioridad

**1. Formulario en 2 pasos (mayor impacto esperado: +15-25% completions)**

El HTML ya tiene la estructura perfecta — hay dos `<div class="form-card form-card-title">`: "Datos de contacto" y "Datos del evento". Convertir a 2 pasos:

- **Paso 1:** Nombre + Email + Teléfono (opcional) + Ciudad
- **Paso 2:** Servicio + Horas + Fecha + Comentarios + Privacidad + Submit

El efecto Sunk Cost entra en juego: quien completa el paso 1 tiene alta probabilidad de completar el paso 2.

**2. Teléfono → opcional**

Eliminar el `required` del campo phone. Añadir microcopy debajo: "O escríbenos directamente por WhatsApp →".

**3. CTA del botón**

Cambiar "Solicitar presupuesto" por "Recibir mi presupuesto →". El texto "Recibir" activa el sistema de recompensa frente a "Solicitar" (que suena burocrático).

**4. Trust signal inline antes del botón**

Añadir justo encima del botón:

```html
<p class="form-trust-signal">Sin compromiso · Respondemos en menos de 24h · Tus datos no se comparten</p>
```

### 🟡 Media prioridad

**5. Reordenar campos del evento**

Mover `event_date` como primer campo de la sección "Datos del evento" — la fecha es lo primero que saben los organizadores de bodas y empezar por ahí reduce la fricción de contexto.

**6. Eliminar o simplificar "Invitados aproximados"**

Convertir de número libre a 4 opciones radio:
- Menos de 50 · 50-150 · 150-300 · Más de 300

Radios tienen más conversión que inputs numéricos para estimaciones.

**7. Añadir alternativa WhatsApp dentro del formulario**

Junto al botón submit, añadir enlace "¿Prefieres WhatsApp? → Escríbenos directamente" con tracking.

### 🟢 Baja prioridad

**8. Indicador de campos requeridos**

Añadir al inicio del formulario: "Los campos marcados con * son obligatorios" — reduce ansiedad sobre cuánto van a tener que rellenar.

**9. Heading del formulario**

El eyebrow "Contacta con nosotros" es genérico. Cambiar a "Presupuesto sin compromiso" — comunica que no hay coste ni compromiso al pedir.

---

## Ideas para A/B testing (cuando haya tráfico suficiente)

| Test | Variante A (actual) | Variante B | Hipótesis |
|---|---|---|---|
| CTA button | "Solicitar presupuesto" | "Recibir mi presupuesto →" | Framing de recibir > solicitar |
| Pasos | 1 paso (actual) | 2 pasos | Sunk cost aumenta completion |
| Phone | Required | Optional | Menos fricción, más leads |
| Hero CTA | "Pedir presupuesto" | "Ver precios de fotomatón" | Intent más bajo → más clics |

**Nota:** Para significancia estadística necesitamos ~1000 visitas por variante. Con el tráfico actual, esperar hasta tener datos de GSC antes de lanzar tests.

---

## Benchmarks de referencia

| Tipo de form | CR promedio | CR bueno | CR excelente |
|---|---|---|---|
| Quote request (servicios B2C) | 3-5% | 5-8% | >10% |
| Contact form (local business) | 5-8% | 8-12% | >15% |

Objetivo realista tras implementar las mejoras: **5-8%** de CR sobre visitas a la página de inicio.

---

*Próximo paso: Activar GSC → tener baseline de tráfico → implementar test A/B de 2 pasos en 4-6 semanas.*
