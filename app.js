import { siteHeader } from './components/site-header.js';
import { introSection } from './components/intro-section.js';
import { workSection } from './components/work-section.js';
import { servicesSection } from './components/services-section.js';
import { aboutSection } from './components/about-section.js';
import { siteFooter } from './components/site-footer.js';
import { projectDialog } from './components/project-dialog.js';

const components = [
  ['site-header-component', siteHeader],
  ['intro-component', introSection],
  ['work-component', workSection],
  ['services-component', servicesSection],
//   ['about-component', aboutSection],
  ['site-footer-component', siteFooter],
  ['project-dialog-component', projectDialog],
];

for (const [selector, markup] of components) {
  document.querySelector(selector).innerHTML = markup;
}

await import('./script.js');