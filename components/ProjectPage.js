export default function renderProjectPage(data) {
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