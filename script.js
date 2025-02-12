async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=f6ad26658b6c4f818a4a59922913ac8b');
    const data = await response.json();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    data.articles.slice(0, 10).forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news');
        newsItem.innerHTML = `
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p>${article.description || 'No description available.'}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}
fetchNews();


