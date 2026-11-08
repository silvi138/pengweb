// time
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    if (clockElement && dateElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('id-ID', options);
    }
}

setInterval(updateClock, 1000);
updateClock();

// let's be friends
function handleLetsBeFriends(e) {
    e.preventDefault();
    alert('Yey new fwends!');
    e.target.reset();
}

// contact
function handleContact(e) {
    e.preventDefault();
    alert('Done!');
    e.target.reset();
}

// article
function readArticle(title, content) {
    alert(`Read Article: ${title}\n\n${content}`);
}