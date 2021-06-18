const contactFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-contact').value.trim();
    const email = document.querySelector('#email-contact').value.trim();
    const comment = document.querySelector('#comment-contact').value.trim();

    if (name && email && comment) {
        const response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify({ name, email, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.contact-form')
    .addEventListener('submit', contactFormHandler);