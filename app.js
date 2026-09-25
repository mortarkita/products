9"use strict";

/*
=========================================================
MORTAR KITA - APP.JS
=========================================================

File ini menangani:

1. Data perusahaan
2. Branding
3. Hero
4. Social media
5. Data produk
6. Kategori produk
7. Halaman index
8. Halaman detail produk
9. WhatsApp
10. Menu mobile

Tidak membutuhkan:

- products.json
- site-config.json
- kategori-produk-mortarkita.json
- product-detail.js
=========================================================
*/


/* =====================================================
   KONFIGURASI WEBSITE
===================================================== */

const SITE_CONFIG = {

    company: {
        name: "Mortar Kita",

        phone: "0851-1143-3500",

        whatsapp: "628511143500",

        email: "adminutamatju@gmail.com",

        address: "Tangerang Selatan",

        description:
            "Mortar Kita adalah solusi bahan bangunan berkualitas untuk menghasilkan pekerjaan yang kuat, rapi dan tahan lama."
    },

    branding: {

        logo_header:
            "assets/logo/logo-mortarkita.png",

        logo_footer:
            "assets/logo/logo-mortarkita.png"
    },

    hero: {

        subtitle:
            "SOLUSI UNTUK BANGUNAN ANDA",

        title_line1:
            "KUAT MENEMPEL",

        title_line2:
            "TAHAN LAMA",

        description:
            "Mortar Kita hadir dengan produk-produk berkualitas dan jadi solusi Anda untuk menghasilkan bangunan yang kuat, rapi dan tahan lama."
    },

    /*
    =====================================================
    SOCIAL MEDIA

    Isi URL di bawah jika sudah punya akun.

    Contoh:

    instagram:
    "https://www.instagram.com/akunanda"

    Jika kosong "", tombol otomatis disembunyikan.
    =====================================================
    */

    links: {

        whatsapp:
            "https://wa.me/628511143500",

        instagram:
            "https://www.instagram.com/mortarkita.id/",

        tiktok:
            "https://www.tiktok.com/@mortarkita",

        facebook:
            "",

        shopee:
            "",

        tokopedia:
            ""
    }
};


/* =====================================================
   LABEL KATEGORI
=====================================================

   Kategori produk sekarang ditentukan langsung dari
   field "category" setiap produk.

   Jadi tidak membutuhkan file kategori JSON lagi.
===================================================== */

const CATEGORY_LABELS = {

    "pengisi-nat":
        "Pengisi Nat",

    "pelapis":
        "Pelapis",

    "anti-bocor":
        "Anti Bocor",

    "mortar":
        "Mortar",

    "perekat":
        "Perekat",

    "aditif":
        "Aditif",

    "bahan-lainnya":
        "Bahan Lainnya"
};


/* =====================================================
   DATA PRODUK
=====================================================

   TAMBAH PRODUK DI SINI.

   Tidak perlu mengubah index.html.

   Tidak perlu membuat file baru.

   Contoh penambahan ada di bagian paling bawah data.
===================================================== */

