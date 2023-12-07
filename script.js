const faqs = document.querySelectorAll(".hero__faq-box");
const faqs_answers = document.querySelectorAll(".hero__faq-answer");
const button = document.querySelectorAll(".hero__faq-btn");

faqs.forEach((e, i) => {
    e.addEventListener('click', () => {
        if(faqs_answers[i].style.height == "0px") {
            faqs_answers[i].style.height = "auto";
            button[i].src = "assets/images/icon-minus.svg"
        }
        else{
            faqs_answers[i].style.height = 0;
            button[i].src = "assets/images/icon-plus.svg"
        }
    })
})