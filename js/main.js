const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

//Only enable AOS animations if prefers-reduced-motion set to false
AOS.init({
    disable: mediaQuery.matches,
    offset: 150,
    duration: 1000,
    delay: 100,
    once: true
});

//Scroll to top
const logo = document.getElementById('logo');

logo.addEventListener('keyup', function (evt) {
    if(evt.key === 'Enter') {
        scrollTo(0,0);
    }
})

//Greeting
const today = new Date()
const curHr = today.getHours()

if (curHr < 12) {
    document.getElementById('greeting').textContent = 'Good Morning! I\'m '
} else if (curHr < 18) {
    document.getElementById('greeting').textContent = 'Good Afternoon! I\'m '
} else {
    document.getElementById('greeting').textContent = 'Good Evening! I\'m '
}

//Contact form validation
function validateForm() {
    const name = document.forms['contact-form']['name'].value;
    const email = document.forms['contact-form']['email'].value;
    const msg = document.forms['contact-form']['message'].value;

    if (name === ''){
        document.getElementById('name-error').textContent = 'You must enter a name.';
        return false;
    } else if (email === ''){
        document.getElementById('email-error').textContent = 'You must enter an email.';
        return false;
    } else if (msg === ''){
        document.getElementById('message-error').textContent = 'You must enter a message.';
        return false;
    } else {
        return true;
    }
}

const autoExpand = function(field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    const computed = window.getComputedStyle(field);

    // Calculate the height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

};

document.addEventListener('input', function(event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);