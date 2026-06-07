// Load the shared header fragment into the page
(async function(){
  const mount = document.getElementById('site-header');
  if(!mount){ return; }

  // ensure stylesheet is loaded once
  const cssHref = 'styles.css';
  if(!document.querySelector(`link[href="${cssHref}"]`)){
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = cssHref;
    document.head.appendChild(l);
  }

  const fallback = '<header class="site-header"><div class="site-header-inner"><a class="brand" href="index.html">Coffee Robusta dApp</a><nav class="site-nav"><a href="admin.html">Admin</a><a href="coop.html">Cooperative</a><a href="farmer.html">Farmer</a><a href="processor.html">Processor</a><a href="exporter.html">Exporter</a><a href="roastery.html">Roastery</a></nav></div></header>';
  try{
    const res = await fetch('header.html', {cache: 'no-store'});
    if(res.ok){
      mount.innerHTML = await res.text();
    } else {
      mount.innerHTML = fallback;
    }
  } catch(err){
    mount.innerHTML = fallback;
  }

  // mark active link (wait a tick for DOM)
  requestAnimationFrame(() => {
    const links = mount.querySelectorAll('a');
    const current = (location.pathname.split('/').pop() || 'index.html');
    links.forEach(a => {
      const href = a.getAttribute('href');
      if(href === current) a.classList.add('active');
    });
  });
})();
