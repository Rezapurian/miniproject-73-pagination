let links = document.querySelectorAll(".link");
let prevNext = document.querySelectorAll(".prev-next");
let currentValue = 0;


links.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
        currentValue = numIndex;
    });
});

prevNext.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        currentValue += e.target.id === "next" ? 1 : -1;
        if (currentValue < 0) {
            currentValue = 0;
        } else if (currentValue >= links.length) {
            currentValue = links.length - 1;
        }        
        links.forEach((link, index) => {
        link.classList.toggle("active", index === currentValue);
        });
    });
});


