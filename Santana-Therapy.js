const btns = document.querySelectorAll('.tab-btn');
const box = document.querySelector('.tab-box');
const articles = document.querySelectorAll('.box-content');


box.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function (article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});