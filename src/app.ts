import { renderNav }        from './templates/nav';
import { renderHero }       from './templates/hero';
import { renderAbout }      from './templates/about';
import { renderExperience } from './templates/experience';
import { renderSkills }     from './templates/skills';
import { renderProjects }   from './templates/projects';
import { renderPrinciples } from './templates/principles';
import { renderTeaching }   from './templates/teaching';
import { renderFooter }     from './templates/footer';

export function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = [
    renderNav(),
    renderHero(),
    renderAbout(),
    renderExperience(),
    renderSkills(),
    renderProjects(),
    renderPrinciples(),
    renderTeaching(),
    renderFooter(),
  ].join('\n');
}
