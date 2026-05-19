const products = [
  {
    id: "p-aurora-jacket",
    name: "Aurora Weather Jacket",
    category: "Fashion",
    price: 148,
    compareAt: 190,
    rating: 4.8,
    stock: 18,
    sale: true,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
    description: "Water-repellent shell with a soft matte finish, hidden pockets, and city-ready tailoring."
  },
  {
    id: "p-pulse-headphones",
    name: "Pulse ANC Headphones",
    category: "Tech",
    price: 220,
    compareAt: 260,
    rating: 4.7,
    stock: 12,
    sale: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Wireless noise-canceling headphones with 34-hour battery life and warm studio tuning."
  },
  {
    id: "p-studio-lamp",
    name: "Studio Arc Lamp",
    category: "Home",
    price: 134,
    compareAt: null,
    rating: 4.6,
    stock: 9,
    sale: false,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description: "Sculptural dimmable lamp with a linen shade, brushed metal stem, and warm ambient glow."
  },
  {
    id: "p-cloud-sneaker",
    name: "Cloudline Runner",
    category: "Fashion",
    price: 126,
    compareAt: 155,
    rating: 4.9,
    stock: 26,
    sale: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Responsive everyday sneaker built with recycled mesh, cushioned foam, and grip outsole."
  },
  {
    id: "p-nomad-weekender",
    name: "Nomad Weekender",
    category: "Travel",
    price: 178,
    compareAt: null,
    rating: 4.5,
    stock: 7,
    sale: false,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description: "Cabin-friendly carryall with vegan leather trim, shoe pocket, and padded device sleeve."
  },
  {
    id: "p-ritual-kit",
    name: "Ritual Recovery Kit",
    category: "Wellness",
    price: 74,
    compareAt: 92,
    rating: 4.4,
    stock: 21,
    sale: true,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    description: "Daily reset set with mineral soak, botanical mist, ceramic gua sha, and cotton wrap."
  },
  {
    id: "p-orbit-watch",
    name: "Orbit Smartwatch",
    category: "Tech",
    price: 310,
    compareAt: 350,
    rating: 4.8,
    stock: 5,
    sale: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30e?auto=format&fit=crop&w=900&q=80",
    description: "Health tracking watch with sapphire glass, GPS, sleep coaching, and weeklong battery."
  },
  {
    id: "p-linen-throw",
    name: "Linen Lounge Throw",
    category: "Home",
    price: 88,
    compareAt: null,
    rating: 4.3,
    stock: 0,
    sale: false,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
    description: "Textured linen-cotton blanket woven for breathable comfort and relaxed layered styling."
  },
  {
    id: "p-ceramic-bottle",
    name: "Ceramic Hydration Bottle",
    category: "Wellness",
    price: 48,
    compareAt: null,
    rating: 4.1,
    stock: 33,
    sale: false,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    description: "Insulated stainless bottle with ceramic interior, leakproof cap, and soft-touch coating."
  },
  {
    id: "p-carry-tech",
    name: "Carry Tech Organizer",
    category: "Travel",
    price: 58,
    compareAt: 76,
    rating: 4.6,
    stock: 14,
    sale: true,
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=900&q=80",
    description: "Compact organizer for chargers, cards, earbuds, and travel essentials in one slim case."
  },
  {
    id: "p-espresso-maker",
    name: "Barista Mini Brewer",
    category: "Home",
    price: 286,
    compareAt: 320,
    rating: 4.7,
    stock: 6,
    sale: true,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
    description: "Compact espresso brewer with pressure control, fast heat-up, and stainless accessories."
  },
  {
    id: "p-tailored-shirt",
    name: "Tailored Oxford Shirt",
    category: "Fashion",
    price: 96,
    compareAt: null,
    rating: 4.2,
    stock: 20,
    sale: false,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80",
    description: "Crisp organic cotton shirt with relaxed structure, mother-of-pearl buttons, and clean cuffs."
  }
];

const collections = [
  {
    title: "Fashion essentials",
    label: "12 new pieces",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Connected tech",
    label: "Audio, wearables, carry",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Home atmosphere",
    label: "Warm, useful, refined",
    category: "Home",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Travel system",
    label: "Built for movement",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  }
];

