const pageSelect = document.getElementById('page-select');
const pageEditor = document.getElementById('page-editor');
const pageContentForm = document.getElementById('page-content-form');

// ... (আগের সব ভেরিয়েবল)

// Initial loads
auth.onAuthStateChanged(user => {
    if (user && user.isAdmin) { // Assuming isAdmin flag is set on user object
        loadUsers();
        loadSlides();
        loadMenus();
        loadPageContent(); // পেজের কনটেন্ট লোড করার ফাংশন
    } else {
        // Redirect if not admin
    }
});

// ** পেজ ম্যানেজমেন্ট **

// ড্রপডাউন পরিবর্তন হলে কনটেন্ট লোড করা
pageSelect.addEventListener('change', () => {
    loadPageContent();
});

// কনটেন্ট লোড করার ফাংশন
function loadPageContent() {
    const pageId = pageSelect.value;
    db.collection('pages').doc(pageId).get().then(doc => {
        if (doc.exists) {
            // TinyMCE বা অন্য কোনো রিচ টেক্সট এডিটর থাকলে তার জন্য:
            // tinymce.get('page-editor').setContent(doc.data().content);
            pageEditor.value = doc.data().content; // সাধারণ textarea-এর জন্য
        } else {
            pageEditor.value = ' এখনো কোনো কনটেন্ট যোগ করা হয়নি।';
        }
    });
}

// কনটেন্ট সেভ করার ফাংশন
pageContentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pageId = pageSelect.value;
    // const content = tinymce.get('page-editor').getContent();
    const content = pageEditor.value;

    db.collection('pages').doc(pageId).set({
        content: content
    }).then(() => {
        alert(`'${pageId}' পেজের কনটেন্ট সফলভাবে আপডেট হয়েছে!`);
    }).catch(err => {
        alert("কনটেন্ট আপডেট করতে সমস্যা হয়েছে: " + err.message);
    });
});


// ... (আগের সব ফাংশন - showSection, loadUsers, loadSlides, loadMenus, etc.)
