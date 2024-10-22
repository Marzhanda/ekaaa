// Fungsi untuk mengganti teks
function changeText() {
    const biodata = document.querySelector('h2');
    biodata.textContent = 'PROFILE MARZHANDA EKA DYANITA (Diperbarui)';
}

// Fungsi untuk mode gelap
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}