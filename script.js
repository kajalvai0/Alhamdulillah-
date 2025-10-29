// সাইন-আপ ফাংশন
const signupForm = document.getElementById('applicationForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const mobile = signupForm.mobile.value;
    const address = signupForm.address.value;
    const occupation = signupForm.occupation.value;
    const requirements = signupForm.requirements.value;
    const email = signupForm.email.value; // ইমেইল ফিল্ড যোগ করতে হবে
    const password = signupForm.password.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                name: name,
                mobile: mobile,
                address: address,
                occupation: occupation,
                requirements: requirements
            });
        })
        .then(() => {
            alert('সফলভাবে সাইন-আপ হয়েছে!');
            signupForm.reset();
            window.location.href = "login.html";
        })
        .catch(err => {
            alert(err.message);
        });
});

// লগ-ইন ফাংশন
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            alert('সফলভাবে লগ-ইন হয়েছে!');
            window.location.href = "admin.html";
        })
        .catch(err => {
            alert(err.message);
        });
});

// লগ-আউট ফাংশন (প্রয়োজনে ব্যবহার করা যাবে)
function logout() {
    auth.signOut().then(() => {
        alert('সফলভাবে লগ-আউট হয়েছে!');
        window.location.href = "index.html";
    });
}

// ব্যবহারকারী লগইন করা আছে কিনা তা চেক করুন
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('ব্যবহারকারী লগইন করা আছে:', user);
        // প্রয়োজন অনুযায়ী UI পরিবর্তন করুন
    } else {
        console.log('ব্যবহারকারী লগইন করা নেই');
    }
});

// আগের কোড... (ডোনেশন ফর্ম এবং অন্যান্য)


// ফর্ম সাবমিশন হ্যান্ডলিং
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('আপনার আবেদন সফলভাবে জমা হয়েছে! শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।');
    this.reset();
});

document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('আপনার ডোনেশন তথ্য সফলভাবে জমা হয়েছে! আল্লাহ আপনাকে উত্তম প্রতিদান দিন।');
    this.reset();
    var modal = bootstrap.Modal.getInstance(document.getElementById('donateModal'));
    modal.hide();
});

// বেনামী ডোনেশন চেকবক্স হ্যান্ডলিং
document.getElementById('anonymous').addEventListener('change', function() {
    var donorInfo = document.getElementById('donorInfo');
    if (this.checked) {
        donorInfo.style.display = 'none';
    } else {
        donorInfo.style.display = 'block';
    }
});

// গুগল শীটে ডেটা সাবমিট করার ফাংশন (সিমুলেশন)
function submitToGoogleSheets(formData) {
    // এটি একটি সিমুলেশন
    // বাস্তবে, আপনাকে Google Apps Script ব্যবহার করতে হবে
    console.log('Data to be submitted to Google Sheets:', formData);
    // এখানে AJAX রিকোয়েস্ট যোগ করতে হবে Google Apps Script-এ
}
