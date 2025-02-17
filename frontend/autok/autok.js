document.addEventListener('DOMContentLoaded', function () {
    const inquiryButtons = document.querySelectorAll('.card-footer button');
    inquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const adTitle = button.closest('.card').querySelector('h3').innerText;
            const email = prompt("Add meg az e-mailedet!");
            if (!email) {
                alert("Kérlek add meg az e-mail címed!");
                return;
            }
            const mailtoLink = `mailto:driveus@gmail.comsubject=Érdeklődés: ${adTitle}&body=Érdeklődő: ${email}`;
            window.location.href = mailtoLink;  
        });
    });
});
