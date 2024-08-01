/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const startTimeInput = document.getElementById('startTime');
    const bookingPeriodDisplay = document.getElementById('bookingPeriod');
    const resultDiv = document.getElementById('bookingResult');

    startTimeInput.addEventListener('change', updateBookingPeriod);

    function updateBookingPeriod() {
        const startTime = new Date(`2000-01-01T${startTimeInput.value}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour
        
        if (endTime.getHours() >= 18) {
            bookingPeriodDisplay.textContent = 'เวลาจองไม่ถูกต้อง (เกิน 18:00)';
            bookingPeriodDisplay.classList.add('text-red-500');
        } else {
            const endTimeString = endTime.toTimeString().slice(0, 5);
            bookingPeriodDisplay.textContent = `${startTimeInput.value} - ${endTimeString}`;
            bookingPeriodDisplay.classList.remove('text-red-500');
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());

        // Generate a random 6-digit code
        const accessCode = Math.floor(100000 + Math.random() * 900000);

        fetch('/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองสำเร็จ!</strong>
                        <p class="block sm:inline">ห้อง: ${bookingData.room}</p>
                        <p class="block sm:inline">วันที่: ${bookingData.date}</p>
                        <p class="block sm:inline">เวลา: ${bookingPeriodDisplay.textContent}</p>
                        <p class="block sm:inline">รหัสเข้าห้อง: ${accessCode}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                        <p class="block sm:inline">${data.message}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">เกิดข้อผิดพลาด!</strong>
                    <p class="block sm:inline">กรุณาลองใหม่อีกครั้ง</p>
                </div>
            `;
        });
    });
});
*/