const PRODUCTS = {

    am82: {

        code: "AM 82",

        name:
            "Perekat Bata dan Plester",

        image:
            "produk/am82.png",

        intro:
            "Perekat Bata dan Plester yang terbuat dari campuran semen, pasir dan additive yang diaplikasikan hanya dengan penambahan air (tanpa perlu pengayakan pasir) untuk membentuk permukaan kuat dan rata.",

        suitable_for:
            "Dinding, interior & eksterior, area kering & basah",

        features: [

            "Daya rekat kuat",

            "Pengaplikasian mudah",

            "Hemat waktu pengerjaan",

            "Multifungsi"
        ],

        description:
            "Perekat Bata dan Plester yang terbuat dari campuran semen, pasir dan additive yang diaplikasikan hanya dengan penambahan air (tanpa perlu pengayakan pasir) untuk membentuk permukaan kuat dan rata.",

        specs: {

            "Kemasan":
                "40 kg",

            "Kebutuhan air":
                "6–7 liter / sak 40 kg",

            "Daya sebar":
                "Perekat bata merah: ± 1,2 m² / sak; Plester: 2–2,4 m² / sak"
        },

        category:
            "mortar",

        showAll:
            true
    },


    am83: {

        code: "AM 83",

        name:
            "Floor Hardener",

        image:
            "produk/am83.png",

        intro:
            "Mortar instan siap pakai yang berfungsi sebagai pengeras lantai beton berbentuk bubuk untuk meningkatkan kekerasan permukaan beton.",

        suitable_for:
            "Interior & eksterior, area kering & basah seperti gudang, bengkel, garasi, showroom, workshop, parkiran, dll.",

        features: [

            "Permukaan lantai beton menjadi lebih padat dan keras",

            "Mengurangi penyerapan kotoran",

            "Mudah dibersihkan",

            "Meningkatkan ketahanan terhadap gesekan permukaan & benturan beban"
        ],

        description:
            "Mortar instan siap pakai yang berfungsi sebagai pengeras lantai beton berbentuk bubuk untuk meningkatkan kekerasan permukaan beton.",

        specs: {

            "Kemasan":
                "25 kg",

            "Daya sebar":
                "Light Traffic: ± 8,25 m² / sak 25 kg; Medium Traffic: ± 5 m² / sak 25 kg; Heavy Traffic: ± 3,6 m² / sak 25 kg"
        },

        category:
            "mortar",

        showAll:
            true
    },


    am86: {

        code: "AM 86",

        name:
            "Acian di atas Beton & Plester",

        image:
            "produk/am86.png",

        intro:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan beton maupun plester sehingga menghasilkan lapisan acian yang halus dan berkualitas.",

        suitable_for:
            "Dinding, interior & eksterior",

        features: [

            "Hasil akhir halus",

            "Mencegah retak rambut",

            "Tidak perlu plamir",

            "Pengaplikasian mudah",

            "Daya rekat kuat"
        ],

        description:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan beton maupun plester sehingga menghasilkan lapisan acian yang halus dan berkualitas.",

        specs: {

            "Kemasan":
                "20 kg & 40 kg",

            "Kebutuhan air":
                "± 7 liter / sak 20 kg",

            "Daya sebar":
                "8–10 m² / sak 20 kg"
        },

        category:
            "mortar",

        showAll:
            true
    },


    am87: {

        code: "AM 87",

        name:
            "Acian Putih di atas Beton & Plester",

        image:
            "produk/am87.png",

        intro:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan beton maupun plester sehingga menghasilkan lapisan acian berwarna putih yang halus dan berkualitas.",

        suitable_for:
            "Dinding, interior & eksterior",

        features: [

            "Hasil akhir halus & putih",

            "Daya rekat kuat",

            "Mencegah retak rambut",

            "Tidak perlu plamir",

            "Hemat penggunaan cat"
        ],

        description:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan beton maupun plester sehingga menghasilkan lapisan acian berwarna putih yang halus dan berkualitas.",

        specs: {

            "Kemasan":
                "20 kg",

            "Kebutuhan air":
                "± 7 liter / sak 20 kg",

            "Daya sebar":
                "8–10 m² / sak 20 kg"
        },

        category:
            "mortar",

        showAll:
            true
    },


    am88: {

        code: "AM 88",

        name:
            "Acian di atas Plester",

        image:
            "produk/am88.png",

        intro:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan plester sehingga menghasilkan permukaan dinding yang halus dan rata serta siap untuk dicat.",

        suitable_for:
            "Dinding, interior & eksterior",

        features: [

            "Hasil akhir halus",

            "Pengaplikasian mudah",

            "Mencegah retak rambut",

            "Daya rekat kuat"
        ],

        description:
            "Mortar instan siap pakai yang diaplikasikan di atas permukaan plester sehingga menghasilkan permukaan dinding yang halus dan rata serta siap untuk dicat.",

        specs: {

            "Kemasan":
                "40 kg",

            "Kebutuhan air":
                "± 14 liter / sak 40 kg",

            "Daya sebar":
                "16–20 m² / sak 40 kg"
        },

        category:
            "mortar",

        showAll:
            true
    },


    am89: {

        code: "AM 89",

        name:
            "Semen Anti Susut",

        image:
            "produk/am89.png",

        intro:
            "Mortar instan siap pakai yang dapat digunakan sebagai grouting untuk pengisi celah dan perbaikan beton bermutu tinggi.",

        suitable_for:
            "Interior & eksterior, area kering & basah",

        features: [

            "Berkekuatan tinggi",

            "Penambahan kekuatan yang cepat",

            "Sifat mengalir yang baik & anti susut",

            "Mampu mengisi celah sempit",

            "Praktis, hanya dengan penambahan air"
        ],

        description:
            "Mortar instan siap pakai yang dapat digunakan sebagai grouting untuk pengisi celah dan perbaikan beton bermutu tinggi.",

        specs: {

            "Kemasan":
                "25 kg",

            "Kebutuhan air":
                "± 4 liter / sak 25 kg",

            "Daya sebar":
                "± 0,013 m² / sak 25 kg"
        },

        category:
            "mortar",

        showAll:
            true
    }

};


