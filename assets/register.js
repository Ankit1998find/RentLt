document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    const response = await fetch('https://rent-lt-backend.vercel.app/api/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });

    if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Failed to send message.');
    }
});