/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const startTimeInput = document.getElementById('startTime');
    const bookingPeriodDisplay = document.getElementById('bookingPeriod');
    const resultDiv = document.getElementById('bookingResult');

    // Update booking period based on start time input change
    startTimeInput.addEventListener('change', updateBookingPeriod);

    function updateBookingPeriod() {
        const startTime = new Date(`2000-01-01T${startTimeInput.value}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour

        if (endTime.getHours() >= 18) {
            bookingPeriodDisplay.textContent = 'เวลาจองไม่ถูกต้อง (เกิน 18:00)';
            bookingPeriodDisplay.classList.add('text-red-500');
        } else {
            const endTimeString = endTime.toTimeString().slice(0, 5);
            bookingPeriodDisplay.textContent = `${startTimeInput.value} - ${endTimeString}`;
            bookingPeriodDisplay.classList.remove('text-red-500');
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());

        // Generate a random 6-digit code
        const accessCode = Math.floor(100000 + Math.random() * 900000);

        // Simulate server response
        setTimeout(() => {
            // Simulate success response
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองสำเร็จ!</strong>
                        <p class="block sm:inline">ห้อง: ${bookingData.room}</p>
                        <p class="block sm:inline">วันที่: ${bookingData.date}</p>
                        <p class="block sm:inline">เวลา: ${bookingPeriodDisplay.textContent}</p>
                        <p class="block sm:inline">รหัสเข้าห้อง: ${accessCode}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองได้ในขณะนี้</p>
                    </div>
                `;
            }
        }, 1000); // Simulate network delay
    });
});*/
// app.js
/*
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const userIdDisplay = document.getElementById('userIdDisplay');
    userIdDisplay.textContent = `User: ${userId}`;

    const form = document.getElementById('bookingForm');
    const startTimeInput = document.getElementById('startTime');
    const dateInput = document.getElementById('date');
    const roomInput = document.getElementById('room');
    const bookingPeriodDisplay = document.getElementById('bookingPeriod');
    const resultDiv = document.getElementById('bookingResult');

    // Update booking period based on start time input change
    startTimeInput.addEventListener('change', updateBookingPeriod);

    function updateBookingPeriod() {
        const startTime = new Date(`2000-01-01T${startTimeInput.value}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour

        if (endTime.getHours() >= 18) {
            bookingPeriodDisplay.textContent = 'เวลาจองไม่ถูกต้อง (เกิน 18:00)';
            bookingPeriodDisplay.classList.add('text-red-500');
        } else {
            const endTimeString = endTime.toTimeString().slice(0, 5);
            bookingPeriodDisplay.textContent = `${startTimeInput.value} - ${endTimeString}`;
            bookingPeriodDisplay.classList.remove('text-red-500');
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());
        bookingData.userId = userId;

        // Check if any fields are empty
        const requiredFields = [roomInput, dateInput, startTimeInput];
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                field.classList.add('border-red-500');
                allFieldsFilled = false;
            } else {
                field.classList.remove('border-red-500');
            }
        });

        if (!allFieldsFilled) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">กรุณากรอกข้อมูลให้ครบทุกช่อง</p>
                </div>
            `;
            return;
        }

        // Check if the selected date is in the past
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองย้อนหลังได้</p>
                </div>`;
            return;
        }

        // Generate a random 6-digit code
        const accessCode = Math.floor(100000 + Math.random() * 900000);

        // Simulate server response
        setTimeout(() => {
            // Simulate success response
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองสำเร็จ!</strong>
                        <p class="block sm:inline">ห้อง: ${bookingData.room}</p>
                        <p class="block sm:inline">วันที่: ${bookingData.date}</p>
                        <p class="block sm:inline">เวลา: ${bookingPeriodDisplay.textContent} โมง</p>
                        <p class="block sm:inline">รหัสจองห้อง: ${accessCode}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองได้ในขณะนี้</p>
                    </div>
                `;
            }
        }, 1000); // Simulate network delay
    });
});

function searchBooking() {
    const searchInput = document.getElementById('searchInput').value;
    console.log('ค้นหาการจองสำหรับ:', searchInput);
    // Implement search functionality here
}
*/
// booking.js
/*
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const userIdDisplay = document.getElementById('userIdDisplay');
    userIdDisplay.textContent = `ID: ${userId}`;

    const form = document.getElementById('bookingForm');
    const startTimeInput = document.getElementById('startTime');
    const dateInput = document.getElementById('date');
    const roomInput = document.getElementById('room');
    const bookingPeriodDisplay = document.getElementById('bookingPeriod');
    const resultDiv = document.getElementById('bookingResult');
    const cancelButton = document.getElementById('cancelButton');

    // Update booking period based on start time input change
    startTimeInput.addEventListener('change', updateBookingPeriod);

    function updateBookingPeriod() {
        const startTime = new Date(`2000-01-01T${startTimeInput.value}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour

        if (endTime.getHours() >= 18) {
            bookingPeriodDisplay.textContent = 'เวลาจองไม่ถูกต้อง (เกิน 18:00)';
            bookingPeriodDisplay.classList.add('text-red-500');
        } else {
            const endTimeString = endTime.toTimeString().slice(0, 5);
            bookingPeriodDisplay.textContent = `${startTimeInput.value} - ${endTimeString}`;
            bookingPeriodDisplay.classList.remove('text-red-500');
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());
        bookingData.userId = userId;

        // Check if any fields are empty
        const requiredFields = [roomInput, dateInput, startTimeInput];
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                field.classList.add('border-red-500');
                allFieldsFilled = false;
            } else {
                field.classList.remove('border-red-500');
            }
        });

        if (!allFieldsFilled) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">กรุณากรอกข้อมูลให้ครบทุกช่อง</p>
                </div>
            `;
            return;
        }

        // Check if the selected date is in the past
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองย้อนหลังได้</p>
                </div>
            `;
            return;
        }

        // Generate a random 6-digit code
        const accessCode = Math.floor(100000 + Math.random() * 900000);

        // Simulate server response
        setTimeout(() => {
            // Simulate success response
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองสำเร็จ!</strong>
                        <p class="block sm:inline">ห้อง: ${bookingData.room}</p>
                        <p class="block sm:inline">วันที่: ${bookingData.date}</p>
                        <p class="block sm:inline">เวลา: ${bookingPeriodDisplay.textContent} โมง</p>
                        <p class="block sm:inline">รหัสจองห้อง: ${accessCode}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองได้ในขณะนี้</p>
                    </div>`;
            }
        }, 1000); // Simulate network delay
    });

    // Handle booking cancellation
    cancelButton.addEventListener('click', function() {
        form.reset();
        bookingPeriodDisplay.textContent = '';
        resultDiv.innerHTML = `
            <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">การจองถูกยกเลิก!</strong>
                <p class="block sm:inline">คุณได้ยกเลิกการจองแล้ว</p>
            </div>
        `;
    });
});

function searchBooking() {
    const searchInput = document.getElementById('searchInput').value;
    console.log('ค้นหาการจองสำหรับ:', searchInput);
    // Implement search functionality here
}
*/

