# Cartola Criativa — versão portátil React + Vite

Esta variante é independente da infraestrutura Higgsfield e gera um site estático (SPA) que pode ser hospedado no NGINX, Cloudflare Pages, Netlify ou Vercel.

## Requisitos
- Node.js 20.19+ ou 22.12+.
- npm.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Publicação
```bash
npm install
npm run build
```
Publique todo o conteúdo da pasta `dist/` em seu servidor web. Configure todas as URLs não encontradas para responder com `index.html`, preservando a navegação para /portfolio, /sobre, /contato e /projetos/:slug. Um exemplo de NGINX está em `nginx.conf.example`. No Netlify, copie o conteúdo de `_redirects` para `public/_redirects` antes do build.

## Observações
- Esta versão é uma SPA baseada em Vite, adaptada do layout original em React + TanStack Start.
- Mídias (imagens e vídeo do hero) estão locais em `public/assets`.
- O formulário de contato é propositalmente demonstrativo e não envia mensagens.
- Cases marcados como demonstrativos precisam ser substituídos por dados aprovados.
- Não inclui CMS ou backend. Links de WhatsApp/e-mail abrem serviços externos.
- As fontes DM Sans e Manrope são carregadas pelo Google Fonts via CSS; hospede-as localmente se precisar de operação offline.
- Revise os direitos de uso das imagens e do vídeo extraídos do site da Cartola antes de distribuir ou publicar externamente.