/* =====================================================
   TAMBAH PRODUK BARU
=====================================================

Contoh:

am90: {

    code: "AM 90",

    name: "Nama Produk",

    image: "produk/am90.png",

    intro: "Deskripsi singkat",

    suitable_for: "Interior & eksterior",

    features: [
        "Keunggulan 1",
        "Keunggulan 2",
        "Keunggulan 3"
    ],

    description: "Deskripsi lengkap",

    specs: {
        "Kemasan": "40 kg",
        "Daya sebar": "± 2 m² / sak"
    },

    category: "mortar",

    showAll: true
}

=========================================================
*/


/* =====================================================
   HELPER
===================================================== */

function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}

function escapeHTML(value){

    return String(value ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
}


function getProductEntries(){

    return Object.entries(PRODUCTS);
}


function getProductId(){

    const params =
        new URLSearchParams(window.location.search);

    return params.get("id");
}


function getWhatsAppURL(message){

    let base =
        SITE_CONFIG.links.whatsapp ||
        `https://wa.me/${SITE_CONFIG.company.whatsapp}`;

    const separator =
        base.includes("?") ? "&" : "?";

    return `${base}${separator}text=${encodeURIComponent(message)}`;
}


/* =====================================================
   SITE CONFIG
===================================================== */

function applySiteConfig(){

    const config = SITE_CONFIG;

    document.title =
        `${config.company.name} - Solusi Bahan Bangunan`;

    const headerLogo =
        $("#headerLogo");

    if(headerLogo){
        headerLogo.src =
            config.branding.logo_header;
    }

    const footerLogo =
        $("#footerLogo");

    if(footerLogo){
        footerLogo.src =
            config.branding.logo_footer;
    }

    const heroSubtitle =
        $("#heroSubtitle");

    if(heroSubtitle){
        heroSubtitle.textContent =
            config.hero.subtitle;
    }

    const heroTitle1 =
        $("#heroTitle1");

    if(heroTitle1){
        heroTitle1.textContent =
            config.hero.title_line1;
    }

    const heroTitle2 =
        $("#heroTitle2");

    if(heroTitle2){
        heroTitle2.textContent =
            config.hero.title_line2;
    }

    const heroDescription =
        $("#heroDescription");

    if(heroDescription){
        heroDescription.textContent =
            config.hero.description;
    }

    const footerDescription =
        $("#footerDescription");

    if(footerDescription){
        footerDescription.textContent =
            config.company.description;
    }

    const aboutName =
        $("#aboutName");

    if(aboutName){
        aboutName.textContent =
            config.company.name;
    }

    const aboutDescription =
        $("#aboutDescription");

    if(aboutDescription){
        aboutDescription.textContent =
            config.company.description;
    }

    const footerPhone =
        $("#footerPhone");

    if(footerPhone){
        footerPhone.textContent =
            `☎ ${config.company.phone}`;
    }

    const footerEmail =
        $("#footerEmail");

    if(footerEmail){
        footerEmail.textContent =
            `✉ ${config.company.email}`;
    }

    const footerAddress =
        $("#footerAddress");

    if(footerAddress){
        footerAddress.textContent =
            `📍 ${config.company.address}`;
    }

    const year =
        $("#footerYear");

    if(year){
        year.textContent =
            new Date().getFullYear();
    }

    const heroWhatsapp =
        $("#heroWhatsapp");

    if(heroWhatsapp){

        heroWhatsapp.href =
            getWhatsAppURL(
                "Halo Mortar Kita 👋\n\nSaya ingin konsultasi mengenai produk Mortar Kita.\n\nMohon informasi lebih lanjut. Terima kasih."
            );
    }
}


/* =====================================================
   SOCIAL MEDIA
===================================================== */

function renderSocialLinks(){

    const container =
        $("#socialLinks");

    const section =
        $("#socialSection");

    if(!container){
        return;
    }

    const social = [

        {
            key:"instagram",
            name:"Instagram",
            icon:"◎"
        },

        {
            key:"tiktok",
            name:"TikTok",
            icon:"♪"
        },

        {
            key:"facebook",
            name:"Facebook",
            icon:"f"
        },

        {
            key:"shopee",
            name:"Shopee",
            icon:"S"
        },

        {
            key:"tokopedia",
            name:"Tokopedia",
            icon:"T"
        }
    ];

    const active =
        social.filter(
            item =>
                SITE_CONFIG.links[item.key]
        );

    if(active.length === 0){

        if(section){
            section.style.display =
                "none";
        }

        return;
    }

    container.innerHTML =
        active.map(item => {

            const url =
                SITE_CONFIG.links[item.key];

            return `
                <a
                    class="social-link"
                    href="${escapeHTML(url)}"
                    target="_blank"
                    rel="noopener noreferrer">

                    <span class="social-icon">
                        ${escapeHTML(item.icon)}
                    </span>

                    <span class="social-name">
                        ${escapeHTML(item.name)}
                    </span>

                </a>
            `;

        }).join("");
}


/* =====================================================
   KATEGORI
===================================================== */

function getCategories(){

    const categories = {};

    getProductEntries().forEach(
        ([id, product]) => {

            const category =
                product.category ||
                "lainnya";

            if(!categories[category]){
                categories[category] = [];
            }

            categories[category].push({
                id,
                product
            });
        }
    );

    return categories;
}


function getCategoryLabel(category){

    return CATEGORY_LABELS[category] ||
        category
            .replaceAll("-"," ")
            .replace(/\b\w/g,
                char => char.toUpperCase()
            );
}


function renderCategoryButtons(){

    const container =
        $("#productCategories");

    if(!container){
        return;
    }

    const categories =
        getCategories();

    let html = `
        <button
            type="button"
            class="category-btn active"
            data-category="all">

            Semua Produk

        </button>
    `;

    Object.keys(categories)
        .forEach(category => {

            html += `
                <button
                    type="button"
                    class="category-btn"
                    data-category="${escapeHTML(category)}">

                    ${escapeHTML(
                        getCategoryLabel(category)
                    )}

                </button>
            `;
        });

    container.innerHTML = html;

    $$("#productCategories .category-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    $$("#productCategories .category-btn")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                    button.classList.add("active");

                    renderProducts(
                        button.dataset.category
                    );
                }
            );
        });
}