const state = {
  query: "",
  category: "all",
  maxPrice: 350,
  inStockOnly: false,
  saleOnly: false,
  minRating: 0,
  sort: "featured",
  cart: JSON.parse(localStorage.getItem("aurum-cart") || "{}"),
  wishlist: JSON.parse(localStorage.getItem("aurum-wishlist") || "[]"),
  activeModalProduct: null
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const elements = {
  productGrid: document.querySelector("#product-grid"),
  collectionGrid: document.querySelector("#collection-grid"),
  quickCategories: document.querySelector("#quick-categories"),
  resultCount: document.querySelector("#result-count"),
  emptyState: document.querySelector("#empty-state"),
  search: document.querySelector("#site-search"),
  category: document.querySelector("#category-filter"),
  price: document.querySelector("#price-filter"),
  priceValue: document.querySelector("#price-value"),
  stock: document.querySelector("#stock-filter"),
  sale: document.querySelector("#sale-filter"),
  sort: document.querySelector("#sort-filter"),
  rating: document.querySelector("#rating-filter"),
  reset: document.querySelector("#reset-filters"),
  filters: document.querySelector(".filters"),
  mobileFilterOpen: document.querySelector("#mobile-filter-open"),
  cartDrawer: document.querySelector("#cart-drawer"),
  wishlistDrawer: document.querySelector("#wishlist-drawer"),
  cartOpen: document.querySelector("#cart-open"),
  wishlistOpen: document.querySelector("#wishlist-open"),
  cartItems: document.querySelector("#cart-items"),
  wishlistItems: document.querySelector("#wishlist-items"),
  cartCount: document.querySelector("#cart-count"),
  wishlistCount: document.querySelector("#wishlist-count"),
  subtotal: document.querySelector("#cart-subtotal"),
  tax: document.querySelector("#cart-tax"),
  total: document.querySelector("#cart-total"),
  shippingMessage: document.querySelector("#shipping-message"),
  shippingProgress: document.querySelector("#shipping-progress"),
  checkout: document.querySelector("#checkout-button"),
  modal: document.querySelector("#product-modal"),
  modalClose: document.querySelector("#modal-close"),
  modalImage: document.querySelector("#modal-image"),
  modalCategory: document.querySelector("#modal-category"),
  modalTitle: document.querySelector("#modal-title"),
  modalDescription: document.querySelector("#modal-description"),
  modalRating: document.querySelector("#modal-rating"),
  modalStock: document.querySelector("#modal-stock"),
  modalPrice: document.querySelector("#modal-price"),
  modalAdd: document.querySelector("#modal-add"),
  themeToggle: document.querySelector("#theme-toggle"),
  newsletter: document.querySelector(".newsletter")
};

function formatPrice(value) {
  return currency.format(value);
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function persist() {
  localStorage.setItem("aurum-cart", JSON.stringify(state.cart));
  localStorage.setItem("aurum-wishlist", JSON.stringify(state.wishlist));
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function productMatches(product) {
  const query = state.query.trim().toLowerCase();
  const matchesQuery = [product.name, product.category, product.description]
    .join(" ")
    .toLowerCase()
    .includes(query);
  const matchesCategory = state.category === "all" || product.category === state.category;
  const matchesPrice = product.price <= state.maxPrice;
  const matchesStock = !state.inStockOnly || product.stock > 0;
  const matchesSale = !state.saleOnly || product.sale;
  const matchesRating = product.rating >= state.minRating;

  return matchesQuery && matchesCategory && matchesPrice && matchesStock && matchesSale && matchesRating;
}

function sortProducts(items) {
  const sorted = [...items];
  if (state.sort === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  }
  if (state.sort === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  }
  if (state.sort === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  return sorted;
}

function renderCollections() {
  elements.collectionGrid.innerHTML = collections
    .map(
      (collection) => `
        <button class="collection-card" type="button" data-collection="${collection.category}">
          <img src="${collection.image}" alt="${collection.title}" loading="lazy" />
          <div>
            <h3>${collection.title}</h3>
            <span>${collection.label}</span>
          </div>
        </button>
      `
    )
    .join("");
}

function renderQuickCategories() {
  const categories = ["all", ...new Set(products.map((product) => product.category))];
  elements.quickCategories.innerHTML = categories
    .map(
      (category) => `
        <button type="button" class="${state.category === category ? "active" : ""}" data-category="${category}">
          ${category === "all" ? "All" : category}
        </button>
      `
    )
    .join("");
}

function renderProducts() {
  const visibleProducts = sortProducts(products.filter(productMatches));
  elements.resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"}`;
  elements.emptyState.hidden = visibleProducts.length > 0;

  elements.productGrid.innerHTML = visibleProducts
    .map((product) => {
      const isSaved = state.wishlist.includes(product.id);
      const stockLabel = product.stock > 0 ? `${product.stock} left` : "Sold out";
      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${product.sale ? '<span class="sale-pill">Sale</span>' : ""}
            <span class="stock-pill">${stockLabel}</span>
            <button class="icon-button favorite-button ${isSaved ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Save ${product.name}">
              <i data-lucide="heart"></i>
            </button>
          </div>
          <div class="product-copy">
            <span class="product-kicker">${product.category}</span>
            <div class="product-title-row">
              <h3>${product.name}</h3>
              <span class="rating-row">${product.rating.toFixed(1)}</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="price-row">
              <strong>${formatPrice(product.price)}</strong>
              ${product.compareAt ? `<del>${formatPrice(product.compareAt)}</del>` : ""}
            </div>
            <div class="card-actions">
              <button class="add-button" type="button" data-add="${product.id}" ${product.stock === 0 ? "disabled" : ""}>
                ${product.stock === 0 ? "Sold out" : "Add to cart"}
              </button>
              <button class="details-button" type="button" data-details="${product.id}" aria-label="View ${product.name}">
                <i data-lucide="eye"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  refreshIcons();
}

function renderCart() {
  const entries = Object.entries(state.cart);
  const itemCount = entries.reduce((total, [, quantity]) => total + quantity, 0);
  const subtotal = entries.reduce((total, [id, quantity]) => total + getProduct(id).price * quantity, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;
  const freeShippingTarget = 120;
  const shippingRemaining = Math.max(0, freeShippingTarget - subtotal);
  const shippingPercent = Math.min(100, (subtotal / freeShippingTarget) * 100);

  elements.cartCount.textContent = itemCount;
  elements.subtotal.textContent = formatPrice(subtotal);
  elements.tax.textContent = formatPrice(tax);
  elements.total.textContent = formatPrice(total);
  elements.shippingMessage.textContent =
    subtotal >= freeShippingTarget ? "Unlocked" : `${formatPrice(shippingRemaining)} away`;
  elements.shippingProgress.style.width = `${shippingPercent}%`;

  if (!entries.length) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        <i data-lucide="shopping-bag"></i>
        <h3>Your cart is empty</h3>
        <p>Fresh picks are waiting in new arrivals.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  elements.cartItems.innerHTML = entries
    .map(([id, quantity]) => {
      const product = getProduct(id);
      return `
        <div class="drawer-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <div class="drawer-line">
              <h3>${product.name}</h3>
              <button type="button" data-remove="${product.id}" aria-label="Remove ${product.name}">
                <i data-lucide="x"></i>
              </button>
            </div>
            <p class="product-kicker">${product.category}</p>
            <div class="drawer-line">
              <strong>${formatPrice(product.price * quantity)}</strong>
              <div class="quantity-controls" aria-label="Quantity for ${product.name}">
                <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity">-</button>
                <span>${quantity}</span>
                <button type="button" data-increase="${product.id}" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  refreshIcons();
}

function renderWishlist() {
  elements.wishlistCount.textContent = state.wishlist.length;

  if (!state.wishlist.length) {
    elements.wishlistItems.innerHTML = `
      <div class="empty-state">
        <i data-lucide="heart"></i>
        <h3>No saved items</h3>
        <p>Saved favorites will appear here.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  elements.wishlistItems.innerHTML = state.wishlist
    .map((id) => getProduct(id))
    .filter(Boolean)
    .map(
      (product) => `
        <div class="drawer-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <div class="drawer-line">
              <h3>${product.name}</h3>
              <button type="button" data-wishlist-remove="${product.id}" aria-label="Remove ${product.name}">
                <i data-lucide="x"></i>
              </button>
            </div>
            <p class="product-kicker">${product.category}</p>
            <div class="drawer-line">
              <strong>${formatPrice(product.price)}</strong>
              <button class="text-button" type="button" data-add="${product.id}">Add</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  refreshIcons();
}

function renderAll() {
  renderQuickCategories();
  renderProducts();
  renderCart();
  renderWishlist();
  persist();
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product || product.stock === 0) return;
  const currentQuantity = state.cart[id] || 0;
  state.cart[id] = Math.min(product.stock, currentQuantity + 1);
  renderAll();
}

function updateQuantity(id, quantity) {
  const product = getProduct(id);
  if (!product) return;
  if (quantity <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = Math.min(product.stock, quantity);
  }
  renderAll();
}

function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter((item) => item !== id)
    : [...state.wishlist, id];
  renderAll();
}

function openDrawer(drawer) {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  refreshIcons();
}

function closeDrawers() {
  [elements.cartDrawer, elements.wishlistDrawer].forEach((drawer) => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("drawer-open");
}

function openProductModal(id) {
  const product = getProduct(id);
  if (!product) return;
  state.activeModalProduct = product.id;
  elements.modalImage.src = product.image;
  elements.modalImage.alt = product.name;
  elements.modalCategory.textContent = product.category;
  elements.modalTitle.textContent = product.name;
  elements.modalDescription.textContent = product.description;
  elements.modalRating.textContent = `${product.rating.toFixed(1)} rated`;
  elements.modalStock.textContent = product.stock > 0 ? `${product.stock} available` : "Sold out";
  elements.modalPrice.innerHTML = `
    <strong>${formatPrice(product.price)}</strong>
    ${product.compareAt ? `<del>${formatPrice(product.compareAt)}</del>` : ""}
  `;
  elements.modalAdd.disabled = product.stock === 0;
  elements.modalAdd.textContent = product.stock === 0 ? "Sold out" : "Add to cart";
  elements.modal.hidden = false;
  elements.modal.classList.add("open");
  document.body.classList.add("modal-open");
  refreshIcons();
}

function closeProductModal() {
  elements.modal.classList.remove("open");
  elements.modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function setCategory(category) {
  state.category = category;
  elements.category.value = category;
  renderAll();
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("aurum-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  elements.themeToggle.innerHTML = `<i data-lucide="${document.body.classList.contains("dark") ? "sun" : "moon"}"></i>`;
}

function bindEvents() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAll();
  });

  elements.category.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderAll();
  });

  elements.price.addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value);
    elements.priceValue.textContent = formatPrice(state.maxPrice);
    renderAll();
  });

  elements.stock.addEventListener("change", (event) => {
    state.inStockOnly = event.target.checked;
    renderAll();
  });

  elements.sale.addEventListener("change", (event) => {
    state.saleOnly = event.target.checked;
    renderAll();
  });

  elements.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderAll();
  });

  elements.rating.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    state.minRating = Number(button.dataset.rating);
    elements.rating.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderAll();
  });

  elements.reset.addEventListener("click", () => {
    state.query = "";
    state.category = "all";
    state.maxPrice = 350;
    state.inStockOnly = false;
    state.saleOnly = false;
    state.minRating = 0;
    state.sort = "featured";
    elements.search.value = "";
    elements.category.value = "all";
    elements.price.value = "350";
    elements.priceValue.textContent = "$350";
    elements.stock.checked = false;
    elements.sale.checked = false;
    elements.sort.value = "featured";
    elements.rating.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.rating === "0"));
    renderAll();
  });

  elements.quickCategories.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) setCategory(button.dataset.category);
  });

  elements.collectionGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-collection]");
    if (card) setCategory(card.dataset.collection);
  });

  elements.productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    const wishlistButton = event.target.closest("[data-wishlist]");
    const detailsButton = event.target.closest("[data-details]");

    if (addButton) addToCart(addButton.dataset.add);
    if (wishlistButton) toggleWishlist(wishlistButton.dataset.wishlist);
    if (detailsButton) openProductModal(detailsButton.dataset.details);
  });

  elements.cartItems.addEventListener("click", (event) => {
    const increase = event.target.closest("[data-increase]");
    const decrease = event.target.closest("[data-decrease]");
    const remove = event.target.closest("[data-remove]");

    if (increase) updateQuantity(increase.dataset.increase, (state.cart[increase.dataset.increase] || 0) + 1);
    if (decrease) updateQuantity(decrease.dataset.decrease, (state.cart[decrease.dataset.decrease] || 0) - 1);
    if (remove) updateQuantity(remove.dataset.remove, 0);
  });

  elements.wishlistItems.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-wishlist-remove]");
    const add = event.target.closest("[data-add]");
    if (remove) toggleWishlist(remove.dataset.wishlistRemove);
    if (add) addToCart(add.dataset.add);
  });

  elements.cartOpen.addEventListener("click", () => openDrawer(elements.cartDrawer));
  elements.wishlistOpen.addEventListener("click", () => openDrawer(elements.wishlistDrawer));

  document.querySelectorAll(".drawer").forEach((drawer) => {
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer || event.target.closest(".drawer-close")) {
        closeDrawers();
      }
    });
  });

  elements.mobileFilterOpen.addEventListener("click", () => {
    elements.filters.classList.toggle("open");
  });

  elements.modalClose.addEventListener("click", closeProductModal);
  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) closeProductModal();
  });

  elements.modalAdd.addEventListener("click", () => {
    if (state.activeModalProduct) {
      addToCart(state.activeModalProduct);
      closeProductModal();
      openDrawer(elements.cartDrawer);
    }
  });

  elements.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("aurum-theme", isDark ? "dark" : "light");
    elements.themeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
    refreshIcons();
  });

  elements.checkout.addEventListener("click", () => {
    const itemCount = Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
    const label = itemCount === 1 ? "item" : "items";
    elements.checkout.textContent = itemCount ? `Ready with ${itemCount} ${label}` : "Add items first";
    window.setTimeout(() => {
      elements.checkout.textContent = "Checkout preview";
    }, 1600);
  });

  elements.newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = elements.newsletter.querySelector("button");
    button.textContent = "Joined";
    window.setTimeout(() => {
      button.textContent = "Join";
      elements.newsletter.reset();
    }, 1400);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawers();
      closeProductModal();
      elements.filters.classList.remove("open");
    }
  });
}

initializeTheme();
renderCollections();
renderAll();
bindEvents();
refreshIcons();
