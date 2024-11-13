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
          <div class="contact">
            <ul>
              ${profile.contact.map((c) => renderContact(c)).join("")}
            </ul>
          </div>
        </section>`
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
              </li>`
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

<div>
        <section class="about">
          <h3>About</h3>
          <p>
            Hi, I’m <strong>Aimee Hong</strong>! I’m a Computer Science and
            Economics student, with a minor in Finance and an expected
            graduation of May 2026. From taking courses in web application and
            iOS app development, to corporate finance, financial accounting, and
            game theory in economics, I've explored a wide range of topics that
            interest me. Currently, I’m honing my skills in software
            development, machine learning, and web development, with experience
            in Python, Java, C, Swift, and more. <br /><br />
            Beyond the classroom, I’ve worked as a Software Engineer Intern,
            where I localized a financial literacy platform to support Spanish
            translations, ultimately with the goal of making financial literacy
            more accessible to non-native English speakers. I’m also a teaching
            assistant for an introductory computer scinece course based in
            Python and will soon transition to being a teaching assistant for a
            machine learning and artifical intelligence undergraduate course.
            <br /><br />
            Additionally, I'm a current participant in the
            <a href="https://www.breakthroughtech.org/">Break Through Tech</a>
            AI program at MIT, where I am part of a network that envisions women
            fairly represented in every room where technical decisions are made.
            I have benefited from engaging in real-world machine-learning
            industry projects and receiving mentorship from technical
            professionals. My projects span from building full-stack mobile apps
            to creating machine learning models. I love tackling new challenges,
            especially those that make a positive impact, and I have a passion
            for building meaningful technology.
          </p>
        </section>
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
    <strong><a class="projects" href="?project=${project.id}">${project.title}</a></strong>
    <p>${project.description}</p>
  </li>`;
}

