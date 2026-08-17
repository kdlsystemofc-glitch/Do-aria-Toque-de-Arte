# 07 — CLIENT DESIGN SYSTEM SPECIFICATION
## Doçaria Toque de Arte — Confeitaria Artesanal & Delicatessen

---

### 1. PHILOSOPHY & LAW OF TRANSLATION
- **Reference DNA = Architecture**: Defines the structural silhouette, asymmetric 2-column hero, isolated subject layering, hand-drawn vector annotations, and rhythmic 10-badge trust ribbon.
- **Client DNA = Identity**: Infuses genuine confectionery reality, artisanal warmth, cocoa velvet tones, caramel gold accents, delicate script typography, and authentic ABC São Bernardo photography.

---

### 2. COLOR TOKEN SYSTEM (EVIDENCE-BACKED)

| Token Name | CSS Variable | Hex Code | Physical Source & Evidence | Role & Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary (Cocoa Velvet)** | `--color-brand-primary` | `#24140D` | Logotipo Toque de Arte, Fitas de Cetim personalizadas (`imgi_70`), Aventais bordados (`imgi_42`) | Cor mestra para tipografia dominante H1, botões CTA primários e âncoras estruturais. Transmite sabor de cacau nobre e autoridade. |
| **Brand Secondary (Golden Caramel)** | `--color-brand-secondary` | `#C59A4E` | Estamparia dourada, pratos nobres de apresentação (`imgi_49`), massa folhada dourada (`imgi_30`) | Acentos refinados, linhas de hover, contorno de selos de qualidade e medalhões de destaque. |
| **Brand Accent (Berry Crimson)** | `--color-brand-accent` | `#C92A42` | Morangos frescos selecionados, amoras e framboesas (`imgi_49`, `imgi_42`) | Destaques de apetite, micro-badges de novidades e notificações de ação. |
| **Delicatessen Heritage (Emerald Teal)** | `--color-brand-heritage` | `#0D6E66` | Embalagens especiais de presente e caixas de doces finos (`imgi_56`) | Barra de anúncios superior e banner central de receitas exclusivas, evocando a tradição de delicatessen europeia. |
| **Hero Canvas (Warm Honey Amber)** | `--color-hero-canvas` | `#FAB829` | Pão de ló artesanal saindo do forno, creme brûlée, mel puro e calda de pudim | Fundo do Hero de alta saturação que estimula sensorialmente o apetite e cria atmosfera festiva acolhedora. |
| **Background Primary (Vanilla Cream)** | `--color-bg-primary` | `#FAF6F0` | Creme de baunilha, chantilly fresco e toalhas de mesa nobres | Tela de fundo geral da página para leitura relaxada e sofisticação culinária. |
| **Surface / Card (Pure Cream White)** | `--color-surface` | `#FFFFFF` | Pratos de porcelana e bases de bolo | Fundo para o header, faixa de selos e cards de produtos. |
| **Text Primary (Deep Cocoa)** | `--color-text-primary` | `#24140D` | Logotipo e materiais impressos | Máximo contraste e legibilidade sobre fundos claros e amarelados. |
| **Text Secondary (Warm Cocoa Muted)** | `--color-text-secondary` | `#664A38` | Notas secundárias e descritivos | Hierarquia suave para subtítulos, endereços e metadados. |
| **Interactive (WhatsApp Brand / Active)** | `--color-interactive` | `#25D366` | Canal oficial de pedidos e encomendas rápidas | Ícone de conversão rápida no WhatsApp e badges de confirmação. |
| **Border / Divider** | `--color-border` | `rgba(36, 20, 13, 0.08)` | Divisores sutis | Linhas de separação e contornos elegantes. |

---

### 3. TYPOGRAPHY SYSTEM

