const domElement = {
    faq_items : document.getElementsByClassName("faq"),
    arrow : document.getElementsByClassName("arrow"),
    flip : document.getElementsByClassName("flip"),
    title : document.getElementsByClassName('title')
}
const loadFaq = () => {

    for (let i = 0; i < domElement.arrow.length; i++){
        domElement.arrow[i].addEventListener("click", () => {
            if (domElement.faq_items[i].style.display == "none" || domElement.faq_items[i].style.display == ""){
                domElement.faq_items[i].style.display ="block";
                domElement.title[i].style.fontWeight = "600";
                domElement.title[i].style.color = "rgb(197, 22, 22)";
                domElement.arrow[i].style.transform = "rotate(180deg)";
                domElement.flip[i].style.stroke = "rgb(197, 22, 22)";
            }
            else{
                domElement.faq_items[i].style.display ="none";
                domElement.title[i].style.fontWeight = "400";
                domElement.title[i].style.stroke = "rgb(197, 22, 22)";
                domElement.arrow[i].style.transform = "rotate(0deg)";
                domElement.flip[i].style.stroke = "#5267DF";
            }
        });
    }
}
/***loadFaq();
    const element = document.getElementById('link');
    let activeLinks = document.querySelectorAll('.feature');
    for(let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
             activeLinks[i].classList.toggle('actives');
               
        });
    }
 */
document.querySelectorAll('#link > a').forEach(b => {
    b.onclick = (e) => {
        let button = e.target;
        console.log(button)
        let wrapper = document.getElementsByClassName('feature')
        console.log(wrapper);

        wrapper.classList.toggle('actives');
    }
})   


  // Motunrayo's part
  const domElements = {
    navLink: document.querySelector('.right-nav'),
    toggleButton: document.querySelector('.nav-link-toggle'),
    inactive: document.querySelector('.inactive'),
    closeButton: document.querySelector('.close'),
    body: document.querySelector('body'),
    footerBtn: document.querySelector('.footer-btn'),
    footerEmail: document.getElementById('footer-email'),
    errorBlock: document.querySelector('.error-block')
}

const displayNav = () => {
    domElements.inactive.classList.add('active');
    domElements.body.classList.add('fit');
}

const closeNav = () => {
    domElements.inactive.classList.remove('active');
    domElements.body.classList.remove('fit');
}

const validateEmail = (e) => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (domElements.footerEmail.value === '') {
        domElements.errorBlock.classList.add('show');
        domElements.errorBlock.innerHTML = "Please enter your email address";
        e.preventDefault();
        return false;
    } else if (!reg.test(domElements.footerEmail.value.trim()) ) {
        domElements.errorBlock.classList.add('show');
        domElements.errorBlock.innerHTML = "Whoops, make sure it's an email";
        e.preventDefault();
        return false;
    } else {
        domElements.errorBlock.classList.remove('show');
        domElements.errorBlock.innerHTML = "";
        return true;
    }
}

domElements.footerBtn.addEventListener('click', validateEmail);


domElements.toggleButton.addEventListener('click', displayNav);
domElements.closeButton.addEventListener('click', closeNav);

// Motunrayo's part
  