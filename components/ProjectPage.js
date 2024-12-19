export default function renderProjectPage(data) {
  const main = document.querySelector("main");
  main.classList.remove("container");
  main.classList.add("project-container");
  main.innerHTML = `<section class="project-page">
        <h1>Projects</h1>
        <div class="search" id="projects">
          <input type="search" name='news' placeholder="Search Projects...">
        </div>
        <ul>
          ${data.projects.map((p) => renderProjectPageProject(p)).join("")}
        </ul>
      </section>`;
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