| Role | Font Family | Weight | Scale (Desktop / Mobile) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `Bricolage Grotesque` | 900 (Extra Bold) | `clamp(2.5rem, 2.2rem + 2.2vw, 3.85rem)` / `1.75rem` | Geometria arredondada, confiante e expansiva. Preserva a massa visual da referência com o calor e a doçura da confeitaria. |
| **Headings (H2/H3)** | `Bricolage Grotesque` | 800 (Bold) | `2.25rem` / `1.5rem` | Títulos de seções com presença marcante e entrelinha justa (1.1). |
| **Handwritten Annotations** | `Caveat` | 700 (Bold Script) | `1.5rem` / `0.95rem` | Manuscrito artesanal e humano que personifica a mão da confeiteira decorando e anotando receitas afetivas. |
| **Body & Subtitles** | `Plus Jakarta Sans` | 500 / 600 | `1.125rem` / `0.85rem` | Humanista geométrico de altíssima legibilidade, toque contemporâneo e excelente renderização de telas. |
| **Meta & Microcopy** | `Plus Jakarta Sans` | 700 / 800 (Uppercase) | `0.75rem` / `0.625rem` | Tracking generoso (`0.06em`) para selos de qualidade, etiquetas de categorias e horários. |
| **CTA Buttons** | `Plus Jakarta Sans` | 800 (Extra Bold) | `1.0625rem` / `0.95rem` | Botão pílula sólido, claro e convidativo ao toque. |

---

### 4. IMAGE & CUTOUT LANGUAGE
- **Isolamento de Sujeito (Alpha Cutouts)**: Produtos principais apresentados em recortes PNG com fundo transparente que repousam diretamente sobre o fundo amarelo ou creme, com sombras suaves e táteis (`filter: drop-shadow(0 18px 26px rgba(36, 20, 13, 0.22))`).
- **Zero Molduras Artificiais no Hero**: Eliminação de bordas brancas duras estilo adesivo no Hero, permitindo que o bolo, as frutas e o copo se integrem holisticamente ao espaço.
- **Profundidade em Camadas (Layering)**: Sobreposição tridimensional (Bolo principal ao centro `z-index: 10`, Copo da Felicidade à direita `z-index: 8`, confeitos e guarnições flutuantes `z-index: 6-7`).
- **Tratamento de Cor**: Realce sutil de brilho e apetite nas frutas vermelhas e caldas espelhadas.

---

### 5. GRAPHIC & DECORATIVE LANGUAGE
- **Setas Curvas Manuscritas em SVG**: Traços pontilhados orgânicos em cacau escuro (`stroke-dasharray="5 5"`) conectando as anotações aos ingredientes dos confeitos.
- **Brilhos & Confeitos Flutuantes (Sparkles)**: Pequenos glifos estelares (`✦`, `★`) pontuando o espaço negativo como pitadas de açúcar cristalizado.
- **Selos Rítmicos**: Ícones circulares com contorno fino de 1.8px e rótulos tipográficos em duas linhas.
- **Faixa Ribbon Central**: Medalhão retangular dobrado em verde esmeralda com inclinação de `-1deg`, ancorando a tradição artesanal exclusiva.

---

### 6. UI COMPONENT GRAMMAR
- **Botões (Pills)**: Cantos 100% arredondados (`border-radius: 9999px`), preenchimento sólido em cacau profundo (`#24140D`), texto branco em negrito e micro-elevação ao passar o mouse (`transform: translateY(-3px)`).
- **Header Global**: Superfície branca translúcida com desfoque de fundo (`backdrop-filter: blur(10px)`), links com linha indicadora dourada expansiva no hover e ícones utilitários circulares.
- **Top Announcement Bar**: Faixa sólida em verde esmeralda delicatessen (`#007D8A` / `#0D6E66`) com tipografia branca nítida.

---

### 7. MOTION PERSONALITY
- **Caráter**: Suave, aveludado, tátil e receptivo (como espalhar ganache artesanal).
- **Curva de Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` para transições suaves e `cubic-bezier(0.34, 1.56, 0.64, 1)` para o pop elástico sutil dos produtos e botões.
- **Duração Padrão**: 280ms – 400ms para micro-interações; 3.5s para flutuação contínua e suave dos confeitos no Hero.
