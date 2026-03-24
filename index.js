let attendeesCount = 0;

function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.style.width = (menu.style.width === "100%") ? "0%" : "100%";
}

function recordInvitation() {
    alert("Invitation has been recorded! 🌸");
    attendeesCount++;
    document.getElementById("count").innerText = attendeesCount;
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") document.getElementById("navMenu").style.width = "0%";
});