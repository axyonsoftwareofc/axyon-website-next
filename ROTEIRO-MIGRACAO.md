# 🚀 Roteiro de Migração - Axyon Website

## 📋 Resumo do Projeto

**Projeto:** Website institucional da Axyon Software House
**Origem:** React + Vite
**Destino:** Next.js 16 (App Router)
**Objetivo:** Melhor SEO, performance e marketing digital

---

## ✅ O QUE JÁ FOI FEITO

### Projeto Vite (Original)
- [x] Layout completo com 6 seções
- [x] Dark/Light mode
- [x] Internacionalização (PT, EN, ES)
- [x] Animações com Framer Motion
- [x] Formulário de contato com validação
- [x] Lazy loading
- [x] Revisão de contraste WCAG AA
- [x] Otimização de animações (menos poluição visual)

### Migração Next.js
- [x] Estrutura de pastas criada
- [x] Componentes migrados
- [x] Seções migradas
- [x] i18n configurado
- [x] Tailwind v4 configurado
- [x] next/image implementado
- [x] Providers configurados

---

## 🔧 CORREÇÕES PENDENTES

### 1. ESLint - ThemeProvider (RESOLVIDO)
O arquivo `src/contexts/ThemeProvider.tsx` foi corrigido.
A lógica foi reestruturada para evitar setState dentro de useEffect.

### 2. CSS @import (RESOLVIDO)
O arquivo `src/app/globals.css` foi corrigido.
@import do Tailwind agora está no topo.

### 3. Viewport/themeColor (RESOLVIDO)
O arquivo `src/app/layout.tsx` foi corrigido.
themeColor movido para `export const viewport`.

---

## 🧪 TESTAR AGORA

Rode os comandos:
```bash
cd C:\Users\werne\WebstormProjects\axyon-website-next
npm run lint
npm run build
```

Se passar, teste em desenvolvimento:
```bash
npm run dev
```

Acesse: http://localhost:3000

---

## 📁 ESTRUTURA FINAL DO PROJETO

```
axyon-website-next/
├── public/
│   ├── logo-axyon.png
│   ├── favicon.ico
│   └── og-image.jpg (criar - 1200x630px)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingCTA.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── SectionLoader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── contexts/
│   │   ├── ThemeContext.ts
│   │   └── ThemeProvider.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── utils/
│   │   └── animations.ts
│   └── i18n/
│       └── config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 PRÓXIMOS PASSOS (Após build funcionar)

### Prioridade Alta
1. **Criar og-image.jpg** - Imagem de preview para redes sociais (1200x630px)
2. **Testar em produção** - `npm run build && npm run start`
3. **Deploy na Vercel** - Conectar repositório GitHub

### Prioridade Média
4. **Sitemap automático** - Adicionar next-sitemap
5. **Analytics** - Configurar Google Analytics / Vercel Analytics
6. **PWA** - Adicionar next-pwa para funcionar offline

### Prioridade Baixa (Futuro)
7. **Blog** - Adicionar seção de blog com MDX
8. **Cases individuais** - Páginas separadas para cada projeto
9. **CMS** - Integrar com Contentful/Sanity para gerenciar conteúdo

---

## 🌐 DEPLOY NA VERCEL

### Passo 1: Criar repositório no GitHub
```bash
git init
git add .
git commit -m "Migração para Next.js"
git branch -M main
git remote add origin https://github.com/seu-usuario/axyon-website.git
git push -u origin main
```

### Passo 2: Conectar na Vercel
1. Acesse vercel.com
2. "Add New Project"
3. Selecione o repositório
4. Deploy automático!

### Passo 3: Configurar domínio
1. Vá em Settings → Domains
2. Adicione axyon.com.br
3. Configure DNS conforme instruções

---

## 📊 BENEFÍCIOS DA MIGRAÇÃO

| Antes (Vite) | Depois (Next.js) |
|--------------|------------------|
| SPA client-side | SSR/SSG |
| SEO limitado | SEO excelente |
| Meta tags estáticas | Meta tags dinâmicas |
| Imagens não otimizadas | next/image otimizado |
| Bundle único | Code splitting automático |
| Sem preview em redes | Open Graph completo |

---

## 💡 DICAS IMPORTANTES

### Para continuar o desenvolvimento:
- Sempre use `'use client'` em componentes com hooks/estados
- Use `next/image` em vez de `<img>`
- Use `next/link` em vez de `<a>` para navegação interna
- Mantenha Server Components quando possível (melhor performance)

### Para SEO:
- Cada página pode ter seu próprio `metadata` export
- Use `generateMetadata` para meta tags dinâmicas
- Crie um arquivo `robots.ts` para controle de crawlers
- Adicione structured data (JSON-LD) para rich snippets

---

## 📞 SUPORTE

Se precisar de ajuda, continue a conversa com o contexto:

"Estou migrando o site da Axyon de Vite para Next.js 16.
O projeto está em: C:\Users\werne\WebstormProjects\axyon-website-next
Já foram migrados componentes, seções, i18n, e corrigidos erros de lint.
[Descreva o problema atual]"

---

**Última atualização:** Migração em andamento
**Status:** Build deve passar após aplicar as 3 correções
