const aboutContent = document.getElementById('about-content');
const servicesContent = document.getElementById('services-content');

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
    loadPageContents(); // নতুন ফাংশন কল
});

// ... (আগের সব ফাংশন - loadSlideshow, loadMenus, etc.)