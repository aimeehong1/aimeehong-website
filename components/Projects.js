export default function renderProjects(data) {
  return `
  <section class="projects">
          <h3>Featured Projects</h3>
          <ul class="projectlist">
            ${data.projects.filter((p) => data.featured.includes(p.id)).map((p) => renderFeaturedProject(p)).join("")}
          </ul>
        </section>`;
}

export function renderFeaturedProject(project) {
  const p = project.materials.find((p) => p.label == "Photo");
  let returned = `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>
  `;
  if (p) {
    returned = returned + `<img src=${p.path} alt="${project.title} Project Image">`
  }
  return returned 
}

export function renderProject(project) {
  return `
  <li><a class="projects" href="?project=${project.id}">${project.title}</a></li>
  <p>${project.description}</p>`;
}