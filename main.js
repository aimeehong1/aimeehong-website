fetch("data.json")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);

    renderNav();
    const main = document.querySelector("main");
    main.innerHTML = renderProfile(data.about);
  });


function renderNav() {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `[all the html for nav bar here]`;
  
  
}

function renderProfile(about) {
  
}