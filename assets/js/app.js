const products=[
{id:'rose-mariage',name:'Rose Mariage Saree',price:'LKR 35,000',category:'Sarees',color:'Blush',status:'Available',img:'saree-floral.webp',action:'buy'},
{id:'mayur',name:'Mayur Saree',price:'LKR 65,000',category:'Sarees',color:'Gold',status:'Available',img:'saree-portrait.webp',action:'buy'},
{id:'raveena',name:'Raveena Fusion Saree',price:'LKR 85,000',category:'Fusion',color:'Black',status:'Pre-order',img:'fusion-black.webp',action:'consult'},
{id:'sofia',name:'Sofia Corset & Saree Set',price:'LKR 135,000',category:'Fusion',color:'Ivory',status:'Custom Made',img:'editorial-duo.webp',action:'consult'},
{id:'diya',name:'Diya Fusion Saree',price:'LKR 130,000',category:'Fusion',color:'Pearl',status:'Custom Made',img:'runway-pearl.webp',action:'consult'},
{id:'nora',name:'Nora Set',price:'LKR 85,000',category:'Fusion',color:'Black',status:'Custom Made',img:'fusion-portrait.webp',action:'consult'},
{id:'sonya',name:'Bride Sonya Fishtail Dress',price:'Request Quote',category:'Bridal',color:'Ivory',status:'Bespoke',img:'bridal-detail.webp',action:'quote'},
{id:'merla',name:'Merla Bridal Dress',price:'LKR 95,000',category:'Bridal',color:'Ivory',status:'Customizable',img:'store-editorial.webp',action:'consult'},
{id:'bridal-kandyan',name:'Bridal Kandyan Saree',price:'Request Quote',category:'Bridal',color:'Ivory & Gold',status:'Bespoke',img:'bridal-wide.webp',action:'quote'},
{id:'pearl-runway',name:'Pearl Draped Couture',price:'Request Quote',category:'Fusion',color:'Pearl',status:'Runway',img:'runway-portrait.webp',action:'consult'}
];
const I={search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>',bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'};
function pg(){return document.body.dataset.page||'home'}
function navActive(keys){return keys.includes(pg())?' active':''}
function header(){return `<div class="announcement">Private couture appointments · Kadawatha, Sri Lanka · International enquiries welcome</div><header class="site-header" id="siteHeader"><div class="container nav"><div class="nav-left"><a class="nav-link${navActive(['home'])}" href="index.html">Home</a><a class="nav-link${navActive(['shop','sarees','fusion','product'])}" href="shop.html">Collections</a><a class="nav-link${navActive(['bridal'])}" href="bridal.html">Bridal</a><a class="nav-link${navActive(['consultations'])}" href="consultations.html">Consultations</a></div><a class="brand" href="index.html">AYĀT<small>COUTURE</small></a><div class="nav-right"><a class="nav-link${navActive(['about'])}" href="about.html">Our Story</a><a class="nav-link${navActive(['press'])}" href="press.html">Press</a><button class="icon-btn search-desktop" aria-label="Search" onclick="openSearch()">${I.search}</button><button class="icon-btn" aria-label="Shopping bag" onclick="toggleCart(true)">${I.bag}<span class="count" id="cartCount">0</span></button><button class="icon-btn menu-btn" aria-label="Menu" onclick="toggleMenu(true)">${I.menu}</button></div></div></header>`}
function footer(){return `<footer class="footer"><div class="container"><div class="footer-grid"><div><div class="footer-brand">AYĀT</div><p>Luxury ethnic couture crafted in Sri Lanka — balancing modern femininity, artisanal detail and a deeply personal couture experience.</p><button class="btn light" onclick="openAppointment()">Book a private consultation</button></div><div><h4>Collections</h4><div class="footer-links"><a href="sarees.html">Sarees</a><a href="fusion.html">Fusion Wear</a><a href="bridal.html">Bridal Atelier</a><a href="shop.html">Shop All</a></div></div><div><h4>The House</h4><div class="footer-links"><a href="about.html">Our Story</a><a href="press.html">Press</a><a href="testimonials.html">Client Stories</a><a href="policies.html">Policies</a></div></div><div><h4>Visit & Contact</h4><p>303, Kandy Road, Kadawatha<br>+94 76 177 6144<br>ayatandcollection@gmail.com</p><div class="footer-links"><a href="contact.html">Contact & Directions</a></div></div></div><div class="footer-bottom"><span>© 2026 AYAT International Pvt Ltd.</span><span>Creative UI concept · NextWave Marketing</span></div></div></footer>`}
function shell(){document.querySelector('[data-header]').innerHTML=header();document.querySelector('[data-footer]').innerHTML=footer();document.body.insertAdjacentHTML('beforeend',`<div class="overlay" id="overlay" onclick="closeAll()"></div><aside class="mobile-menu" id="mobileMenu"><div class="mobile-menu-head"><a class="brand" href="index.html">AYĀT<small>COUTURE</small></a><button class="icon-btn" onclick="toggleMenu(false)" style="color:#fff">×</button></div><nav class="mobile-links"><a href="index.html">Home</a><a href="shop.html">Collections</a><a href="bridal.html">Bridal Atelier</a><a href="consultations.html">Consultations</a><a href="about.html">Our Story</a><a href="press.html">Press</a><a href="contact.html">Contact</a></nav><button class="btn gold" onclick="openAppointment()">Book an appointment</button></aside><div class="search-panel" id="searchPanel"><div class="search-row"><input id="searchInput" placeholder="Search the house…" oninput="doSearch(this.value)"><button class="icon-btn" onclick="closeSearch()">×</button></div><div id="searchResults" class="product-grid" style="margin-top:28px"></div></div><aside class="cart-drawer" id="cartDrawer"><div class="cart-head"><div><div class="eyebrow">Your selection</div><h3 class="h3">Shopping bag</h3></div><button class="icon-btn" onclick="toggleCart(false)">×</button></div><div class="cart-items" id="cartItems"></div><div><div class="rule"></div><p style="font-size:10px;color:var(--muted)">Concept preview — payment and delivery logic will be connected in the full e-commerce build.</p><button class="btn dark" style="width:100%" onclick="toast('Checkout flow is ready for payment gateway integration')">Continue to checkout</button></div></aside><div class="modal" id="appointmentModal"><button class="modal-close" onclick="closeAll()">×</button><div class="appointment-modal"><div class="appointment-visual"><img src="assets/images/bridal-detail.webp" alt="AYAT bridal detail"></div><div class="appointment-copy"><div class="eyebrow">Private atelier</div><h2 class="h3" style="margin-top:12px">Begin your couture conversation.</h2><p class="muted" style="font-size:11px">Share the occasion, preferred date and style direction. The atelier can confirm the appointment personally.</p><form class="form-grid" onsubmit="submitDemo(event,'Appointment request captured')"><div class="field"><label>Name</label><input required placeholder="Your name"></div><div class="field"><label>WhatsApp</label><input required placeholder="+94"></div><div class="field"><label>Preferred date</label><input type="date" required></div><div class="field"><label>Service</label><select><option>Bridal consultation</option><option>Designer wear</option><option>Custom saree</option><option>Virtual consultation</option></select></div><div class="field full"><label>Tell us about the occasion</label><textarea placeholder="Wedding date, style references, colour preferences…"></textarea></div><div class="field full"><button class="btn gold" type="submit">Request appointment</button></div></form></div></div></div><div class="modal" id="quickModal"><button class="modal-close" onclick="closeAll()">×</button><div id="quickContent"></div></div><div class="atelier-invite" id="atelierInvite"><button class="close-invite" onclick="dismissInvite()">×</button><div class="eyebrow">AYĀT Private Atelier</div><h3>Planning a bridal look?</h3><p>Discover a one-to-one couture consultation, from first inspiration to final fitting.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn gold" onclick="dismissInvite();openAppointment()">Book consultation</button><a class="btn" href="bridal.html">Explore bridal</a></div></div><div class="toast" id="toast"></div><button class="desktop-consult" onclick="openAppointment()">Private consultation</button><div class="scroll-progress"><span id="scrollProgress"></span></div><div class="mobile-cta"><a href="shop.html">Explore</a><button onclick="openAppointment()">Book consultation</button></div>`)}
function toggleMenu(on){document.getElementById('mobileMenu').classList.toggle('open',on);overlay(on);document.body.classList.toggle('menu-open',on)}
function toggleCart(on){document.getElementById('cartDrawer').classList.toggle('open',on);overlay(on);document.body.classList.toggle('modal-open',on);if(on)renderCart()}
function overlay(on){document.getElementById('overlay').classList.toggle('show',on)}
function openAppointment(){closePanels();document.getElementById('appointmentModal').classList.add('open');overlay(true);document.body.classList.add('modal-open')}
function openQuick(id){const p=products.find(x=>x.id===id);if(!p)return;closePanels();document.getElementById('quickContent').innerHTML=`<div class="quick-modal"><div class="q-media"><img src="assets/images/${p.img}" alt="${p.name}"></div><div class="q-copy"><div class="eyebrow">${p.category} · ${p.status}</div><h2 class="h3" style="margin-top:12px">${p.name}</h2><div class="price">${p.price}</div><p>Designed for a refined occasion wardrobe. Final fabric, sizing and customization notes can be managed from the future admin dashboard.</p><div class="rule" style="margin:22px 0"></div><p><b>Colour:</b> ${p.color}<br><b>Service:</b> ${p.action==='buy'?'Online purchase':p.action==='quote'?'Private quotation':'Made-to-order consultation'}</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:24px">${p.action==='buy'?`<button class="btn gold" onclick="addToCart('${p.id}')">Add to bag</button>`:`<button class="btn gold" onclick="openAppointment()">Book consultation</button>`}<a class="btn" href="product.html?id=${p.id}">View details</a></div></div></div>`;document.getElementById('quickModal').classList.add('open');overlay(true);document.body.classList.add('modal-open')}
function closePanels(){document.getElementById('mobileMenu')?.classList.remove('open');document.getElementById('cartDrawer')?.classList.remove('open');document.getElementById('searchPanel')?.classList.remove('open')}
function closeAll(){closePanels();document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'));overlay(false);document.body.classList.remove('menu-open','modal-open')}
function openSearch(){closePanels();document.getElementById('searchPanel').classList.add('open');document.getElementById('searchInput').focus();document.body.classList.add('modal-open');doSearch('')}
function closeSearch(){document.getElementById('searchPanel').classList.remove('open');document.body.classList.remove('modal-open')}
function doSearch(q){const el=document.getElementById('searchResults');if(!el)return;let list=q.trim()?products.filter(p=>(p.name+' '+p.category+' '+p.color).toLowerCase().includes(q.toLowerCase())):products.slice(0,4);el.innerHTML=list.slice(0,8).map(productCard).join('')}
function productCard(p){return `<article class="product-card" data-cat="${p.category}"><a class="product-media" href="product.html?id=${p.id}"><span class="badge">${p.status}</span><button class="wish" type="button" onclick="event.preventDefault();event.stopPropagation();toast('Saved to your edit')">♡</button><img src="assets/images/${p.img}" alt="${p.name}"><button class="quick" type="button" onclick="event.preventDefault();event.stopPropagation();openQuick('${p.id}')">Quick view</button></a><div class="product-info"><h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3><div class="product-meta"><span>${p.category} · ${p.color}</span><span>${p.status}</span></div><div class="product-price">${p.price}</div></div></article>`}
function renderProducts(selector,filter='All',limit=99){const el=document.querySelector(selector);if(!el)return;const list=products.filter(p=>filter==='All'||p.category===filter).slice(0,limit);el.innerHTML=list.map(productCard).join('')}
function initFilters(){document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts('#shopGrid',b.dataset.filter)}))}
function cart(){try{return JSON.parse(localStorage.getItem('ayat-cart')||'[]')}catch(e){return[]}}
function setCart(c){localStorage.setItem('ayat-cart',JSON.stringify(c));updateCount()}
function addToCart(id){const c=cart();c.push(id);setCart(c);toast('Added to your bag');document.querySelector('#quickModal')?.classList.remove('open');overlay(false)}
function removeFromCart(i){const c=cart();c.splice(i,1);setCart(c);renderCart()}
function updateCount(){const n=cart().length;document.querySelectorAll('#cartCount').forEach(e=>e.textContent=n)}
function renderCart(){const c=cart(),el=document.getElementById('cartItems');if(!el)return;if(!c.length){el.innerHTML='<p class="muted" style="font-size:11px">Your bag is currently empty. Explore the latest edit and save a piece you love.</p>';return}el.innerHTML=c.map((id,i)=>{const p=products.find(x=>x.id===id)||products[0];return `<div class="cart-item"><img src="assets/images/${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><small>${p.category} · ${p.status}</small><div style="font-size:10px;margin-top:8px">${p.price}</div></div><button class="icon-btn" onclick="removeFromCart(${i})">×</button></div>`}).join('')}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2400)}
function submitDemo(e,msg){e.preventDefault();closeAll();toast(msg)}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el))}
function productDetail(){const el=document.getElementById('productDetail');if(!el)return;const id=new URLSearchParams(location.search).get('id')||'rose-mariage';const p=products.find(x=>x.id===id)||products[0];el.innerHTML=`<div class="product-detail-grid"><div class="product-detail-media"><img src="assets/images/${p.img}" alt="${p.name}"><img src="assets/images/${p.category==='Bridal'?'bridal-detail.webp':p.category==='Sarees'?'saree-portrait.webp':'runway-portrait.webp'}" alt="AYAT editorial detail"></div><div class="product-detail-copy"><div class="breadcrumb"><a href="shop.html">Collections</a> / ${p.category}</div><div class="eyebrow">${p.status}</div><h1 class="h2" style="margin-top:12px">${p.name}</h1><div class="price">${p.price}</div><p class="muted" style="font-size:11px">An AYĀT couture piece presented within this interface concept. Final fabric composition, size options, delivery lead-time and care details can be maintained through the production admin panel.</p><dl><div><dt>Collection</dt><dd>${p.category}</dd></div><div><dt>Colour</dt><dd>${p.color}</dd></div><div><dt>Service</dt><dd>${p.action==='buy'?'Purchase online':p.action==='quote'?'Private quotation':'Consultation'}</dd></div></dl><div style="display:flex;gap:8px;flex-wrap:wrap">${p.action==='buy'?`<button class="btn gold" onclick="addToCart('${p.id}')">Add to bag</button>`:`<button class="btn gold" onclick="openAppointment()">Book consultation</button>`}<button class="btn" onclick="toast('Saved to your edit')">Save piece</button></div><div class="product-notes"><details open><summary>Craft & customization</summary><p>Made-to-order pieces can support custom measurements, colour preferences and approved design adjustments.</p></details><details><summary>Delivery & collection</summary><p>Local collection, courier and international delivery rules can be configured in the full commerce build.</p></details><details><summary>Couture consultation</summary><p>For bridal and designer wear, clients can move directly from this page into a private appointment request.</p></details></div></div></div>`}
function invite(){if(sessionStorage.getItem('ayat-invite'))return;setTimeout(()=>document.getElementById('atelierInvite')?.classList.add('show'),4500)}
function dismissInvite(){document.getElementById('atelierInvite')?.classList.remove('show');sessionStorage.setItem('ayat-invite','1')}
function scroller(){const h=document.getElementById('siteHeader');window.addEventListener('scroll',()=>h?.classList.toggle('scrolled',scrollY>20),{passive:true})}