/* =====================================================
   RENDER PRODUK
===================================================== */

function renderProducts(category = "all"){

    const grid =
        $("#productGrid");

    if(!grid){
        return;
    }

    let products =
        getProductEntries();

    if(category !== "all"){

        products =
            products.filter(
                ([id, product]) =>
                    product.category === category
            );
    }
    else{

        products =
            products.filter(
                ([id, product]) =>
                    product.showAll !== false
            );
    }

    if(products.length === 0){

        grid.innerHTML = `
            <div
                class="image-placeholder"
                style="grid-column:1/-1">

                Belum ada produk pada kategori ini.

            </div>
        `;

        return;
    }

    grid.innerHTML =
        products.map(
            ([id, product]) => {

                return `
                    <article
                        class="product-card">

                        <a
                            href="product-detail.html?id=${encodeURIComponent(id)}">

                            <div class="product-image">

                                <img
                                    src="${escapeHTML(product.image)}"
                                    alt="${escapeHTML(product.code)} - ${escapeHTML(product.name)}"
                                    loading="lazy"
                                    onerror="this.style.display='none';">

                            </div>

                            <div class="product-info">

                                <div class="product-code">
                                    ${escapeHTML(product.code)}
                                </div>

                                <h3>
                                    ${escapeHTML(product.name)}
                                </h3>

                                <p>
                                    ${escapeHTML(product.intro)}
                                </p>

                                <span class="product-btn">
                                    LIHAT PRODUK →
                                </span>

                            </div>

                        </a>

                    </article>
                `;
            }
        ).join("");
}


