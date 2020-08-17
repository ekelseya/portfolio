AOS.init({
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
