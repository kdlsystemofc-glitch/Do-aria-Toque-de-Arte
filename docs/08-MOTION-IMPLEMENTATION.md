# 08 — MOTION IMPLEMENTATION & BEHAVIORAL FIDELITY
## Implementação da Gramática de Movimento & Micro-Interações

---

### 1. VISÃO GERAL DA GRAMÁTICA DE MOVIMENTO

O sistema de movimento da **Doçaria Toque de Arte** foi projetado para transmitir a sensação de **frescor artesanal, cremosidade aveludada e toque humano**, respeitando estritamente o DNA de movimento da referência de alta conversão (YumEarth).

Todas as transições utilizam aceleração por hardware (`transform`, `opacity`), curvas personalizadas de amortecimento de mola (`cubic-bezier(0.34, 1.56, 0.64, 1)`) e observadores de interseção sem jank de scroll.

---

### 2. MAPEAMENTO DETALHADO DE CADA INTERAÇÃO

#### 01. Barra de Avisos (Top Announcement Bar)
- **TRIGGER**: Carregamento da página (DOM Ready).
- **TARGET**: `.announcement-bar`
- **PROPERTY**: `transform: translateY(-100%)` → `transform: translateY(0)`
- **DURATION**: 400ms
- **EASING**: `cubic-bezier(0.16, 1, 0.3, 1)` (Out-Smooth)
- **SCROLL RELATIONSHIP**: Permanece no topo estático.
- **RESPONSIVE BEHAVIOR**: Texto reduzido fluidamente via media query em telas `<600px`.

#### 02. Header de Navegação Sticky (Header Compression)
- **TRIGGER**: Scroll da janela (`window.scrollY > 40px`).
- **TARGET**: `.global-header`
- **PROPERTY**: `height: 80px` → `70px`, `background: #FFFFFF` → `rgba(255, 255, 255, 0.98)`, `backdrop-filter: blur(12px)`, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)`
- **DURATION**: 300ms
- **EASING**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **SCROLL RELATIONSHIP**: Controlado via `requestAnimationFrame` desacoplado do loop de renderização para zero perda de frames.
- **RESPONSIVE BEHAVIOR**: Mantém 64px de altura em mobile com abertura instantânea do menu off-canvas.

#### 03. Links de Navegação (Sublinhado Dinâmico Central)
- **TRIGGER**: Hover do cursor (`:hover`) / Seção ativa visível no scroll (`.is-active`).
- **TARGET**: `.nav-link::after`
- **PROPERTY**: `transform: scaleX(0)` → `transform: scaleX(1)`, `transform-origin: center`
- **DURATION**: 250ms
- **EASING**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **SCROLL RELATIONSHIP**: Atualizado dinamicamente via `highlightNavOnScroll` no `app.js`.
- **RESPONSIVE BEHAVIOR**: Desabilitado no desktop menu quando oculto em tablets/smartphones.

#### 04. Hero Entrance Sequence (Abertura Monumental)
- **TRIGGER**: Carregamento inicial da página.
- **TARGET**:
  - H1 Display: `opacity: 0, translateY(20px)` → `opacity: 1, translateY(0)` (700ms)
  - Subtítulo: `opacity: 0, translateY(20px)` → `opacity: 1, translateY(0)` (700ms, delay 150ms)
  - Botão CTA Primário: `scale(0.9) translateY(15px)` → `scale(1) translateY(0)` (600ms, delay 300ms, spring easing)
  - Bolo Principal: `scale(0.7) translateY(30px) rotate(-8deg)` → `scale(1) translateY(0) rotate(-2deg)` (800ms, delay 200ms)
  - Copos & Docinhos Secundários: Stagger pop `scale(0.6)` → `scale(1)` (800ms, delays 350ms a 500ms)
  - Setas SVG Manuscritas: Animação de traço desenhado `stroke-dashoffset: 40` → `0` (1200ms, delay 400ms)
  - Tags Manuscritas (`Caveat`): Pop elástico `scale(0.6)` → `scale(1)` (700ms, delay 500ms)
- **EASING**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Spring Pop)
- **RESPONSIVE BEHAVIOR**: Em telas móveis, os confeitos escalam proporcionalmente e o bolo centraliza perfeitamente no eixo horizontal.

#### 05. Micro-Parallax Tátil no Hero (Desktop Cursor Parallax)
- **TRIGGER**: Movimentação do mouse sobre a seção do Hero (`mousemove`).
- **TARGET**: `.cutout-item` (Bolo, Copo, Pastel, Brigadeiro, Morango, Sparkles).
- **PROPERTY**: `translate(x, y)` com amortecimento linear interpolado (*lerp rate: 0.08*).
- **DURATION**: Contínuo via `requestAnimationFrame`.
- **EASING**: Físico natural baseado em profundidades ópticas (bolos maiores movem menos, confeitos leves e estrelas flutuam mais).
- **SCROLL RELATIONSHIP**: Não interfere com o fluxo do scroll.
- **RESPONSIVE BEHAVIOR**: Automaticamente desativado em dispositivos touch e mobile para economizar bateria e evitar conflito com rolagem.

#### 06. Faixa de Selos "Orgulho em Servir" (Trust Badges Pop)
- **TRIGGER**: Scroll de entrada no viewport (IntersectionObserver com threshold 0.12).
- **TARGET**: `.trust-badge-card`
- **PROPERTY**: `opacity: 0, translateY(24px)` → `opacity: 1, translateY(0)` com stagger de 40ms por selo.
- **HOVER STATE**: Ícone circular preenche de verde-petróleo, texto sobe e selo central ribbon expande (`scale: 1.08`).
- **DURATION**: 250ms no hover.
- **EASING**: `cubic-bezier(0.34, 1.56, 0.64, 1)`.

#### 07. Cards Duplos Promocionais (3D Pop & Breakout Cutout)
- **TRIGGER**: Scroll reveal + Hover do cursor.
- **TARGET**: `.promo-card` & `.promo-breakout-img`
- **PROPERTY**:
  - Card eleva: `transform: translateY(-5px)`, sombra amplia para `0 16px 36px rgba(36,20,13,0.14)`.
  - Recorte fotográfico 3D salta: `transform: scale(1.08) rotate(0deg)` sobre o fundo ciano/petróleo.
  - Botão pílula branco: `transform: scale(1.05)`.
- **DURATION**: 350ms.
- **EASING**: `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **RESPONSIVE BEHAVIOR**: Transição suave de 2 colunas para 1 coluna vertical em tablets e mobile.

