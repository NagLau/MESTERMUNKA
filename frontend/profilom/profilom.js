document.addEventListener("DOMContentLoaded", function() {
    let userPackage = localStorage.getItem("userPackage") || "Új tag"; 
    
    let headers = document.querySelectorAll("th");
    headers.forEach((header, index) => {
        if (header.textContent.trim() === userPackage) {
            document.querySelectorAll("tr").forEach(row => {
                let cell = row.children[index];
                if (cell) cell.classList.add("highlight");
            });
        }
    });
});
function openModal(packageName, price) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("package-name").innerText = packageName;
    document.getElementById("package-price").innerText = "Ár: " + price + " EUR";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function purchasePackage() {
    let packageName = document.getElementById("package-name").innerText;
    let storeCard = document.getElementById("store-card").checked;
    let transactionStatus = "Tranzakció elutasítva";
    let cardStorageStatus = "A kártya adatait nem tároltuk el";
    if (storeCard) {
        transactionStatus = "Sikeres vásárlás";
        cardStorageStatus = "A kártya adatait eltároltuk!";
    }
    localStorage.setItem("userPackage", packageName);
    document.getElementById("transaction-status").innerText = transactionStatus;
    document.getElementById("card-storage-status").innerText = cardStorageStatus;
    document.getElementById("transaction-modal").style.display = "flex";
}
function closeTransactionModal() {
    document.getElementById("transaction-modal").style.display = "none";
}
function toggleCVV() {
    const cvvInput = document.getElementById('cvv');
    const currentType = cvvInput.type;
    cvvInput.type = currentType === 'password' ? 'text' : 'password';
}
document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    const expiryDateInput = document.getElementById("expiry-date");
    const dateError = document.getElementById("date-error");
    expiryDateInput.setAttribute("min", formattedDate);
    expiryDateInput.addEventListener("change", function() {
        const selectedDate = new Date(expiryDateInput.value);
        if (selectedDate < today) {
            dateError.style.display = "inline";
            expiryDateInput.setCustomValidity("A dátumnak nem lehet régebbinek lennie a mai napnál.");
        } else {
            dateError.style.display = "none";
            expiryDateInput.setCustomValidity(""); 
        }
    });
});