/* =====================================================
   FOOTER CATEGORY
===================================================== */

function renderFooterCategories(){

    const container =
        $("#footerCategories");

    if(!container){
        return;
    }

    const categories =
        getCategories();

    container.innerHTML =
        Object.keys(categories)
            .map(category => {

                return `
                    <a
                        href="index.html#produk"
                        data-footer-category="${escapeHTML(category)}">

                        ${escapeHTML(
                            getCategoryLabel(category)
                        )}

                    </a>
                `;

            }).join("");

    $$("[data-footer-category]")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const category =
                        link.dataset.footerCategory;

                    sessionStorage.setItem(
                        "selectedCategory",
                        category
                    );
                }
            );
        });
}


/* =====================================================
   MENU
===================================================== */

function initMenu(){

    const menu =
        $("#navMenu");

    const toggle =
        $("#menuToggle");

    if(!menu || !toggle){
        return;
    }

    toggle.addEventListener(
        "click",
        () => {

            const active =
                menu.classList.toggle("active");

            toggle.setAttribute(
                "aria-expanded",
                active ? "true" : "false"
            );
        }
    );

    $$(
        "#navMenu a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "active"
                );

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );
    });
}


/* =====================================================
   DETAIL PRODUCT
===================================================== */

function renderProductDetail(){

    const detail =
        $("#productDetail");

    if(!detail){
        return;
    }

    const id =
        getProductId();

    const product =
        PRODUCTS[id];

    if(!product){

        detail.innerHTML = `
            <div
                style="
                    grid-column:1/-1;
                    padding:60px 20px;
                    text-align:center;">

                <h2>
                    Produk tidak ditemukan
                </h2>

                <p style="margin:15px 0;">
                    Produk yang Anda cari belum tersedia.
                </p>

                <a
                    href="index.html#produk"
                    style="
                        display:inline-block;
                        background:#f58220;
                        color:#fff;
                        padding:12px 20px;
                        border-radius:4px;
                        font-weight:bold;">

                    KEMBALI KE PRODUK

                </a>

            </div>
        `;

        return;
    }

    document.title =
        `${product.code} - ${product.name} | Mortar Kita`;

    const image =
        $("#productImage");

    if(image){

        image.src =
            product.image;

        image.alt =
            `${product.code} - ${product.name}`;
    }

    const code =
        $("#productCode");

    if(code){
        code.textContent =
            product.code;
    }

    const name =
        $("#productName");

    if(name){
        name.textContent =
            product.name;
    }

    const intro =
        $("#productIntro");

    if(intro){
        intro.textContent =
            product.intro ||
            product.description ||
            "";
    }

    const suitable =
        $("#productSuitable");

    if(suitable){
        suitable.textContent =
            product.suitable_for ||
            "-";
    }

    const consult =
        $("#consult");

    if(consult){

        consult.href =
            getWhatsAppURL(
                `Halo Mortar Kita, saya ingin konsultasi mengenai ${product.code} - ${product.name}.`
            );
    }

    renderAdvantages(product);

    renderDescription(product);

    renderSpecifications(product);

    renderRelatedProducts(id);
}


