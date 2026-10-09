export const workSection = `
  <section class="work-section" id="work" aria-labelledby="work-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">A FEW THINGS I’VE MADE</p>
        <h2 id="work-title">Portfolio<span class="heading-period">.</span></h2>
      </div>
      <p class="section-count" id="project-count" aria-live="polite">09 PROJECTS</p>
    </div>
    <div class="filter-row" role="group" aria-label="Filter projects">
      <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">All work <span>09</span></button>
      <button class="filter-button" type="button" data-filter="shopify" aria-pressed="false">Shopify</button>
      <button class="filter-button" type="button" data-filter="platform" aria-pressed="false">Platform</button>
      <!-- <button class="filter-button" type="button" data-filter="art-direction" aria-pressed="false">Side Projects</button> -->
    </div>
    <div class="project-grid" id="project-grid">
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-fieldnotes"><img src="img/cherryrepublic.png" alt="Cherry Republic website" loading="lazy"></span>
        <a class="liquipel-link" href="https://www.cherryrepublic.com/" target="_blank" rel="noopener noreferrer" aria-label="View Cherry Republic website (opens in a new tab)"><span class="project-meta"><span class="project-name">Cherry Republic</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-narrow card-offset liquipel-card" data-category="platform">
        <span class="project-image image-solace"><img src="img/liquipel.jpg" alt="Liquipel Mobile Accessories" loading="lazy"></span>
        <a class="liquipel-link" href="https://liquipel.com/" target="_blank" rel="noopener noreferrer" aria-label="View Liquipel website (opens in a new tab)"><span class="project-meta"><span class="project-name">Liquipel</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-ground"><img src="img/pwrstoragesolutions.com.png" alt="Power Storage Solutions website" loading="lazy"></span>
        <a class="liquipel-link" href="https://pwrstoragesolutions.com/" target="_blank" rel="noopener noreferrer" aria-label="View Power Storage Solutions website (opens in a new tab)"><span class="project-meta"><span class="project-name">Power Storage Solutions</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-narrow card-offset" type="button" data-category="platform">
        <span class="project-image image-shift"><img src="img/alpatp.png" alt="A Learning Place A Teaching Place" loading="lazy"></span>
        <!-- <span class="project-meta"><span class="project-name">Shift</span><span class="project-type">Digital experience <span class="project-arrow" aria-hidden="true">↗</span></span></span> -->
        <a class="alpatp-link" href="https://alearningplace.com.au/" target="_blank" rel="noopener noreferrer" aria-label="View A Learning Place website (opens in a new tab)"><span class="project-meta"><span class="project-name">A Learning Place</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-ground"><img src="img/ictbillet.com.png" alt="ICT billet website" loading="lazy"></span>
        <a class="liquipel-link" href="https://www.ictbillet.com/" target="_blank" rel="noopener noreferrer" aria-label="View ICT billet website (opens in a new tab)"><span class="project-meta"><span class="project-name">ICT billet</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-narrow card-offset" type="button" data-category="platform">
        <span class="project-image image-shift"><img src="img/coreintegrity.com.au.png" alt="Core Integrity" loading="lazy"></span>
        <!-- <span class="project-meta"><span class="project-name">Shift</span><span class="project-type">Digital experience <span class="project-arrow" aria-hidden="true">↗</span></span></span> -->
        <a class="alpatp-link" href="https://coreplusplatform.com/" target="_blank" rel="noopener noreferrer" aria-label="View Core Integrity website (opens in a new tab)"><span class="project-meta"><span class="project-name">Core Integrity</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-ground"><img src="img/specialtytile.com.png" alt="Specialty Tile website" loading="lazy"></span>
        <a class="liquipel-link" href="https://www.specialtytile.com/" target="_blank" rel="noopener noreferrer" aria-label="View Specialty Tile website (opens in a new tab)"><span class="project-meta"><span class="project-name">Specialty Tile</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-ground"><img src="img/longyear.org.png" alt="Longyear Museum website" loading="lazy"></span>
        <a class="liquipel-link" href="https://www.longyear.org/" target="_blank" rel="noopener noreferrer" aria-label="View Longyear Museum website (opens in a new tab)"><span class="project-meta"><span class="project-name">Longyear Museum</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
      <article class="project-card card-wide" type="button" data-category="shopify">
        <span class="project-image image-ground"><img src="img/mtmerucoffee.org.png" alt="Mount Meru Coffee website" loading="lazy"></span>
        <a class="liquipel-link" href="https://www.mtmerucoffee.org/" target="_blank" rel="noopener noreferrer" aria-label="View Mount Meru Coffee website (opens in a new tab)"><span class="project-meta"><span class="project-name">Mount Meru Coffee</span><span class="project-type">View Website <span class="project-arrow" aria-hidden="true">↗</span></span></span></a>
      </article>
    </div>
  </section>
`;