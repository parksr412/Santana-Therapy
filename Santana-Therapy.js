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

function observerCallback(entries){

entries.forEach((entry)=>{
    if (entry.isIntersecting){
        entry.target.classList.add("activeAnimate")
    }
})
}
const animateTargets = document.querySelectorAll(".willAnimate");
const observer = new IntersectionObserver(observerCallback)
animateTargets.forEach((target)=>{
    observer.observe(target)
})



// const nav = document.querySelector('#stickynav');
// const navTop = nav.offsetTop;

// function stickyNavigation() {
//     if (window.scrollY > navTop) {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('fixed-nav');
//         }
//     }


// window.addEventListener('scroll', stickyNavigation);
