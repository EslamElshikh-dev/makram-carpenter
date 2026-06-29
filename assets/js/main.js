(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  }

  document.querySelectorAll('.preloader,.loader,#preloader,#loader,.loading-screen,.splash-screen').forEach(function(el){ el.remove(); });
  document.body.classList.remove('dark-mode');
  document.querySelectorAll('.theme-toggle,.language-switcher,.lang-switch,.en-toggle').forEach(function(el){ el.remove(); });

  const revealItems = document.querySelectorAll('.section,.card,.step,.hero-media,.article');
  revealItems.forEach(function(el){ el.classList.add('reveal'); });
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function(el){ observer.observe(el); });
})();
