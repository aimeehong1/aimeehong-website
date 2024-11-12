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
  // main.innerHTML += renderProjects(data.projects);
}

function renderProfile(profile) {
  return  `<section class="box-profile">
          <img
            class="box-profile"
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
              <li>
                Phone:
                <a href=${profile.phone}
                  ><img
                    class="icon"
                    src="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?v=1729192956970"
                    alt="phone logo"
                  />
                  (224) 595-4729</a
                >
              </li>
              <li>
                Email:
                <a href="mailto:aimee.hong@bc.edu"
                  ><img
                    class="icon"
                    src="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg?v=1729192973071"
                    alt="mail logo"
                  />
                  aimee.hong@bc.edu</a
                >
              </li>
              <li>
                GitHub:
                <a href="https://github.com/aimeehong1"
                  ><img
                    class="icon"
                    src="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/github.svg?v=1729193148113"
                    alt="GitHub icon"
                  />
                  github.com/aimeehong1</a
                >
              </li>
              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/aimeehong/"
                  ><img
                    class="icon"
                    src="https://cdn.glitch.global/62b052fc-bbde-40a8-a326-98567fcd681a/icons8-linkedin.svg?v=1729193209384"
                    alt="LinkedIn Logo"
                  />
                  linkedin.com/in/aimeehong/</a
                >
              </li>
            </ul>
          </div>
        </section>`
}

function renderNews(news) {
  return `<section class="news">
          <h3>News</h3>
          <table>
            ${news.map((n) => renderOnenews(n)).join("")}
          </table>
        </section>` 
}

function renderOnenews(news) { 
  return `<tr>
              <td>${news.title}</td>
              <td>${news.date}</td>
          </tr>`
}

function renderAbout(about) {
  return `<section class="about">
          <h3>About</h3>
          <p>
            ${about.bio}
          </p>
        </section>`;
}

// function renderProjects(projects) {
//   return `
//   <section id="projects">
//     <h2 class="title">Projects</h2>
//       <div>
//         <ul>
//           ${projects.map((p) => renderProject(p)).join("")}
//         </ul>
//       </div>
//   </section>`;
// }

// function renderProject(project) {
//   return `
//   <li>
//     <strong><a href="?project=${project.id}">${project.title}</a></strong>
//     <p>${project.description}</p>
//   </li>`;
// }
