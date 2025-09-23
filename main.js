
function getCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    console.log('DOM fully loaded and parsed.');
}

(function () {
    console.log('main.js module loaded and executed.');
    getCurrentYear();
})()