# 📁 Organização do Projeto
 
## Estrutura de Pastas
 
![Logo do Projeto](assets/img/README.png)

 
##  O Que Cada Um Faz
 
### Eduardo (Líder)
**O que mexe:**
- Servidor e banco de dados
- Código que roda no computador
**Exemplo:** Quando alguém faz login, Eduardo faz o código que verifica se a senha está correta
 
### Luiz
**O que mexe:**
- Ajuda Eduardo
- Organiza o código geral
**Exemplo:** Revisa se o código está bem organizado
 
### Guilherme
**O que mexe:**
- Arquivos HTML (`public/`)
- Arquivos CSS (`style/`)
**Exemplo:** Faz a página ficar colorida e bonita
 
### Hugo
**O que mexe:**
- Testa tudo
- Ajuda em tudo
**Exemplo:** Testa se o botão funciona em todos os navegadores, faz as pesquisas e ajuda a revisar os codigos
 
---
 
##  Como Nomear Arquivos
 
###  Certo:
 
```
📁 assets
📁 public
📁 style
📄 index.html
📄 login.html
📄 style.css
📄 handleClick.js
🖼️ trem-bala.jpg
```
 
###  Errado:
 
```
Assets (com maiúscula)
PUBLIC (tudo maiúsculo)
Index.html (com maiúscula)
style CSS (com espaço)
handleclick.js (tudo minúsculo)
foto.jpg (nome vago)
```
 
---
 
##  Padrão de Nomenclatura Rápido
 
| Tipo | Como Nomear | Exemplo |
|------|-------------|---------|
| Pastas | minúsculas | `assets`, `style` |
| HTML | minúsculas | `index.html`, `login.html` |
| CSS | minúsculas | `style.css` |
| JS | camelCase | `handleClick.js` |
| Imagens | descritivo | `trem-bala.jpg` |
| Classes CSS | com hífen | `.botao-principal` |
| IDs HTML | camelCase | `id="loginForm"` |
 
---
 
##  Fluxo de Trabalho
 
```
1. Eduardo decide o que fazer
   ↓
2. Cada um pega uma tarefa
   ↓
3. Criam uma "branch" (linha) de trabalho
   ↓
4. Fazem as mudanças
   ↓
5. Enviam para o GitHub
   ↓
6. Outro revisa o código
   ↓
7. Se tiver OK, junta no projeto principal
```
 
---
 
##  Resumo Rápido de Funções
 
| Pessoa | Função | Pasta Principal |
|--------|--------|-----------------|
| Eduardo | Líder + Backend | Servidor/Banco |
| Hugo | Ajuda + Pesquisas| Testes + Revisao |
| Guilherme | Frontend | `public/` + `style/` |
| Luis | Código Geral | Tudo | 
 