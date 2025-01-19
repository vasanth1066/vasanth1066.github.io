$(window).on('load', function() {
   setTimeout(() => {
    $('#preloader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
    });
   }, 1000);
});
$(document).ready(function () {
    showNavbar()
    $(window).on('scroll', function() {  
        showNavbar()
    });
    $('nav a').on('click', function(event) {
        event.preventDefault(); 
        
        const targetId = $(this).attr('href');
        const targetOffset = $(targetId).offset().top - 70;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600);
        closeNav()
    });
});
function showNavbar(){
    if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('bg-scrolled');
    } else {
        $('#navbar').removeClass('bg-scrolled');
    }
}
const navBar = document.querySelector(".nav-bar");
const backdrop = document.querySelector(".backdrop");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

function openNav() {
    navBar.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeNav() {
    navBar.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("no-scroll");
}


toggleBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
backdrop.addEventListener("click", closeNav);

// end 


// skills dynamic div start

const skillsData = [
    { name: "HTML", image: "images/skills/html.svg", proficiency: 90 },
    { name: "CSS", image: "images/skills/css.svg", proficiency: 85 },
    { name: "JAVASCRIPT", image: "images/skills/javascript.svg", proficiency: 80 },
    { name: "BOOTSTRAP", image: "images/skills/bootstrap.svg", proficiency: 90 },
    { name: "MUI", image: "images/skills/material-ui.svg", proficiency: 90 },
    { name: "REACT", image: "images/skills/react.svg", proficiency: 90 },
    { name: "REDUX", image: "images/skills/redux.svg", proficiency: 90 }, 
    { name: "NODE JS", image: "images/skills/node-js.svg", proficiency: 30 },
    { name: "MY SQL", image: "images/skills/mysql.svg", proficiency: 80 },
    { name: "JAVA", image: "images/skills/java.svg", proficiency: 70 },
    { name: "MONGO DB", image: "images/skills/mongo.svg", proficiency: 30 },
  ];
  
  function appendSkillsSection() {
    const container = document.getElementById('skills-section').querySelector('.row.justify-content-center');
  
    skillsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-8 col-md-4 col-lg-3 border py-2 m-1';
  
      card.innerHTML = `
        <div class="row">
          <div class="col-3">
            <img src="${item.image}" alt="${item.name}" width="50" class="center-img-auto">
          </div>
          <div class="col-9">
            <p>${item.name}</p>
            <div class="progress height5px">
              <div class="progress-bar theme-bg-color" role="progressbar" style="width: ${item.proficiency}%" aria-valuenow="${item.proficiency}"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  appendSkillsSection();

//   skills dynamic div end

//  what i do dynamic div start

  const whatidoData = [
    {name: 'Web Development', image: 'images/web_dev.svg', desc: 'Web development involves creating and maintaining websites, ensuring they are user-friendly and visually appealing. It combines coding, design, and problem-solving skills to deliver an engaging online experience.'},
    {name: 'Ui Development', image: 'images/ui_dev.svg', desc: 'Ui development focuses on designing and implementing the visual elements of a software application, ensuring an intuitive and engaging user experience. It involves creating layouts, selecting color schemes.'},
    {name: 'Third-Party Integration', image: 'images/game.svg', desc: 'Third-party integration, such as payment gateways, allows applications to securely process transactions and facilitate online payments. This enables businesses to streamline their checkout processes.'}
  ]
  function appendWhatIDoSection() {
    const container = document.getElementById('whatido-section').querySelector('.row.justify-content-center');

    whatidoData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-8 col-md-5 col-lg-3 border p-0 p-4 m-1';

      card.innerHTML = `
          <img src="${item.image}" alt="" class="center-img-auto mb-3" width="100">
          <h3 class="mb-3">${item.name}</h3>
          <p>${item.desc}</p>
      `;

      container.appendChild(card);
    });
  }

  appendWhatIDoSection()
//  what i do dynamic div end


function redirectToEmail(){
    validation = 0
    $(".form-values").removeClass("border border-danger");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();
    if(name == ""){
        $("#name").addClass("border border-danger");
        validation = 1
    }
    if(email == ""){
        $("#email").addClass("border border-danger");
        validation = 1
    }
    if(phone == ""){
        $("#phone").addClass("border border-danger");
        validation = 1
    }
    if(message == ""){
        $("#message").addClass("border border-danger");
        validation = 1
    }
    if(validation == 1){
        return false;
    }

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPhone = encodeURIComponent(phone);
    const encodedMessage = encodeURIComponent(message);

    const emailSubject = 'Contact Form Submission';
    const emailBody = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedPhone}%0AMessage: ${encodedMessage}`;
    const mailtoURL = `mailto:sutharsanan100@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    window.location.href = mailtoURL;
}

document.getElementById("current-year").textContent = new Date().getFullYear();
