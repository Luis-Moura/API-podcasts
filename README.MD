<h1>API de Podcasts</h1>

<p>Esta é uma API simples para fornecer informações sobre podcasts. Ela foi construída com Express e TypeScript.</p>

<h2>Instalação</h2>

<p>Para utilizar esta API, você precisará ter o Node.js instalado em seu sistema. Clone este repositório e execute o seguinte comando para instalar as dependências:</p>

<pre><code>npm install</code></pre>

<h2>Inicializando o Servidor</h2>

<p>Para iniciar o servidor localmente, execute o seguinte comando:</p>

<pre><code>npm run start:dev</code></pre>

<h2>Como Usar</h2>

<p>Existem várias rotas disponíveis para acessar informações sobre os podcasts.</p>

<h3>Endpoint /podcasts</h3>

<p>Retorna informações sobre todos os podcasts.</p>
<p>Método: GET</p>

<pre><code>http://localhost:3333/podcasts</code></pre>

<h3>Endpoint /podcasts/filter</h3>

<p>Retorna informações sobre podcasts com base nos parâmetros fornecidos.</p>
<p>O retorno do corpo (body) da requisição deve ser usado como os parâmetros ao utilizar o endpoint de filtro.</p>
<p>Método: GET</p>

<pre><code>http://localhost:3333/podcasts/filter</code></pre>

<h3>Parâmetros:</h3>

<ul>
  <li><code>podcastName</code>: Nome do podcast (opcional)</li>
  <li><code>episodeName</code>: Nome do episódio (opcional)</li>
  <li><code>categories</code>: Categorias do podcast (opcional)</li>
</ul>

<h2>Pré-requisitos</h2>

<ul>
  <li>Node.js instalado</li>
  <li>Conhecimento básico de APIs REST</li>
</ul>

<h2>Licença</h2>

<p>Este projeto está licenciado sob a <a href="LICENSE.txt">Licença MIT</a>.</p>
