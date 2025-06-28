const posts = [
    {
        author: 'Ana Paula',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        time: 'há 1 hora',
        content: 'Consegui uma nova certificação em Cloud Computing! #carreira #cloud',
    },
    {
        author: 'Carlos Lima',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
        time: 'há 2 horas',
        content: 'Participei de um evento incrível sobre IA generativa. Recomendo a todos! #IA #tecnologia',
    },
    {
        author: 'Juliana Torres',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        time: 'há 3 horas',
        content: 'Muito feliz em anunciar minha nova posição como Engenheira de Software na TechX! #novodesafio',
    },
    {
        author: 'Rafael Souza',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        time: 'há 4 horas',
        content: 'Compartilhando um artigo interessante sobre tendências em UX/UI para 2025. Vale a leitura! #ux #ui #design',
    }
];

function renderPosts() {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        postEl.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" class="post-avatar" alt="Avatar">
                <div>
                    <div class="post-author">${post.author}</div>
                    <div class="post-time">${post.time}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button><i class="fas fa-thumbs-up"></i> Curtir</button>
                <button><i class="fas fa-comment-dots"></i> Comentar</button>
                <button><i class="fas fa-retweet"></i> Re-postar</button>
                <button><i class="fas fa-share"></i> Compartilhar</button>
            </div>
        `;
        postsDiv.appendChild(postEl);
    });
}
let isPost = document.querySelector('.new-post button') !== null;
if (isPost) {
    document.querySelector('.new-post button').addEventListener('click', () => {
        const textarea = document.querySelector('.new-post textarea');
        const content = textarea.value.trim();
        if (content) {
            posts.unshift({
                author: 'Seu Nome',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                time: 'agora',
                content
            });
            textarea.value = '';
            renderPosts();
        }
    });

    renderPosts();
}

