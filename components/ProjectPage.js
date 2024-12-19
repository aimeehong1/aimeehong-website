import {renderProject} from "./Projects.js"

export default function renderProjectPage(data) {
  const main = document.querySelector("main");
  main.classList.remove("container");
  main.classList.add("project-container");
  main.innerHTML = `<section class="project-page">
        <h1>Projects</h1>
        <div class="search" id="projects">
          <input type="search" name='projects' placeholder="Search Projects...">
        </div>
        <ul class="projectlist">
          ${data.projects.map((p) => renderProjectPageProject(p)).join("")}
        </ul>
      </section>`;
  
  const searchProject = document.querySelector("#projects.search");
  console.log(searchProject);
  searchProject.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value;

    const filtered = data.projects.filter((projectitem) =>
      projectitem.title.toLowerCase().includes(value.toLowerCase()) ||
      projectitem.description.toLowerCase().includes(value.toLowerCase())
    );

    console.log("filtered=", filtered);

    const list = document.querySelector(".projectlist");
    console.log("list is", list);
    list.innerHTML = filtered
      .map((newsitem) => renderProject(newsitem))
      .join("");
  });
}
function renderProjectPageProject(project) {
  const p = project.materials.find((p) => p.label == "Photo");
  console.log(p.path);
  return `<div class="project">
            <h3>${project.title}</h3>
            <p class="project-page">${project.description}</p>
            <a class="project-page" href="?project=${project.id}">
              <img
                src=${p.path}
                alt=${project.id}
            /></a>
            <p>
              ${project.tags.map((t) => renderProjectTag(t)).join("")}
            </p>
          </div>`;
}

function renderProjectTag(tag) {
  return `<button type="button" disabled>${tag}</button>`
}