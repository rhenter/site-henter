# Henter Digital Solutions

Site institucional da **Henter Digital Solutions**, preparado para o domínio **https://henter.com.br/**.

Apresenta consultoria em desenvolvimento de software, infraestrutura, arquitetura, otimização e agentes de IA, além dos produtos Canhoto Simples, Pré-Matrícula e Cota Simples.

O projeto usa HTML, CSS e JavaScript. Os arquivos em `public/` são a versão pronta para publicação: não há instalação de dependências, compilação ou servidor de aplicação.

## Estrutura

```text
site-henter/
├── .editorconfig
├── .gitignore
├── README.md
└── public/                  # Diretório publicado pela hospedagem
    ├── index.html           # Conteúdo, navegação e metadados do site
    ├── 404.html             # Página para endereços inexistentes
    ├── styles.css           # Estilos e layout responsivo
    ├── script.js            # Idiomas, menu, abas e preparação da mensagem de WhatsApp
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── brand/           # Logos SVG, símbolos e favicon
        ├── products/        # Imagens otimizadas dos produtos
        └── fonts/           # Manrope e sua licença OFL
```

Apenas `public/` deve ser publicado. A documentação e os arquivos de configuração ficam fora da área pública do site.

## Prévia local

Requisito: Python 3, usado somente para servir os arquivos durante a revisão local.

Na raiz do repositório:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Abra **http://127.0.0.1:8000/** no navegador. Use `Ctrl+C` para encerrar o servidor.

Depois de editar os arquivos, recarregue a página. Para uma revisão rápida, também é possível abrir `public/index.html` diretamente no navegador.

## Idiomas

O site oferece português e inglês pelo seletor `PT / EN` no cabeçalho. Ao abrir o endereço sem um parâmetro de idioma, a configuração principal do navegador define a versão inicial: navegadores em português usam `PT` e os demais usam `EN`.

A versão em inglês pode ser compartilhada diretamente em plataformas internacionais por meio de **https://henter.com.br/?lang=en**. Para abrir diretamente em português, use **https://henter.com.br/?lang=pt**.

Os textos em português permanecem em `public/index.html`. As traduções em inglês, os metadados traduzidos e as mensagens do WhatsApp ficam em `public/script.js`.

## Manutenção

| Alteração                                                       | Arquivo ou diretório                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| Textos, serviços, experiência, produtos e contatos              | `public/index.html`                                             |
| Cores, espaçamento, tipografia e comportamento em telas menores | `public/styles.css`                                             |
| Idiomas, menu móvel, abas e formulário de contato               | `public/script.js`                                              |
| Logos, símbolos e favicon                                       | `public/assets/brand/`                                          |
| Fontes e licença                                                | `public/assets/fonts/`                                          |
| Página não encontrada                                           | `public/404.html`                                               |
| Endereço principal para mecanismos de busca                     | `public/index.html`, `public/robots.txt` e `public/sitemap.xml` |

O formulário prepara uma mensagem para **+55 (24) 99275-5167** e abre o WhatsApp. O visitante revisa e envia a mensagem no aplicativo; o site não armazena dados do formulário.

As artes dos produtos são conceituais. Seus estágios atuais de desenvolvimento estão identificados no conteúdo.

As fontes são servidas pelo próprio site. A licença da Manrope está em `public/assets/fonts/OFL-Manrope.txt`.

## Deploy no Netlify

O site está publicado no Netlify em **https://site-henter.netlify.app/**. Depois da configuração inicial, novos commits enviados à branch de produção podem gerar novas publicações automaticamente.

### 1. Disponibilizar os arquivos no GitHub

Na primeira publicação do repositório vazio, revise os arquivos e execute:

```bash
git add .
git commit -m "Adiciona site institucional da Henter Digital Solutions"
git branch -M main
git push -u origin main
```

O repositório remoto é **https://github.com/rhenter/site-henter**.

### 2. Conectar o repositório

No painel do Netlify:

1. Escolha **Add new project** e **Import an existing project**.
2. Conecte o GitHub e selecione o repositório **rhenter/site-henter**.
3. Configure os campos abaixo e inicie o deploy.

