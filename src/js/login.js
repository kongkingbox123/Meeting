// login.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const loginData = Object.fromEntries(formData.entries());

        const firstName = loginData.firstName;
        const lastName = loginData.lastName;
        const phone = loginData.phone;

        // Generate user ID
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const sequence = Math.floor(Math.random() * 10000);
        const userId = `User${day}${month}${year}${sequence}`;

        // Redirect to booking page with user ID
        window.location.href = `index.html?userId=${userId}`;
    });
});

function searchUser() {
    const searchInput = document.getElementById('searchInput').value;
    console.log('ค้นหาผู้ใช้สำหรับ:', searchInput);
    // Implement search functionality here
}