// app.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const userIdDisplay = document.getElementById('userIdDisplay');
    userIdDisplay.textContent = `ID: ${userId}`;

    const form = document.getElementById('bookingForm');
    const startTimeInput = document.getElementById('startTime');
    const dateInput = document.getElementById('date');
    const roomInput = document.getElementById('room');
    const bookingPeriodDisplay = document.getElementById('bookingPeriod');
    const resultDiv = document.getElementById('bookingResult');
    const cancelButton = document.getElementById('cancelButton');

    // Update booking period based on start time input change
    startTimeInput.addEventListener('change', updateBookingPeriod);

    function updateBookingPeriod() {
        const startTime = new Date(`2000-01-01T${startTimeInput.value}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour

        if (endTime.getHours() >= 18) {
            bookingPeriodDisplay.textContent = 'เวลาจองไม่ถูกต้อง (เกิน 18:00)';
            bookingPeriodDisplay.classList.add('text-red-500');
        } else {
            const endTimeString = endTime.toTimeString().slice(0, 5);
            bookingPeriodDisplay.textContent = `${startTimeInput.value} - ${endTimeString}`;
            bookingPeriodDisplay.classList.remove('text-red-500');
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());
        bookingData.userId = userId;

        // Check if any fields are empty
        const requiredFields = [roomInput, dateInput, startTimeInput];
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                field.classList.add('border-red-500');
                allFieldsFilled = false;
            } else {
                field.classList.remove('border-red-500');
            }
        });

        if (!allFieldsFilled) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">กรุณากรอกข้อมูลให้ครบทุกช่อง</p>
                </div>
            `;
            return;
        }

        // Check if the selected date is in the past
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            resultDiv.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                    <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองย้อนหลังได้</p>
                </div>
            `;
            return;
        }

        // Generate a random 6-digit code
        const accessCode = Math.floor(100000 + Math.random() * 900000);

        // Simulate server response
        setTimeout(() => {
            // Simulate success response
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองสำเร็จ!</strong>
                        <p class="block sm:inline">ห้อง: ${bookingData.room}</p>
                        <p class="block sm:inline">วันที่: ${bookingData.date}</p>
                        <p class="block sm:inline">เวลา: ${bookingPeriodDisplay.textContent} โมง</p>
                        <p class="block sm:inline">รหัสจองห้อง: ${accessCode}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถจองได้ในขณะนี้</p>
                    </div>`;
            }
        }, 1000); // Simulate network delay
    });

    // Handle booking cancellation
    cancelButton.addEventListener('click', function() {
        form.reset();
        bookingPeriodDisplay.textContent = '';
        resultDiv.innerHTML = `
            <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">การจองถูกยกเลิก!</strong>
                <p class="block sm:inline">คุณได้ยกเลิกการจองแล้ว</p>
            </div>
        `;
    });
});

function searchBooking() {
    const searchInput = document.getElementById('searchInput').value;
    const userId = new URLSearchParams(window.location.search).get('userId');

    if (!searchInput.trim()) {
        alert('กรุณากรอกข้อมูลการค้นหา');
        return;
    }

    // Redirect to the edit booking page with the search query
    window.location.href = `edit.html?bookingId=${searchInput}&userId=${userId}`;
}
