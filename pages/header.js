// Load the shared header fragment into the page
(async function(){
  const mount = document.getElementById('site-header');
  if(!mount){ return; }
  const fallback = '<nav class="site-nav"><a href="admin.html">Admin</a><a href="coop.html">Cooperative</a><a href="farmer.html">Farmer</a><a href="processor.html">Processor</a><a href="exporter.html">Exporter</a><a href="roastery.html">Roastery</a></nav>';
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

  // mark active link
  const links = mount.querySelectorAll('a');
  const current = location.pathname.split('/').pop();
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === current) a.classList.add('active');
  });
})();