/* =====================================================
   KEUNGGULAN DETAIL
===================================================== */

function renderAdvantages(product){

    const container =
        $("#advantages");

    if(!container){
        return;
    }

    container.innerHTML =
        (product.features || [])
            .map(feature => {

                return `
                    <article
                        class="feature-card">

                        <div class="check">
                            ✓
                        </div>

                        <h3>
                            ${escapeHTML(feature)}
                        </h3>

                    </article>
                `;

            }).join("");
}


/* =====================================================
   DESKRIPSI
===================================================== */

function renderDescription(product){

    const container =
        $("#description");

    if(!container){
        return;
    }

    container.innerHTML = `
        <p>
            ${escapeHTML(
                product.description ||
                product.intro ||
                ""
            )}
        </p>
    `;
}


/* =====================================================
   SPESIFIKASI
===================================================== */

function renderSpecifications(product){

    const container =
        $("#specification");

    if(!container){
        return;
    }

    const specs =
        product.specs || {};

    container.innerHTML =
        Object.entries(specs)
            .map(
                ([key,value]) => {

                    return `
                        <div class="spec-row">

                            <dt>
                                ${escapeHTML(key)}
                            </dt>

                            <dd>
                                ${escapeHTML(value)}
                            </dd>

                        </div>
                    `;
                }
            ).join("");
}


/* =====================================================
   PRODUK TERKAIT
===================================================== */

function renderRelatedProducts(currentId){

    const container =
        $("#related");

    if(!container){
        return;
    }

    const current =
        PRODUCTS[currentId];

    let related =
        getProductEntries()
            .filter(
                ([id, product]) =>
                    id !== currentId &&
                    product.category ===
                    current?.category
            )
            .slice(0,4);

    /*
    Jika kategori yang sama kurang dari 4,
    ambil produk lain.
    */

    if(related.length < 4){

        const additional =
            getProductEntries()
                .filter(
                    ([id]) =>
                        id !== currentId &&
                        !related.some(
                            ([relatedId]) =>
                                relatedId === id
                        )
                )
                .slice(
                    0,
                    4 - related.length
                );

        related =
            [...related, ...additional];
    }

    container.innerHTML =
        related.map(
            ([id, product]) => {

                return `
                    <a
                        class="related-card"
                        href="product-detail.html?id=${encodeURIComponent(id)}">

                        <div class="related-img">

                            <img
                                src="${escapeHTML(product.image)}"
                                alt="${escapeHTML(product.code)} - ${escapeHTML(product.name)}"
                                loading="lazy">

                        </div>

                        <div class="related-body">

                            <span>
                                ${escapeHTML(product.code)}
                            </span>

                            <h3>
                                ${escapeHTML(product.name)}
                            </h3>

                            <b>
                                LIHAT PRODUK →
                            </b>

                        </div>

                    </a>
                `;
            }
        ).join("");
}


/* =====================================================
   INDEX
===================================================== */

function initIndex(){

    if(!$("#productGrid")){
        return;
    }

    renderCategoryButtons();

    renderProducts("all");

    renderFooterCategories();

    /*
    Jika user datang dari link kategori footer,
    buka kategori tersebut.
    */

    const selectedCategory =
        sessionStorage.getItem(
            "selectedCategory"
        );

    if(selectedCategory){

        sessionStorage.removeItem(
            "selectedCategory"
        );

        const button =
            document.querySelector(
                `[data-category="${selectedCategory}"]`
            );

        if(button){

            $$("#productCategories .category-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            renderProducts(
                selectedCategory
            );

            setTimeout(() => {

                const section =
                    $("#produk");

                if(section){
                    section.scrollIntoView({
                        behavior:"smooth"
                    });
                }

            },100);
        }
    }
}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applySiteConfig();

        renderSocialLinks();

        initMenu();

        initIndex();

        renderProductDetail();

    }
);
