# Henter Digital Solutions

Site institucional da **Henter Digital Solutions**, preparado para o domínio **https://henter.com.br/**.

Apresenta consultoria em desenvolvimento de software, infraestrutura, arquitetura, otimização e agentes de IA, além dos produtos Canhoto Simples, Pré-Matrícula e Sistema de Cotação.

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
    ├── script.js            # Menu, abas e preparação da mensagem de WhatsApp
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── brand/           # Logos SVG, símbolos e favicon
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

## Manutenção

| Alteração                                                       | Arquivo ou diretório                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| Textos, serviços, experiência, produtos e contatos              | `public/index.html`                                             |
| Cores, espaçamento, tipografia e comportamento em telas menores | `public/styles.css`                                             |
| Menu móvel, abas de experiência e formulário de contato         | `public/script.js`                                              |
| Logos, símbolos e favicon                                       | `public/assets/brand/`                                          |
| Fontes e licença                                                | `public/assets/fonts/`                                          |
| Página não encontrada                                           | `public/404.html`                                               |
| Endereço principal para mecanismos de busca                     | `public/index.html`, `public/robots.txt` e `public/sitemap.xml` |

O formulário prepara uma mensagem para **+55 (24) 99275-5167** e abre o WhatsApp. O visitante revisa e envia a mensagem no aplicativo; o site não armazena dados do formulário.

As artes dos produtos são conceituais. Seus estágios atuais de desenvolvimento estão identificados no conteúdo.

As fontes são servidas pelo próprio site. A licença da Manrope está em `public/assets/fonts/OFL-Manrope.txt`.

## Deploy no Cloudflare Pages

O caminho recomendado é conectar este repositório ao Cloudflare Pages. Depois da configuração inicial, novos commits enviados à branch de produção geram novas publicações.

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

No painel da Cloudflare:

1. Acesse **Workers & Pages** e crie um projeto **Pages**.
2. Escolha a integração com Git e conecte o GitHub.
3. Selecione o repositório **rhenter/site-henter**.
4. Configure os campos abaixo e inicie o deploy.

| Configuração           | Valor                                    |
| ---------------------- | ---------------------------------------- |
| Branch de produção     | `main`                                   |
| Framework preset       | `None`                                   |
| Build command          | `exit 0`                                 |
| Build output directory | `public`                                 |
| Root directory         | Raiz do repositório; deixe o campo vazio |
| Variáveis de ambiente  | Nenhuma                                  |

O comando `exit 0` apenas encerra a etapa de build com sucesso. A hospedagem publica diretamente o conteúdo de `public/`.

Após o deploy, confira o endereço `*.pages.dev` informado pela Cloudflare.

Referências: [publicação de HTML estático](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) e [integração com Git](https://developers.cloudflare.com/pages/get-started/git-integration/).

### 3. Conectar henter.com.br

1. Adicione `henter.com.br` à sua conta Cloudflare.
2. Confira e preserve os registros DNS existentes, principalmente os registros de e-mail: MX, SPF, DKIM e DMARC.
3. Para usar o domínio raiz no Pages, configure no registrador os servidores DNS informados pela Cloudflare. O domínio continua registrado no provedor atual.
4. No projeto Pages, abra **Custom domains** e adicione `henter.com.br`.
5. Adicione também `www.henter.com.br` caso queira atender esse endereço. Configure o redirecionamento de `www` para `henter.com.br`, que é o endereço principal definido nos metadados.
6. Aguarde a ativação do domínio e do HTTPS e confira os dois endereços.

Referências: [domínios personalizados](https://developers.cloudflare.com/pages/configuration/custom-domains/) e [redirecionamento de www para o domínio raiz](https://developers.cloudflare.com/pages/how-to/www-redirect/).

Se o domínio principal mudar, atualize a URL canônica e `og:url` em `public/index.html`, a URL em `public/sitemap.xml` e a referência ao sitemap em `public/robots.txt`.

### Publicação manual

Para publicar sem integração com Git, o Cloudflare Pages também permite **Direct Upload**. Envie a pasta `public/` ou um ZIP contendo seu conteúdo, com `index.html` na raiz do ZIP.

Um projeto criado por Direct Upload não pode ser convertido posteriormente em um projeto com integração Git; é necessário criar outro projeto. Para este repositório, prefira a integração Git desde o início.

Referência: [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

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

Os arquivos estão preparados para publicação. A conexão com o Cloudflare Pages, a primeira publicação no GitHub e a configuração DNS do domínio são etapas externas descritas acima; não são realizadas pelo conteúdo deste repositório.