| Configuração       | Valor                                    |
| ------------------ | ---------------------------------------- |
| Branch de produção | `main`                                   |
| Build command      | Deixe vazio                              |
| Publish directory  | `public`                                 |
| Base directory     | Raiz do repositório; deixe o campo vazio |
| Variáveis          | Nenhuma                                  |

Não há etapa de build. O Netlify publica diretamente o conteúdo de `public/`.

O endereço permanente do projeto é `https://site-henter.netlify.app/`. Endereços no formato `ID--site-henter.netlify.app` identificam uma publicação específica e não devem ser usados como destino do DNS.

Referência: [deploy com repositório no Netlify](https://docs.netlify.com/welcome/add-new-site/).

### 3. Conectar henter.com.br

O DNS é administrado diretamente pelo Registro.br. Não altere os servidores DNS nem remova os registros de e-mail existentes. Em especial, preserve os registros MX do Google Workspace, além de SPF, DKIM e DMARC.

Primeiro, no projeto do Netlify:

1. Abra **Domain management** e **Production domains**.
2. Escolha **Add a domain** e adicione `henter.com.br`.
3. Mantenha `henter.com.br` como domínio principal. O Netlify também adicionará `www.henter.com.br` e o redirecionará para o domínio principal.

Depois, no painel do Registro.br:

1. Abra o domínio `henter.com.br`.
2. Na seção **DNS**, escolha **Configurar endereçamento** e entre no **Modo avançado**.
3. Adicione somente os dois registros abaixo. No registro raiz, informe o próprio domínio, conforme exibido pelo painel.

| Nome                | Tipo    | Destino                          |
| ------------------- | ------- | -------------------------------- |
| `henter.com.br`     | `CNAME` | `apex-loadbalancer.netlify.com.` |
| `www.henter.com.br` | `CNAME` | `site-henter.netlify.app.`       |

O ponto final no destino do `CNAME` indica um nome completo. Caso o painel o remova ao salvar, isso é normal.

O Registro.br aplica CNAME flattening ao registro raiz e publica externamente o endereço `A 75.2.60.5`. Assim, os registros MX do Google Workspace permanecem válidos no mesmo domínio.

Após salvar, aguarde a publicação do DNS e volte a **Domain management** no Netlify para acompanhar a validação e a emissão do certificado HTTPS. A propagação pode levar algumas horas e, em casos excepcionais, até 24 horas.

Referências: [DNS externo no Netlify](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/) e [administração de DNS no Registro.br](https://registro.br/ajuda/gerenciamento-de-conta/).

Se o domínio principal mudar, atualize a URL canônica e `og:url` em `public/index.html`, a URL em `public/sitemap.xml` e a referência ao sitemap em `public/robots.txt`.

### Publicação manual

Para publicar sem integração com Git, o Netlify também permite deploy manual. Envie a pasta `public/` ou um ZIP contendo seu conteúdo, com `index.html` na raiz do ZIP.

Referência: [deploy manual no Netlify](https://docs.netlify.com/welcome/add-new-site/#deploy-without-continuous-deployment).

## Conferência antes de publicar

- Abra o site em telas de computador e celular e verifique a ausência de cortes ou rolagem horizontal.
- Teste o menu, as abas de experiência e os links de navegação.
- Confira WhatsApp, e-mail, LinkedIn e GitHub.
- Verifique se o formulário prepara o assunto e a mensagem esperados no WhatsApp.
- Confira se logos e fontes carregam corretamente.
- Acesse `/404.html`, `/robots.txt` e `/sitemap.xml`.

Para verificar a sintaxe do JavaScript, caso tenha Node.js instalado:

```bash
node --check public/script.js
```

## Estado da configuração

Os arquivos estão publicados no Netlify e o DNS de `henter.com.br` e `www.henter.com.br` está configurado no Registro.br. Após uma alteração de DNS, a resolução e o certificado HTTPS podem levar algumas horas para se atualizar em todos os provedores.
