async function fetchNews() {
    const apiKey = 'f6ad26658b6c4f818a4a59922913ac8b'; // 
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`);
    const data = await response.json();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';  // Clear the loading message

    if (data.articles.length === 0) {
        newsContainer.innerHTML = '<p>No news available right now.</p>';
        return;
    }

    data.articles.slice(0, 10).forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        
        newsItem.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/600x400'}" alt="Article Image">
            <div class="content">
                <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                <p>${article.description || 'No description available.'}</p>
            </div>
        `;

        newsContainer.appendChild(newsItem);
    });
}

fetchNews();  // Fetch the news when the page loads
