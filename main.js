fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    renderNav();
    renderMainPage(data);
  });

function renderNav() {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `<ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li>
            <a
              href="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/Hong%20Technical%20Resume.pdf?v=1729235965831"
              >Resume</a
            >
          </li>
        </ul>`;
}

function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderAbout(data.about);
  main.innerHTML += renderNews(data.news);
  // main.innerHTML += renderProjects(data.projects);
}

function renderProfile(profile) {}

function renderNews(news) {
  return `<section class="news">
          <h3>News</h3>
          <table>
            ${}
          </table>
        </section>` 
}

function renderOnenews(news) { 
  
}

function renderAbout(about) {
  return `<section class="about">
          <h3>About</h3>
          <p>
            ${about.bio}
          </p>
        </section>`;
}

// function renderProjects(projects) {
//   return `
//   <section id="projects">
//     <h2 class="title">Projects</h2>
//       <div>
//         <ul>
//           ${projects.map((p) => renderProject(p)).join("")}
//         </ul>
//       </div>
//   </section>`;
// }

// function renderProject(project) {
//   return `
//   <li>
//     <strong><a href="?project=${project.id}">${project.title}</a></strong>
//     <p>${project.description}</p>
//   </li>`;
// }