function luxuryLoader(){
  if(document.querySelector('.luxury-loader'))return;
  const el=document.createElement('div');
  el.className='luxury-loader';
  el.innerHTML='<div class="loader-mark"><strong>AYĀT</strong><small>Couture</small><div class="loader-line"><i></i></div></div>';
  document.body.appendChild(el);
  const done=()=>setTimeout(()=>el.classList.add('hide'),180);
  if(document.readyState==='complete')done(); else window.addEventListener('load',done,{once:true});
  setTimeout(done,1500);
}
function heroCinema(){
  const slides=[...document.querySelectorAll('.hero-slide')];
  if(!slides.length)return;
  const controls=[...document.querySelectorAll('.hero-controls button')];
  const labels=['Private Atelier','Signature Sarees','Bridal Couture'];
  let current=0,timer;
  const go=n=>{
    current=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===current));
    controls.forEach((b,i)=>b.classList.toggle('active',i===current));
    const idx=String(current+1).padStart(2,'0');
    const a=document.getElementById('heroIndex'),c=document.getElementById('heroCaption'),no=document.querySelector('.hero-caption-no');
    if(a)a.textContent=idx;if(c)c.textContent=labels[current];if(no)no.textContent=idx;
  };
  const start=()=>{clearInterval(timer);timer=setInterval(()=>go(current+1),7200)};
  controls.forEach((b,i)=>b.addEventListener('click',()=>{go(i);start()}));
  start();
}
function parallaxMotion(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const els=[...document.querySelectorAll('[data-parallax]')];
  let ticking=false;
  const run=()=>{
    const vh=innerHeight;
    els.forEach(el=>{
      const r=el.getBoundingClientRect(),rate=parseFloat(el.dataset.parallax||'.05');
      if(r.bottom>0&&r.top<vh){const delta=(r.top+r.height/2-vh/2)*rate;el.style.transform=`translate3d(0,${delta}px,0)`}
    });
    ticking=false;
  };
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(run);ticking=true}},{passive:true});run();
}
function progressBar(){
  const el=document.getElementById('scrollProgress');if(!el)return;
  const run=()=>{const max=document.documentElement.scrollHeight-innerHeight;el.style.width=(max?scrollY/max*100:0)+'%'};
  addEventListener('scroll',run,{passive:true});run();
}
function pageTransitions(){
  document.querySelectorAll('a[href$=".html"],a[href*=".html?"]').forEach(a=>a.addEventListener('click',e=>{
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank')return;
    const href=a.getAttribute('href');if(!href||href.startsWith('#'))return;
    e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=href,430);
  }));
}
function magneticMotion(){
  if(matchMedia('(pointer:coarse)').matches)return;
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.08,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate3d(${x}px,${y}px,0)`});
    el.addEventListener('mouseleave',()=>el.style.transform='');
  });
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
document.addEventListener('DOMContentLoaded',()=>{luxuryLoader();shell();requestAnimationFrame(()=>document.body.classList.add('ready'));renderProducts('#homeProducts','All',4);renderProducts('#shopGrid','All');renderProducts('#sareeGrid','Sarees');renderProducts('#fusionGrid','Fusion');renderProducts('#bridalGrid','Bridal');initFilters();productDetail();reveal();updateCount();scroller();heroCinema();parallaxMotion();progressBar();pageTransitions();magneticMotion();if(pg()==='home')invite()});
