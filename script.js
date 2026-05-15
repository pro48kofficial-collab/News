const myNews = [
    {
        title: "Прайс-лист на послуги та рекламу",
        date: "15.05.2026",
        desc: "Актуальні ціни: Реклама в ТГ-каналі — 50 грн | Реклама на сходці — 30 грн. Пишіть в особисті!",
        image: "price_list.jpg", 
        link: "https://telegra.ph/PRAJS-LIST-05-14-15" 
    },
    {
        title: "Приєднуйся до нашого Discord-сервера!",
        date: "15.05.2026",
        desc: "Шукаєш тімейтів для Block Strike? Тоді заходь до нас у Discord!",
        image: "IMG_20260510_185037_033.jpg", 
        link: "https://discord.gg/fsbCegxJX" 
    },
    {
        title: "Грандіозна сходка в Block Strike!",
        date: "10.05.2026",
        desc: "Сьогодні проводимо мега-сходку на карті сервісу. Чекаю всіх підписників @pro48k_bs!",
        image: "IMG_20260510_185037_033.jpg", 
        link: "https://t.me/pro48k_bs"
    },
    {
        title: "Новий концепт скіна на ніж",
        date: "08.05.2026",
        desc: "Розробив у Prisma3D новий вигляд для керамбіта. Оцініть у ТГ-каналі!",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500", 
        link: "https://t.me/pro48k_bs"
    },
    {
        title: "Оновлення ChickenClick доступне!",
        date: "05.05.2026",
        desc: "Додав нові рівні та систему прокачки. Завантажуйте на GitHub!",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
        link: "https://github.com/pro48kofficial-collab/ChickenClick-"
    }
];

function displayMyNews() {
    const container = document.getElementById('news-container');
    if (!container) return; // Перевірка на всяк випадок

    container.innerHTML = ''; // Видаляємо напис "Завантаження..."

    myNews.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${post.image}" alt="news" onerror="this.src='https://via.placeholder.com/400x200?text=Image+Not+Found'">
            <div class="card-content">
                <small style="color: #888;">${post.date}</small>
                <div class="card-title" style="margin-top: 5px; font-weight: bold;">${post.title}</div>
                <p class="card-desc" style="font-size: 0.9rem;">${post.desc}</p>
                <a href="${post.link}" target="_blank" class="btn">Переглянути</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// ВАЖЛИВО: Викликаємо функцію
displayMyNews();
        