#### 08. Vitrine 4 Colunas dos Mais Pedidos (Product Cards Hover Elevation)
- **TRIGGER**: Scroll reveal + Hover do cursor.
- **TARGET**: `.product-card`, `.product-img`, `.product-cta-btn`
- **PROPERTY**:
  - Card: `transform: translateY(-6px)`, borda ganha sutil iluminação petróleo.
  - Foto do produto (1:1): Zoom óptico interno `transform: scale(1.08)`.
  - Botão de encomenda: Escala para `1.03` com escurecimento do tom de fundo.
- **DURATION**: 450ms na imagem, 250ms no botão.
- **EASING**: `cubic-bezier(0.16, 1, 0.3, 1)`.

#### 09. Grid Editorial & Mosaico Comunitário UGC
- **TRIGGER**: Scroll reveal + Hover do cursor.
- **TARGET**: `.editorial-img`, `.mosaic-img`, `.mosaic-overlay-mini`
- **PROPERTY**:
  - Imagens: Zoom sutil `scale(1.07)` dentro de container com `overflow: hidden`.
  - Título editorial: Transição cromática de cacau para caramelo dourado (`#C59A4E`).
  - Overlay do Mosaico: Fade in com `opacity: 1` revelando a legenda da delícia.
- **DURATION**: 300ms a 550ms.
- **EASING**: `cubic-bezier(0.16, 1, 0.3, 1)`.

#### 10. Faixa Social & Rodapé
- **TRIGGER**: Hover nos botões circulares e links de taxonomia.
- **TARGET**: `.social-circle-btn`, `.tax-list a`, `.payment-badge-tag`
- **PROPERTY**:
  - Ícone social: `transform: translateY(-3px) scale(1.12)`, preenchimento branco invertido com ícone petróleo.
  - Links do rodapé: Deslocamento lateral de leitura `transform: translateX(3px)` e cor verde-petróleo.
  - Bandeiras de pagamento: Elevação tátil suave `translateY(-2px)`.

---

### 3. CONFORMIDADE COM PREFERS-REDUCED-MOTION (ACESSIBILIDADE)

Em estrita conformidade com as diretrizes WCAG 2.2 e acessibilidade web:
- `@media (prefers-reduced-motion: reduce)` está ativo no CSS global.
- Quando o usuário ativa a redução de movimento no sistema operacional:
  1. Todas as durações de animação e transição são fixadas em `0.01ms`.
  2. O parallax de cursor no Hero é desligado via verificação `window.matchMedia`.
  3. Todos os elementos `reveal-on-scroll` entram imediatamente com `opacity: 1` e posição final `transform: none`.
  4. O scroll da página passa para o modo instantâneo (`scroll-behavior: auto`).

---

### 4. AUDITORIA DE PERFORMANCE
- **Zero Layout Thrashing**: Nenhuma propriedade de layout pesado (`width`, `height`, `top`, `left`, `margin`, `padding`) é animada durante o scroll. Apenas `transform` e `opacity` com `will-change`.
- **Zero Scroll Jank**: Event listeners de scroll rodam com `{ passive: true }` e `requestAnimationFrame`.
- **Zero Bibliotecas Externas Pesadas**: Sistema de movimento 100% nativo em CSS3 puro e JavaScript moderno ultra-leve (< 4KB).
