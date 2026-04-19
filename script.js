
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-tabs]').forEach(scope => {
  scope.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      scope.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      scope.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      scope.querySelector('#' + target).classList.add('active');
    });
  });
});

const subAnchors = document.querySelectorAll('.subnav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
function highlightSubnav(){
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) current = section.id;
  });
  subAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', highlightSubnav);
window.addEventListener('load', highlightSubnav);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
  });
});
