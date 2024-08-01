// editBooking.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
    const userId = urlParams.get('userId');  // Assuming userId is passed for context

    const form = document.getElementById('editBookingForm');
    const resultDiv = document.getElementById('editResult');
    const updateButton = document.getElementById('updateButton');
    const cancelButton = document.getElementById('cancelBooking');

    // Load existing booking data
    loadBookingData();

    function loadBookingData() {
        // Simulate fetching booking data
        // In a real application, this would be an API call to fetch booking details based on bookingId
        const bookingData = {
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '1234567890',
            room: 'met001',
            date: '2024-08-01',
            startTime: '09:00'
        };

        document.getElementById('firstName').value = bookingData.firstName;
        document.getElementById('lastName').value = bookingData.lastName;
        document.getElementById('phoneNumber').value = bookingData.phoneNumber;
        document.getElementById('room').value = bookingData.room;
        document.getElementById('date').value = bookingData.date;
        document.getElementById('startTime').value = bookingData.startTime;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const updatedBookingData = Object.fromEntries(formData.entries());
        updatedBookingData.bookingId = bookingId; // Include bookingId for update

        // Simulate API call to update booking
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การอัปเดตสำเร็จ!</strong>
                        <p class="block sm:inline">ข้อมูลการจองได้รับการอัปเดตแล้ว</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การอัปเดตไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถอัปเดตได้ในขณะนี้</p>
                    </div>
                `;
            }
        }, 1000); // Simulate network delay
    });

    cancelButton.addEventListener('click', function() {
        // Simulate API call to cancel booking
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resultDiv.innerHTML = `
                    <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การจองถูกยกเลิก!</strong>
                        <p class="block sm:inline">การจองของคุณถูกยกเลิกแล้ว</p>
                    </div>
                `;
                form.reset();
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">การยกเลิกไม่สำเร็จ!</strong>
                        <p class="block sm:inline">ข้อผิดพลาด: ไม่สามารถยกเลิกการจองได้ในขณะนี้</p>
                    </div>
                `;
            }
        }, 1000); // Simulate network delay
    });
});
