fetch("data.json")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);

    renderNav();
    const main = document.querySelector("main");
    // main.innerHTML = renderProfile(data.about);
  });

function renderNav() {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `<nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li>
            <a
              href="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/Hong%20Technical%20Resume.pdf?v=1729235965831"
              >Resume</a
            >
          </li>
        </ul>
      </nav>`;
}

// function renderProfile(about) {

// }
