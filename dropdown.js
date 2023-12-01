window.onclick = function(event) {
    if (!event.target.matches('.adresse-content') && !event.target.matches('#tier_address')) {
        const container = document.querySelector('.adresse-content');
        container.innerHTML = '';
    }
}

makeElement(50);

function makeElement(nbElement) {
    const dropdown = document.querySelector('.dropdown-item');
    console.log(dropdown);

    for (let i = 0; i < nbElement; i++) {
        const span = document.createElement('span');
        span.setAttribute('onclick','selectElement(this);')
        span.innerText = i + 'element'+ Math.floor(Math.random() * 500);

        dropdown.appendChild(span);
    }
}

function showDropdown() {
    document.querySelector('.dropdown-content').classList.toggle("show");
}

function filterElement() {
    const input = document.querySelector("#searchElement");
    const filter = input.value.toUpperCase();

    const element = document.querySelectorAll(".dropdown-item > span");
    element.forEach((e) => {
        const valueSpan = e.innerText;
        if (valueSpan.toUpperCase().indexOf(filter) > -1) {
            e.style.display = "";
        } else {
            e.style.display = "none";
        }
    })
}

function selectElement(element) {
    const title = document.querySelector('.dropdown-title > span');
    title.innerText = element.innerText;
}
