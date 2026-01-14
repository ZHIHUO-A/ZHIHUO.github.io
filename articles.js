// 文章数据
const articles = [
    {
        title: "我的第一篇文章",
        date: "2026年1月14日",
        content: "今天开始尝试搭建博客！"
    }
];

// 显示文章
function showArticles() {
    const articleList = document.getElementById('article-list');
    
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p class="date">${article.date}</p>
            <p>${article.content}</p>
        `;
        articleList.appendChild(articleDiv);
    });
}

// 页面加载完成后显示文章
window.onload = showArticles;

