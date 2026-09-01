MORTAR KITA — FINAL FILE CONNECTIONS

index.html
  -> fetches products.json
  -> renders 6 products
  -> each card links to product-detail.html?id=<id>

product-detail.html
  -> loads product-detail.css
  -> loads product-detail.js
  -> product-detail.js fetches products.json
  -> image path comes from products.json (produk/am82.png etc.)

Required GitHub structure:
products/
  index.html
  product-detail.html
  product-detail.css
  product-detail.js
  products.json
  assets/
  background/
  produk/
    am82.png
    am83.png
    am86.png
    am87.png
    am88.png
    am89.png
