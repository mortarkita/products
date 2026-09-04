(function(){
  "use strict";

  const PRODUCT_FILE = "products.json";
  const CONFIG_FILE = "site-config.json";
  const DEFAULT_ID = "am86";

  let WA_BASE = "https://wa.me/6285117110259";

  const $ = s => document.querySelector(s);

  const esc = v => String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const id = (
    new URLSearchParams(location.search).get("id") || DEFAULT_ID
  ).trim().toLowerCase();

  function wa(text){
    if(!WA_BASE) return "#";

    const separator = WA_BASE.includes("?") ? "&" : "?";

    return `${WA_BASE}${separator}text=${encodeURIComponent(text)}`;
  }

  function error(message){
    const main = document.querySelector("main");

    if(main){
      main.innerHTML = `
        <section class="error-state">
          <div>
            <div class="kicker">MORTAR KITA</div>
            <h1>Produk tidak ditemukan</h1>
            <p>${esc(message)}</p>
            <a class="btn-primary" href="index.html#produk">
              ← KEMBALI KE PRODUK
            </a>
          </div>
        </section>
      `;
    }
  }

  function applySiteConfig(config){
    if(!config) return;

    /*
     * WhatsApp
     */
    if(config.links && config.links.whatsapp){
      WA_BASE = String(config.links.whatsapp).trim();
    }else if(config.company && config.company.whatsapp){
      WA_BASE = `https://wa.me/${String(config.company.whatsapp).replace(/\D/g,"")}`;
    }

    /*
     * Data teks dengan atribut:
     * data-config="company.phone"
     * data-config="company.email"
     * dll.
     */
    document.querySelectorAll("[data-config]").forEach(el => {
      const path = el.dataset.config.split(".");
      let value = config;

      path.forEach(key => {
        if(value != null) value = value[key];
      });

      if(value == null) return;

      const prefix = el.dataset.prefix || "";
      el.textContent = prefix + value;
    });

    /*
     * Link:
     * data-config-href="links.instagram"
     */
    document.querySelectorAll("[data-config-href]").forEach(el => {
      const path = el.dataset.configHref.split(".");
      let value = config;

      path.forEach(key => {
        if(value != null) value = value[key];
      });

      if(value){
        el.href = value;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.style.display = "";
      }else{
        el.style.display = "none";
      }
    });
  }

  function render(p){
    document.title = `${p.code} | ${p.name} | Mortar Kita`;

    if($("#crumb")) {
      $("#crumb").textContent = p.code;
    }

    if($("#code")) {
      $("#code").textContent = p.code;
    }

    if($("#name")) {
      $("#name").textContent = p.name;
    }

    if($("#intro")) {
      $("#intro").textContent = p.intro || p.description || "";
    }

    if($("#suitable")) {
      $("#suitable").textContent = p.suitable_for || "-";
    }

    /*
     * Gambar produk
     */
    const img = $("#productImage");

    if(img){
      img.src = p.image || "";
      img.alt = `${p.code} - ${p.name}`;

      img.onerror = () => {
        if(img.parentElement){
          img.parentElement.classList.add("image-missing");
        }
      };
    }

    /*
     * Fitur
     */
    if($("#features")){
      $("#features").innerHTML = (p.features || [])
        .map(x => `
          <li>
            <img src="assets/icons/check.svg" alt="">
            <span>${esc(x)}</span>
          </li>
        `)
        .join("");
    }

    /*
     * Deskripsi
     */
    if($("#description")){
      $("#description").innerHTML = `
        <p>${esc(p.description || p.intro || "")}</p>
      `;
    }

    /*
     * Spesifikasi
     */
    if($("#specification")){
      $("#specification").innerHTML = Object.entries(p.specs || {})
        .map(([k,v]) => `
          <div class="spec-row">
            <dt>${esc(k)}</dt>
            <dd>${esc(v)}</dd>
          </div>
        `)
        .join("");
    }

    /*
     * Judul section
     */
    if($("#sectionTitle")){
      $("#sectionTitle").textContent =
        `${p.code} — ${p.name}`;
    }

    /*
     * Tombol WhatsApp
     */
    if($("#consult")){
      $("#consult").href = wa(
        `Halo Mortar Kita, saya ingin konsultasi mengenai ${p.code} - ${p.name}.`
      );
    }

    if($("#ctaWa")){
      $("#ctaWa").href = wa(
        `Halo Mortar Kita, saya ingin informasi mengenai ${p.code} - ${p.name}.`
      );
    }

    /*
     * Keunggulan
     */
    if($("#advantages")){
      $("#advantages").innerHTML = (p.features || [])
        .slice(0,3)
        .map(x => `
          <article class="adv-card">
            <div class="adv-icon">✓</div>
            <h3>${esc(x)}</h3>
            <p>
              Keunggulan ${esc(p.code)}
              untuk membantu mendapatkan hasil pekerjaan
              yang lebih baik.
            </p>
          </article>
        `)
        .join("");
    }
  }

  function related(all){
    const el = $("#related");

    if(!el) return;

    el.innerHTML = Object.entries(all)
      .filter(([k]) => k !== id)
      .slice(0,4)
      .map(([k,p]) => `
        <a
          class="related-card"
          href="product-detail.html?id=${encodeURIComponent(k)}"
        >
          <div class="related-img">
            <img
              src="${esc(p.image)}"
              alt="${esc(p.code)} - ${esc(p.name)}"
              loading="lazy"
            >
          </div>

          <div class="related-body">
            <span>${esc(p.code)}</span>
            <h3>${esc(p.name)}</h3>
            <b>LIHAT PRODUK →</b>
          </div>
        </a>
      `)
      .join("");
  }

  /*
   * Mobile menu
   */
  function initMenu(){
    const nav = $("#navMenu");
    const button = $("#menuToggle");

    if(!nav || !button) return;

    button.addEventListener("click", () => {
      nav.classList.toggle("active");

      button.setAttribute(
        "aria-expanded",
        nav.classList.contains("active")
      );
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  /*
   * Load produk terlebih dahulu.
   * products.json adalah file wajib.
   */
  fetch(PRODUCT_FILE, {
    cache: "no-cache"
  })
  .then(response => {
    if(!response.ok){
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  })
  .then(all => {

    if(!all || typeof all !== "object"){
      throw new Error("Format products.json tidak valid");
    }

    if(!all[id]){
      throw new Error(`ID produk ${id} tidak ditemukan`);
    }

    render(all[id]);
    related(all);

    /*
     * site-config.json bersifat optional.
     * Kalau gagal, halaman produk tetap berjalan.
     */
    fetch(CONFIG_FILE, {
      cache: "no-cache"
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    })
    .then(config => {
      applySiteConfig(config);

      /*
       * Render ulang agar URL WhatsApp
       * menggunakan konfigurasi terbaru.
       */
      render(all[id]);
    })
    .catch(configError => {
      console.warn(
        "site-config.json tidak dapat dimuat. " +
        "Menggunakan konfigurasi WhatsApp bawaan.",
        configError
      );
    });
  })
  .catch(e => {
    console.error(e);

    error(
      "Data produk gagal dimuat. " +
      "Pastikan products.json berada satu folder dengan product-detail.html."
    );
  });

  /*
   * Jalankan menu setelah DOM tersedia.
   */
  initMenu();

})();
