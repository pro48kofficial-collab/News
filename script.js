// Твої власні новини
const myNews = [
    {
        title: "Грандіозна сходка в Block Strike!",
        date: "14.05.2026",
        desc: "В четвер проводимо мега-сходку на новому режимі. Чекаю всіх підписників @pro48k_bs!",
        image: "5190608109573969991_121.jpg?embed=1", // Сюди ставиш посилання на скріншот
        link: "https://t.me/pro48k_bs"
    },
    {
        title: "Новий концепт скіна на ніж",
        date: "08.05.2026",
        desc: "Розробив у Prisma3D новий вигляд для керамбіта. Як вам такий дизайн?",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500", 
        link: "https://t.me/pro48k_bs"
    },
    {
        title: "Оновлення ChickenClick",
        date: "05.05.2026",
        desc: "Додав нові рівні та систему прокачки. Завантажуйте оновлення на GitHub!",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
        link: "https://github.com"
    }
];

function displayMyNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; 

    myNews.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${post.image}" alt="news">
            <div class="card-content">
                <small style="color: #888;">${post.date}</small>
                <div class="card-title" style="margin-top: 5px;">${post.title}</div>
                <p class="card-desc">${post.desc}</p>
                <a href="${post.link}" target="_blank" class="btn">Переглянути</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Запускаємо вивід новин
displayMyNews();
      
