var click = document.getElementsByClassName("clicks")
var arrow = document.getElementsByClassName("arrow");
var faq_items = document.getElementsByClassName("faq");

function add_Event(){
    var click = document.getElementsByClassName("clicks")
    var arrow = document.getElementsByClassName("arrow");
    var flip = document.getElementsByClassName("flip");
    var title = document.getElementsByClassName('title');
    console.log(arrow.firstChildElement)
    //var path = document.getElementsByTagName("path");
    for (let i = 0; i<arrow.length; i++){
        click[i].addEventListener("click", function(){
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
  