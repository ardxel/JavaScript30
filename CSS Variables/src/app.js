const form = document.forms[0];

const spacing = form.spacing;
const blur = form.blur;
const color = form.color;

const imgDiv = document.body.querySelector('#container__img')
const jsWord = document.body.querySelector('#JS')
spacing.addEventListener('input', function() {
    imgDiv.style.borderWidth = this.value+'px';
})

blur.addEventListener('input', function() {
    imgDiv.style.filter = `blur(${this.value}px)`;
})

color.addEventListener('change', function() {
    imgDiv.style.borderColor = this.value;
    jsWord.style.color = this.value;
})