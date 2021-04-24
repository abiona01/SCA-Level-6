var click = document.getElementsByClassName("clicks")
var arrow = document.getElementsByClassName("arrow");
var faq_items = document.getElementsByClassName("faq");

function add_Event(){

    var arrow = document.getElementsByClassName("arrow");
    var flip = document.getElementsByClassName("flip");
    var title = document.getElementsByClassName('title');
    for (let i = 0; i<arrow.length; i++){
        arrow[i].addEventListener("click", function(){
            if (faq_items[i].style.display == "none"){
                faq_items[i].style.display ="block";
                title[i].style.fontWeight = "600";
                title[i].style.color = "rgb(197, 22, 22)";
                arrow[i].style.transform = "rotate(180deg)";
                flip[i].style.stroke = "rgb(197, 22, 22)";
            }
            else{
                faq_items[i].style.display ="none";
                title[i].style.fontWeight = "400";
                title[i].style.stroke = "rgb(197, 22, 22)";
                arrow[i].style.transform = "rotate(0deg)";
                flip[i].style.stroke = "#5267DF";
            }
        });
    }
};


window.onload = add_Event;


function onLinkClick(event) {
    let activeLinks = document.querySelectorAll('.actives');
    
    //deactivate existing active tab and panel
    for( let i = 0; i < activeLinks.length; i++) {
    activeLinks[i].className = activeLinks[i].className.replace('actives', '');
    }
    
    activeLinks.forEach(function(link) {
      link.className = link.className.replace('actives', '');
    });
    
    // activate new tab and panel
    event.target.parentElement.className += ' actives';
    document.getElementById(event.target.href.split('#')[1]).className += ' actives';
  }
  
  const element = document.getElementById('links-tab');
  
  element.addEventListener('click', onLinkClick, false);

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
  