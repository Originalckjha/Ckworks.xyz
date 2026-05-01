import { meta } from '../data/meta';

export function renderFooter(): string {
  return `
<footer id="contact" class="footer-section">
  <div class="footer-inner">

    <div class="footer-top" data-reveal>
      <span class="section-label">Contact</span>
      <h2 class="footer-title">
        Let's build<br>something real.
      </h2>
      <p class="footer-sub">
        Open to engineering collaborations, open source, student consulting,
        or a good conversation about systems and ideas.
      </p>
      <a href="mailto:${meta.email}" class="footer-email">${meta.email}</a>
    </div>

    <div class="footer-bottom" data-reveal data-delay="100">
      <span class="footer-copy">&copy; 2026 ${meta.handle} — ${meta.name}</span>
      <div class="footer-links">
        <a href="${meta.github}"   target="_blank" rel="noopener">GitHub</a>
        <a href="${meta.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${meta.twitter}"  target="_blank" rel="noopener">X / Twitter</a>
        <a href="${meta.linktree}" target="_blank" rel="noopener">Linktree</a>
      </div>
    </div>

  </div>
</footer>`;
}
