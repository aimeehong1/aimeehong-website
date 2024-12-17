export default function renderNav() {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `<ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="?project=projects">Projects</a></li>
          <li>
            <a
              href="https://cdn.glitch.global/a120491a-6f47-41c4-8f1a-8a5eb3c463b0/Hong%20Technical%20Resume.pdf?v=1732216774852" target="_blank" rel="noopener noreferrer"
              >Resume</a
            >
          </li>
        </ul>`;
}
