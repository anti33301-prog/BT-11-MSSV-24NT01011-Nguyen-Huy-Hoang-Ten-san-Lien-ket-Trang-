const petData = JSON.parse(localStorage.getItem('selectedPet'));

if (petData) {
    document.getElementById('pet-name').innerText = petData.name;
    document.getElementById('pet-desc').innerText = petData.desc;
    
    const gallery = document.getElementById('thuvienanh');
    petData.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
}

// Gọi lại hàm tạo footer tương tự như script.js hoặc dùng chung một file