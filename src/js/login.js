// login.js
/*
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
}*/


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const resultDiv = document.getElementById('loginResult');
    let submitCount = 0;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const loginData = Object.fromEntries(formData.entries());

        // Check if any fields are empty
        const requiredFields = ['firstName', 'lastName', 'phone'];
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            const inputField = document.getElementById(field);
            if (!loginData[field]) {
                inputField.classList.add('border-red-500');
                allFieldsFilled = false;
            } else {
                inputField.classList.remove('border-red-500');
            }
        });

        if (!allFieldsFilled) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การเข้าสู่ระบบไม่สำเร็จ!</strong>
                    <p class="block sm:inline">กรุณากรอกข้อมูลให้ครบทุกช่อง</p>
                </div>
            `;
            return;
        }

        submitCount++;
        const today = new Date();
        const dateStr = `${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}`;
        const userId = `User${dateStr}${submitCount}`;

        resultDiv.innerHTML = `
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">เข้าสู่ระบบสำเร็จ!</strong>
                <p class="block sm:inline">รหัสผู้ใช้: ${userId}</p>
            </div>
        `;

        setTimeout(() => {
            window.location.href = `index.html?userId=${userId}`;
        }, 2000);
    });
});

// Function to search for booking and redirect to the edit page
function searchBooking() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const userId = sessionStorage.getItem('userId'); // Get user ID from session storage

    if (!searchInput) {
        alert('กรุณากรอกข้อมูลในการค้นหา');
        return;
    }

    // Simulate searching for the booking (in a real application, you would query the database)
    // Redirect to the edit booking page with search input and user ID as query parameters
    window.location.href = `edit.html?bookingId=${searchInput}&userId=${userId}`;

}

// login.js
/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginResult = document.getElementById('loginResult');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const loginData = Object.fromEntries(formData.entries());

        // Generate a user ID (for demonstration purposes)
        const userId = `User${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 1000)}`;

        loginResult.innerHTML = `
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">เข้าสู่ระบบสำเร็จ!</strong>
                <p class="block sm:inline">ID ของคุณ: ${userId}</p>
            </div>
        `;

        // Store user ID for further use (e.g., in localStorage or sessionStorage)
        sessionStorage.setItem('userId', userId);
    });
});

// Function to search for booking and redirect to the edit page
function searchBooking() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const userId = sessionStorage.getItem('userId'); // Get user ID from session storage

    if (!searchInput) {
        alert('กรุณากรอกข้อมูลในการค้นหา');
        return;
    }

    // Simulate searching for the booking (in a real application, you would query the database)
    // Redirect to the edit booking page with search input and user ID as query parameters
    window.location.href = `editBooking.html?bookingId=${searchInput}&userId=${userId}`;
}
*/
