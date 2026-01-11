const animals = [
    {
        name: "Mèo Anh",
        desc: "Loài mèo hiền lành và đáng yêu.",
        thumb: "img/hinh_anh_meo_dep.jpg",
        images: ["img/hinh_anh_meo_dep2.jpg", "img/hinh_anh_meo_dep3.jpg", "img/hinh_anh_meo_dep4.jpg","img/hinh_anh_meo_dep7.jpg"]
    },
    // ... Thêm đủ 5 đối tượng tương tự
];

// Hàm tạo Footer dùng chung
function createFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
        <div class="footer-content container">
            <div>
                <h3>Website Con Vật</h3>
                <p>Học sinh: Nguyễn Huy Hoàng</p>
                <p>Hotline: 0123 456 789</p>
                <p>Facebook: fb.com/truonghoc</p>
            </div>
            <div class="footer-map">
                <iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"></iframe>
            </div>
        </div>
    `;
}



const btnBackToDetail = document.getElementById('btn-back-to-detail');
const lastViewedPet = localStorage.getItem('selectedPet');

if (lastViewedPet) {
    btnBackToDetail.style.display = "inline-block";
    btnBackToDetail.onclick = () => {
        window.location.href = 'detail.html';
    };
}

const container = document.getElementById('danhsach');
animals.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.innerHTML = `<img src="${pet.thumb}" width="100%"><p>${pet.name}</p>`;
    
    card.onclick = () => {
       
        localStorage.setItem('selectedPet', JSON.stringify(pet));
        window.location.href = 'detail.html';
    };
    container.appendChild(card);
});

createFooter();
