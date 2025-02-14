const themeToggler = document.querySelector(".theme-toggler");
 

// Change Theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variable');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

const containerProjects = $("#projects-wrapper");

  containerProjects.imagesLoaded(function () {
    containerProjects.masonry({
      itemSelector: ".projects-item",
      resize: true,
    });
  });
