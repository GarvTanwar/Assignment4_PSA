const rootPath = document.body.dataset.root || "";

function page(path) {
  return `${rootPath}${path}`;
}

function renderHeader() {
  return `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-header">
      <nav class="navbar" aria-label="Main navigation">
        <a class="logo" href="${page("index.html")}" aria-label="Powering Tomorrow home">
          <img src="${page("assets/images/new_logo.png")}" alt="Powering Tomorrow logo">
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" id="nav-links">
          <li><a href="${page("index.html")}">Home</a></li>
          <li><a href="${page("pages/podcast.html")}">Podcast</a></li>
          <li><a href="${page("pages/image.html")}">PSA Campaign</a></li>
          <li><a href="${page("pages/infographic.html")}">Infographic</a></li>
          <li><a href="${page("pages/artefact.html")}">Physical Artefact</a></li>
          <li><a href="${page("pages/contact.html")}">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-brand">
        <a class="footer-name" href="${page("index.html")}">Powering Tomorrow</a>
        <p class="footer-description">Helping families build simple energy-saving habits at home, one everyday routine at a time.</p>
        <p class="footer-copy">&copy; 2026 Powering Tomorrow. All rights reserved.</p>
      </div>
      <nav class="footer-column" aria-label="Footer navigation">
        <p class="footer-heading">Explore</p>
        <a href="${page("pages/about.html")}">About Us</a>
        <a href="${page("pages/faq.html")}">FAQ</a>
        <a href="${page("pages/contact.html")}">Contact Us</a>
        <a href="${page("pages/references.html")}">References</a>
      </nav>
      <nav class="footer-column" aria-label="Policies">
        <p class="footer-heading">Policies</p>
        <a href="${page("pages/policies.html#terms")}">Terms of Use</a>
        <a href="${page("pages/policies.html#privacy")}">Privacy Policy</a>
        <a href="${page("pages/policies.html#accessibility")}">Accessibility</a>
        <a href="${page("pages/policies.html#copyright")}">Copyright &amp; Usage</a>
      </nav>
      <svg class="footer-energy-art" viewBox="0 0 1200 360" aria-hidden="true" focusable="false">
        <g class="energy-icons">
          <g class="solar-icon" transform="translate(92 224)">
            <path d="M0 74h190l-38-86H38L0 74Z" />
            <path d="M38-12 0 74M76-12 48 74M114-12 96 74M152-12 144 74" />
            <path d="M20 30h150M9 52h171M30 8h132" />
            <path d="M28 74h130" />
          </g>

          <g class="house-icon" transform="translate(512 178)">
            <path d="M0 64 76 0l76 64" />
            <path d="M24 56v98h104V56" />
            <path d="M64 154v-42h30v42" />
            <path d="M42 82h26v24H42zM86 82h26v24H86z" />
            <path d="M104 24v-28h22v48" />
            <path d="M18 154h122" />
          </g>

          <g class="city-icon" transform="translate(864 164)">
            <path d="M0 168h260" />
            <path d="M18 168V86h48v82" />
            <path d="M82 168V46h54v122" />
            <path d="M154 168V70h42v98" />
            <path d="M214 168V22h44v146" />
            <path d="M32 108h20M32 130h20M96 70h24M96 94h24M96 118h24M166 94h18M166 118h18M226 48h18M226 74h18M226 100h18M226 126h18" />
          </g>

          <path class="energy-line" pathLength="1" d="M245 252 C370 214 410 236 512 242 S710 274 806 226 950 184 1112 210" />
          <circle class="energy-pulse" r="7">
            <animateMotion dur="9s" repeatCount="indefinite" path="M245 252 C370 214 410 236 512 242 S710 274 806 226 950 184 1112 210" />
          </circle>
        </g>
      </svg>
    </footer>
  `;
}

document.querySelector("[data-layout='header']")?.replaceWith(
  document.createRange().createContextualFragment(renderHeader())
);

document.querySelector("[data-layout='footer']")?.replaceWith(
  document.createRange().createContextualFragment(renderFooter())
);
