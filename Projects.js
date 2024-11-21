export default function renderProjects(projects) {
  return `
  <section class="projects">
          <h3>Projects</h3>
          <div class="search" id="projects">
            <input type="search" name='news' placeholder="Search Projects...">
          </div>
          <ul class="projectlist">
            ${projects.map((p) => renderProject(p)).join("")}
          </ul>
        </section>`;
}

export function renderProject(project) {
  return `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>`;
}