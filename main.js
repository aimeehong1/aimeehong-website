fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";
    console.log(projectId);
    if (page === "main") {
      renderNav();
      renderMainPage(data);
    } else {
      if (projectId == "projects") {
        renderNav();
        renderProjectPage(data);
      } else {
        renderNav();
        const p = data.projects.find((p) => p.id == projectId);
        renderProjectDetails(p);
      }
    }
  });

function renderNav() {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `<ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="?project=projects">Projects</a></li>
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
  main.innerHTML = renderProfile(data);
  main.innerHTML += renderAbout(data);
  
  const search = document.querySelector('.search');
  console.log(search);
  search.addEventListener("input", e => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
  });
  
  const filtered = data.news.filter(newsitem => newsitem.title.includes(value));
  console.log(filtered);
}

function renderProfile(data) {
  return `<div>
  <section class="profile">
          <img
            class="profile"
            src="${data.profile.photo}"
            alt="Profile Image of Aimee Hong"
          />
          <h1>${data.profile.name}</h1>
          <h3>${data.profile.majors}</h3>
          <p>${data.profile.university}</p>
          <p>${data.profile.address}</p>
          <br />
          <div class="contact">
            <ul>
              ${data.profile.contact.map((c) => renderContact(c)).join("")}
            </ul>
          </div>
        </section>
        ${renderNews(data.news)}</div>`;
}

function renderContact(contact) {
  return `    <li>
                ${contact.name}
                <a href=${contact.href}
                  ><img
                    class="icon"
                    src="${contact.icon_src}"
                    alt=${contact.name + "logo"}
                  />
                  ${contact.value}</a>
              </li>`;
}

function renderNews(news) {
  return `<section class="news">
          <h3>News</h3>
          <div class="search">
            <input type="search" name='news' placeholder="Search News...">
          </div>
          <table>
            ${news.map((n) => renderOnenews(n)).join("")}
          </table>
        </section>`;
}

function renderOnenews(news) {
  return `<tr>
              <td>${news.title}</td>
              <td>${news.date}</td>
          </tr>`;
}

function renderAbout(data) {
  return `<div>
    <section class="about">
          <h3>About</h3>
          <p>
            ${data.about.bio}
          </p>
        </section>
        ${renderProjects(data.projects)}
        </div>`;
}
function renderProjects(projects) {
  return `
  <section class="projects">
          <h3>Projects</h3>
          <ul>
            ${projects.map((p) => renderProject(p)).join("")}
          </ul>
        </section>`;
}

function renderProject(project) {
  return `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>`;
}

// for project list page
function renderProjectPage(data) {
  const main = document.querySelector("main");
  main.classList.remove("container");
  main.classList.add("project-container");
  main.innerHTML = `<section class="project-page">
        <h1>Projects</h1>
        <ul>
          ${data.projects.map((p) => renderProjectPageProject(p)).join("")}
        </ul>
      </section>`;
}

function renderProjectPageProject(project) {
  const p = project.materials.find((p) => p.label == "Photo");
  console.log(p.path);
  return `<div>
            <h3>${project.title}</h3>
            <p class="project-page">${project.description}</p>
            <a class="project-page" href="?project=${project.id}">
              <img
                src=${p.path}
                alt="To Do List App"
            /></a>
            <p>
              <button type="button" disabled>Swift</button>
              <button type="button" disabled>Swift UI</button>
            </p>
          </div>`;
}

// for individual project pages
function renderProjectDetails(project) {
  const main = document.querySelector("main");
  main.classList.remove("container");
  main.classList.remove("project-container");
  main.innerHTML = `<section class="project-container-page">
          <div class="project-about"> 
            ${renderProjectDetail(project)}
          </div>
          <div class="demonstration">
            ${renderProjectDemo(project)}
          </div>
          <form action=${project.link}>
            <input type="submit" value="GitHub Repo" />
          </form>
        </section>`;
}

function renderProjectDetail(project) {
  return `<h1>
            ${project.title}
          </h1> 
          <p>${project.description}</p>`;
}

function renderProjectDemo(project) {
  const p = project.materials.find((p) => p.label == "Video");

  return `<video controls autoplay loop>
            <source
              src=${p.path}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>`;
}
