window.addEventListener('load', function() {
    document.querySelector('body').classList.add('bodyPop');
    document.querySelector('.wrapper').style.display = 'none';
  });
  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", function () { sidebar.classList.toggle("active"); });
  // contact form variables
  const formV = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");
  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (formV.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");
  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
          activePageID(navigationLinks[i].id);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    });
  }
  // datail show hide icon
  let detailShowHide = document.getElementById('Detail');
  let isOpen = true;
  let iconIcon = '';
  detailShowHide.onclick = function(){
    if(isOpen){
      iconIcon = '<ion-icon name="chevron-up-outline"><i class="fa-solid fa-chevron-up"></i></ion-icon>';
    }
    else{
      iconIcon = '<ion-icon name="chevron-down"><i class="fa-solid fa-angle-down"></i></ion-icon>';
    }
    detailShowHide.innerHTML = iconIcon;
    isOpen = !isOpen;
  }
  // Disable right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }
  document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
      event.keyCode === 123 ||
      ctrlShiftKey(e, 'I') ||
      ctrlShiftKey(e, 'J') ||
      ctrlShiftKey(e, 'C') ||
      (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
      return false;
  };
  function create(tag) {
    return document.createElement(tag);
  }
  const skills = [
    {
        name: 'HTML 5',
        img: './assets/img/skills/html.webp'
    },
    {
        name: 'CSS 3',
        img: './assets/img/skills/css.webp'
    },
    {
        name: 'BOOTSTRAP 5',
        img: './assets/img/skills/bootstrap.webp'
    },
    {
        name: 'REACT JS',
        img: './assets/img/skills/reactjs.png'
    },
    {
        name: 'JAVASCRIPT',
        img: './assets/img/skills/javascript.png'
    },
    {
        name: 'WORDPRESS',
        img: './assets/img/skills/wordpress.png'
    },

    {
        name: 'WOOCOMMERCE',
        img: './assets/img/skills/woocommerce.png'
    },
    {
        name: 'SHOPIFY',
        img: './assets/img/skills/shopify.png'
    },
    {
        name: 'GIT',
        img: './assets/img/skills/git.png'
    },
    {
        name: 'GITHUB',
        img: './assets/img/skills/github.png'
    }
  ]
  let skillsDiv = document.getElementById('skillsDiv');
  function skillcard(skill) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');
    img.loading="lazy";
    img.src = skill.img;
    img.alt = skill.name;
    span.textContent = skill.name;
    div.classList.add('skill1');
    div.appendChild(img);
    div.appendChild(span);
    skillsDiv.appendChild(div);
  }
  const certificates = [
    {
        name: 'Intern',
        img: './assets/img/certificates/Intern_Certificate.png'
    },
    {
        name: 'Trainer',
        img: './assets/img/certificates/MERN_Training_Certificate.png'
    },
    {
        name: 'Digital Marketing',
        img: './assets/img/certificates/digital_marketing_google.png'
    },

  ]
  const cerDiv = document.getElementById('cerDiv');
  function certficatesDiv(cert) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement('a');
    div.classList.add('cert');
    img.loading="lazy";
    img.src = cert.img;
    img.alt = cert.name;
    img.classList.add('certImg')
    a.href = cert.img;
    a.target = '_blank'
    div.appendChild(img);
    a.appendChild(div);
    cerDiv.appendChild(a);
  }
  const projects = [
    {
        name: "Digital Tank",
        img: "./assets/img/projects/digitaltank.jpg",
        live: "https://digitaltank.in/"
    },
    {
        name: 'Brothers Machinary',
        img: './assets/img/projects/brother.jpg',
        live: 'https://brothersmachinery.in/'
    },
    {
        name: 'Doric Architect',
        img: './assets/img/projects/doric.jpg',
        live: 'https://doricarchitect.com/'
    },
    {
        name: 'Cash In Money',
        img: './assets/img/projects/cashinmoney.jpg',
        live: 'http://cashinmoney.co.in/'
    },
    {
        name: 'Prestige Buildcom',
        img: './assets/img/projects/prestige.jpg',
        live: 'https://prestigebuildcom.com/'
    },
    {
        name: 'Prago Store',
        img: './assets/img/projects/prago.jpg',
        live: 'https://prago.store/'
    },
    {
        name: 'Swariya Events',
        img: './assets/img/projects/sawariyaevent.jpg',
        live: 'https://sawariyaevents.com/'
    },
    {
        name: 'Onekey Interior',
        img: './assets/img/projects/onekeyinterior.jpg',
        live: 'https://onekeyinterior.com/'
    },
    {
        name: 'Aru Homes',
        img: './assets/img/projects/aruhomes.jpg',
        live: 'https://aruhomesolutions.com/'
    },
    {
        name: 'Sunwood Interior',
        img: './assets/img/projects/sunwood.jpg',
        live: 'https://sunwoodinteriors.com/'
    },
  ]
  let pNumber = document.getElementById('projectCount');
  pNumber.textContent = projects.length
  const projectD = document.getElementById('projectDiv');
  function projectDiv(project) {
    let pDiv = create('div');
    let newPage = '';
    if (project.code !== '#') {
        newPage = target = "_blank";
    }
    pDiv.innerHTML = `
    <div class="project-item " >
    <a href=${project.live} target="_blank">
    <div class="project-img">
      <div class="icon-hover">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon> 
          </div>
      </div>
      <img src=${project.img} alt=${project.name} loading="lazy">
    </div>
     </a>
    <h3 class="project-title">${project.name}</h3>
    <!-- <p class="project-category">Web development</p> -->
  </div>   
    `
    projectD.appendChild(pDiv);
  }
  const mapIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7165.156426511808!2d85.39359705000001!3d26.1126838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11ab3993acc1%3A0xca6fa0a49c2ec47f!2sMahammadpur%20Kazi%2C%20Mithanpura%2C%20Muzaffarpur%2C%20Bihar%20842002!5e0!3m2!1sen!2sin!4v1722928950573!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  
                let resumePage = false;
                let projectsPage = false;
                let contactPage = false;
  function activePageID(params) {
    if (!resumePage) {
      skills.forEach(skill => {
        skillcard(skill);
      });
      certificates.forEach(cer => {
        certficatesDiv(cer);
      });
      resumePage = true;
    }
    if (!projectsPage) {
      projects.forEach(project => {
        projectDiv(project);
      });
      projectsPage = true;
    }
    if (!contactPage) {
      document.getElementById('mapDiv').innerHTML = mapIframe;
      contactPage = true;
    }
  }