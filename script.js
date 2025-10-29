const slideshowContainer = document.getElementById('slideshow-container');
const mainMenu = document.getElementById('main-menu');
const aboutContent = document.getElementById('about-content');
const servicesContent = document.getElementById('services-content');

// ডাইনামিক স্লাইডশো লোড করা
function loadSlideshow() {
    if (slideshowContainer) {
        db.collection('slideshow').orderBy('order').onSnapshot(snapshot => {
            let slidesHTML = '';
            let active = 'active';
            snapshot.forEach(doc => {
                const slide = doc.data();
                slidesHTML += `
                    <div class="carousel-item ${active}">
                        <img src="${slide.imageUrl}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${slide.title}</h5>
                            <p>${slide.caption}</p>
                        </div>
                    </div>
                `;
                active = '';
            });
            slideshowContainer.innerHTML = slidesHTML;
        });
    }
}

// ডাইনামিক মেনু লোড করা
function loadMenus() {
    if (mainMenu) {
        db.collection('menus').orderBy('order').onSnapshot(snapshot => {
            let menuHTML = '';
            snapshot.forEach(doc => {
                const menu = doc.data();
                menuHTML += `<li class="nav-item"><a class="nav-link" href="${menu.url}">${menu.name}</a></li>`;
            });
            mainMenu.innerHTML = menuHTML;
        });
    }
}

// ডাইনামিক পেজ কনটেন্ট লোড করা
function loadPageContents() {
    // "আমাদের সম্পর্কে" পেজের কনটেন্ট
    if (aboutContent) {
        db.collection('pages').doc('about').onSnapshot(doc => {
            if (doc.exists) {
                aboutContent.innerHTML = doc.data().content;
            }
        });
    }

    // "সেবাসমূহ" পেজের কনটেন্ট
    if (servicesContent) {
        db.collection('pages').doc('services').onSnapshot(doc => {
            if (doc.exists) {
                servicesContent.innerHTML = doc.data().content;
            }
        });
    }
}

// পেজ লোড হলে সবকিছু লোড করুন
document.addEventListener('DOMContentLoaded', () => {
    loadSlideshow();
    loadMenus();
    loadPageContents();
});
