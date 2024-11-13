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
  main.innerHTML = renderProfile(data.profile);
  main.innerHTML += renderAbout(data.about);
  main.innerHTML += renderNews(data.news);
  main.innerHTML += renderProjects(data.projects);
}

function renderProfile(profile) {
  return  `<div>
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
          ${profile.contact.map((c) => renderContact(c)).join("")}
        </section>`
}

function renderContact(contact) {
  return `<div class="contact">
            <ul>
              <li>
                ${contact.name}
                <a href=${contact.href}
                  ><img
                    class="icon"
                    src="${contact.icon_src}"
                    alt=${contact.name + "logo"}
                  />
                  ${contact.value}</a
                >
              </li>
            </ul>
          </div>`
}

function renderNews(news) {
  return `<section class="news">
          <h3>News</h3>
          <table>
            ${news.map((n) => renderOnenews(n)).join("")}
          </table>
        </section> 
      </div>`
}

function renderOnenews(news) { 
  return `<tr>
              <td>${news.title}</td>
              <td>${news.date}</td>
          </tr>`
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
  <li>
    <strong><a href="?project=${project.id}">${project.title}</a></strong>
    <p>${project.description}</p>
  </li>`;
}

 <li>
              <a class="projects" href="project2.html">Word Garden App</a>
            </li>
            <p>
              A word-guessing UI app based on hangman that gives you eight
              guesses per word and will wilt the petals on your flower if you
              make incorrect guesses. Complete with sounds and animations.
            </p>