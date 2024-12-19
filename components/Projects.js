export default function renderProjects(data) {
  return `
  <section class="projects">
          <h3>Featured Projects</h3>
          <ul class="projectlist">
            ${data.projects.filter((p) => data.featured.includes(p.id)).map((p) => renderProject(p)).join("")}
          </ul>
        </section>`;
}

export function renderProject(project) {
  return `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>`;
}