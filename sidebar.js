/* sidebar.js — injects the shared sidebar and sets the active nav item */
(function() {
  const pages = [
    { id: 'home',        label: 'Home',                   file: 'index.html' },
    { id: 'publications',label: 'Publications',           file: 'publications.html' },
    { id: 'research',    label: 'Research',               file: 'research.html' },
    { id: 'activities',  label: 'Professional Activities',file: 'activities.html' },
    { id: 'awards',      label: 'Awards & Honors',        file: 'awards.html' },
    { id: 'teaching',    label: 'Teaching',               file: 'teaching.html' },
    { id: 'cv',          label: 'CV',                     file: 'cv.html' },
  ];

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = pages.map(p => {
    const isActive = currentFile === p.file ? 'active' : '';
    return `<a class="nav-item ${isActive}" href="${p.file}"><span class="nav-dot"></span>${p.label}</a>`;
  }).join('');

  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <div class="avatar-wrap">
          <img src="Photo.png" alt="Abdul Quadir" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="sidebar-name">Abdul Quadir</div>
        <div class="sidebar-role">PhD Candidate · Mathematics &amp; ML<br>IIT Indore, India</div>
      </div>
      <div class="sidebar-links">
        <a href="mailto:mscphd2207141002@iiti.ac.in" class="sidebar-link">✉️ &nbsp;mscphd2207141002@iiti.ac.in</a>
        <a href="https://scholar.google.com/citations?user=jOKByMYAAAAJ&hl=en" target="_blank" class="sidebar-link">🎓 &nbsp;Google Scholar</a>
        <a href="https://orcid.org/0009-0002-0516-316X" target="_blank" class="sidebar-link">🔗 &nbsp;ORCID</a>
        <a href="https://www.linkedin.com/in/abdul-quadir-0739232a8/" target="_blank" class="sidebar-link">💼 &nbsp;LinkedIn</a>
        <a href="https://www.iiti.ac.in" target="_blank" class="sidebar-link">🏛️ &nbsp;IIT Indore</a>
      </div>
      <nav>${navHTML}</nav>
      <div class="sidebar-footer">© 2026 Abdul Quadir</div>
    </aside>
  `;

  document.getElementById('sidebar-placeholder').outerHTML = sidebarHTML;

  // Mobile toggle
  document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
  });
})();
