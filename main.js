fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";
    if (page === "main") {
      renderNav();
      renderMainPage(data);
    }
    //   else if (page == "projects") {

    //     }
    else {
      renderNav();
      const p = data.projects.find((p) => p.id == projectId);
      renderProjectDetails(p);
    }
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
  main.innerHTML = renderProfile(data.profile);
  main.innerHTML += renderAbout(data.about);
  main.innerHTML += renderNews(data.news);
  main.innerHTML += renderProjects(data.projects);
}

function renderProfile(profile) {
  return `<div>
  <section class="profile">
          <img
            class="profile"
            src="${profile.photo}"
            alt="Profile Image of Aimee Hong"
          />
          <h1>${profile.name}</h1>
          <h3>${profile.majors}</h3>
          <p>${profile.university}</p>
          <p>${profile.address}</p>
          <br />
          <div class="contact">
            <ul>
              ${profile.contact.map((c) => renderContact(c)).join("")}
            </ul>
          </div>
        </section>`;
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
                  ${contact.value}</a
                >
              </li>`;
}

function renderNews(news) {
  return `<section class="news">
          <h3>News</h3>
          <table>
            ${news.map((n) => renderOnenews(n)).join("")}
          </table>
        </section> 
      </div>`;
}

function renderOnenews(news) {
  return `<tr>
              <td>${news.title}</td>
              <td>${news.date}</td>
          </tr>`;
}

function renderAbout(about) {
  return `<div>
    <section class="about">
          <h3>About</h3>
          <p>
            ${about.bio}
          </p>
        </section>`;
}
function renderProjects(projects) {
  return `
  <section class="projects">
          <h3>Projects</h3>
          <ul>
            ${projects.map((p) => renderProject(p)).join("")}
          </ul>
        </section>
      </div>`;
}

function renderProject(project) {
  return `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>`;
}

function renderProjectDetails(project) {
  const main = document.querySelector("main");
  main.innerHTML = renderProject(project);
}

function renderProjec

 <section class="project-container-page">
        <div class="project-about">
          <h1>
            <a href="https://github.com/aimeehong1/ToDoList"
              >To-Do List iOS App</a
            >
          </h1>
          <p class="project1">
            A full-stack To-Do List iOS app that can create, read, update, and
            delete entries. You can sort entries based on their name, when they
            were inputted, or its completion status to easily manage your tasks
            all in one app. This app was built from scratch using Swift and
            SwiftUI.
          </p>
        </div>
        <div class="demonstration">
          <video controls autoplay loop>
            <source
              src="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/To%20Do%20List%20App.mov?v=1729196955105"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>