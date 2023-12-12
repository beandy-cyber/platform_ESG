// Função para buscar e exibir os artigos na página
function fetchArticles() {
  fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(data => {
  
      const articlesDiv = document.getElementById('articles');
      
    
      data.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML =
		`<article>
		<div>
		<h2>${article.title}</h2>
		<p>${article.content}</p>
		</div>
		</article>
		`;
        articlesDiv.appendChild(articleElement);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar os artigos:', error);
    });
}

// Chama a função para buscar e exibir os artigos ao carregar a página
window.onload = fetchArticles;
