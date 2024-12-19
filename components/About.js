import renderProjects from "./Projects.js"

export default function renderAbout(data) {
  return `<div>
    <section class="about">
          <h3>About</h3>
          <p>
            ${data.about.bio}
          </p>
        </section>
        ${renderProjects(data)}
        </div>`;
}