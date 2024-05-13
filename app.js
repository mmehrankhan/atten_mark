// script.js
const attendanceHistory = [];

document.getElementById('mark-attendance').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }

    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    let attendanceStatus;
    if (hour < 9 || (hour === 9 && minute <= 30)) {
        attendanceStatus = 'You are on time!';
    } else {
        attendanceStatus = 'You are late!';
    }

    attendanceHistory.push({ name, attendanceStatus, timestamp: currentTime.toLocaleTimeString() });
    document.getElementById('attendance-status').innerHTML = attendanceStatus;

    const historyHTML = attendanceHistory.map((entry) => {
        return `<p>${entry.name} - ${entry.attendanceStatus} at ${entry.timestamp}</p>`;
    }).join('');
    document.getElementById('attendance-history').innerHTML = historyHTML;
});