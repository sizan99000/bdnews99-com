'use strict';

// Function to fetch news articles
async function fetchArticles() {
    const response = await fetch('https://api.example.com/news');
    const data = await response.json();
    displayArticles(data.articles);
}

// Function to display articles on the page
function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElement);
    });
}

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles();
});