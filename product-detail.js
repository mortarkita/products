(function(){
  "use strict";
  const PRODUCT_FILE="products.json";
  const DEFAULT_ID="am86";
  const WA_NUMBER="6281234567890";
  const $=s=>document.querySelector(s);
  const esc=v=>String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const id=(new URLSearchParams(location.search).get("id")||DEFAULT_ID).trim().toLowerCase();
  const wa=t=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

  function error(message){
    const main=document.querySelector("main");
    if(main) main.innerHTML=`<section class="error-state"><div><div class="kicker">MORTAR KITA</div><h1>Produk tidak ditemukan</h1><p>${esc(message)}</p><a class="btn-primary" href="index.html#produk">← KEMBALI KE PRODUK</a></div></section>`;
  }

  function render(p){
    document.title=`${p.code} | ${p.name} | Mortar Kita`;
    $("#crumb").textContent=p.code; $("#code").textContent=p.code; $("#name").textContent=p.name; $("#intro").textContent=p.intro;
    $("#suitable").textContent=p.suitable_for||"-";
    const img=$("#productImage"); img.src=p.image; img.alt=`${p.code} - ${p.name}`;
    img.onerror=()=>img.parentElement.classList.add("image-missing");
    $("#features").innerHTML=(p.features||[]).map(x=>`<li><img src="assets/icons/check.svg" alt=""> <span>${esc(x)}</span></li>`).join("");
    $("#description").innerHTML=`<p>${esc(p.description||p.intro||"")}</p>`;
    $("#specification").innerHTML=Object.entries(p.specs||{}).map(([k,v])=>`<div class="spec-row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("#sectionTitle").textContent=`${p.code} — ${p.name}`;
    $("#consult").href=wa(`Halo Mortar Kita, saya ingin konsultasi mengenai ${p.code} - ${p.name}.`);
    $("#ctaWa").href=wa(`Halo Mortar Kita, saya ingin informasi mengenai ${p.code} - ${p.name}.`);
    $("#advantages").innerHTML=(p.features||[]).slice(0,3).map((x,i)=>`<article class="adv-card"><div class="adv-icon">✓</div><h3>${esc(x)}</h3><p>Keunggulan ${esc(p.code)} untuk membantu mendapatkan hasil pekerjaan yang lebih baik.</p></article>`).join("");
  }

  function related(all){
    const el=$("#related"); if(!el)return;
    el.innerHTML=Object.entries(all).filter(([k])=>k!==id).slice(0,4).map(([k,p])=>`<a class="related-card" href="product-detail.html?id=${encodeURIComponent(k)}"><div class="related-img"><img src="${esc(p.image)}" alt="${esc(p.code)} - ${esc(p.name)}" loading="lazy"></div><div class="related-body"><span>${esc(p.code)}</span><h3>${esc(p.name)}</h3><b>LIHAT PRODUK →</b></div></a>`).join("");
  }

  const toggle=()=>{const n=$("#navMenu"),b=$("#menuToggle"); n.classList.toggle("active"); b.setAttribute("aria-expanded",n.classList.contains("active"));};
  $("#menuToggle").addEventListener("click",toggle);
  document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>$("#navMenu").classList.remove("active")));

  fetch(PRODUCT_FILE,{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(all=>{if(!all[id])throw new Error(`ID produk ${id} tidak ditemukan`);render(all[id]);related(all);}).catch(e=>{console.error(e);error("Data produk gagal dimuat. Pastikan products.json berada satu folder dengan product-detail.html.");});
})();