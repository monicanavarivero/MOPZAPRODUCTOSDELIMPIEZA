// Estructura completa de Categorías y Productos
const catalogCategories = [
  {
    category: "1. LIMPIEZA PARA ESTABLECIMIENTOS",
    subcategories: [
      {
        sub: "Limpiadores",
        products: [
          { name: "Cloro desinfectante C/20LTS", price: 160 },
          { name: "Fabuloso C/20LTS", price: 180 },
          { name: "Pino limpiador C/20 LTS", price: 210 },
          { name: "Shampoo para manos C/20 LTS", price: 350 },
          { name: "Lavatrastes C/20 LTS", price: 360 },
          { name: "Lavatrastes ultra C/20 LTS", price: 380 },
          { name: "Elimina olores C/20 LTS", price: 400 },
          { name: "Quitacochambre C/20 LTS", price: 450 },
          { name: "Desengrasante C/20 LTS", price: 420 },
          { name: "Ácido muriático C/1 LTS", price: 25 },
          { name: "Maestro limpiador C/20 LTS", price: 200 },
          { name: "Sarricida C/20 LTS", price: 320 },
          { name: "Limpiavidrios C/20 LTS", price: 290 },
          { name: "Aromatizante ambiental C/20 LTS", price: 380 },
          { name: "Papel higiénico C/12 ROLLOS", price: 380 },
          { name: "Toalla en rollo cafe C/6 ROLLOS", price: 350 },
          { name: "Toalla en rollo blanca C/6 ROLLOS", price: 380 },
          { name: "Toalla interdoblada C/2000 PIEZAS", price: 280 },
          { name: "Caja de servilletas", price: 500 },
          { name: "Jabón en polvo 9 KG", price: 290 },
          { name: "Jabón corporal C/20 LTS", price: 450 },
          { name: "Shampoo C/20 LTS", price: 500 },
          { name: "Shampoo transparente C/20 LTS", price: 470 },
          { name: "Shampoo Pantene", price: 500 },
          { name: "Aromas concentrados", price: "Cotizar" },
          { name: "Gel antibacterial C/20 LTS", price: 750 },
          { name: "Shampoo para manos espuma C/20 LTS", price: 450 },
          { name: "Aromatizantes para interiores C/20 LTS", price: 180 }
        ]
      }
    ]
  },
  {
    category: "2. UTENCILIOS DE LIMPIEZA",
    subcategories: [
      {
        sub: "Productos",
        products: [
          { name: "Caja guantes nitrilo", price: 230 },
          { name: "Cepillos para WC PIEZA", price: 50 }, 
          { name: "Bolsa chica 90x120", price: 65 },
          { name: "Bolsa mediana 60x90", price: 65 },
          { name: "Bolsa grande 50x70", price: 65 },
          { name: "Bolsa camiseta mediana", price: 65 },
          { name: "Cubetas PIEZA", price: 130 },
          { name: "Trapeadores PIEZA", price: 85 },
          { name: "Escobas PIEZA", price: 85 },
          { name: "Jaladores PIEZA", price: 85 },
          { name: "Plumeros / destapadores PIEZA", price: 75 },
          { name: "Recogedores PIEZA", price: 50 },
          { name: "Fibra scoth brite PIEZA", price: 28 },
          { name: "Fibra metalica acero jumbo PIEZA", price: 17 },
          { name: "Microfibras PIEZA", price: 25 },
          { name: "Guantes PIEZA", price: 30 },
          { name: "Tapete mijitorio PIEZA", price: 80 },
          { name: "Atomizadores PIEZA", price: 35 }
        ]
      }
    ]
  },
  {
    category: "3. CUIDADO TEXTIL",
    subcategories: [
      {
        sub: "Productos de lavado",
        products: [
          { name: "Mas color C/20 LTS", price: 380 },
          { name: "Mas color negro C/20 LTS", price: 380 },
          { name: "Suavizante de telas C/20 LTS", price: 290 },
          { name: "Zote pinol C/20 LTS", price: 410 },
          { name: "Vanish C/20 LTS", price: 360 },
          { name: "Plancha facil C/20 LTS", price: 350 },
          { name: "Reforzador de olores C/20 LTS", price: 380 }
        ]
      }
    ]
  },
  {
    category: "4. CUIDADO AUTOMOTRIZ",
    subcategories: [
      {
        sub: "Lavado exterior, interior, motor y llantas",
        products: [
          { name: "Shampoo para autos C/20 LTS", price: 370 },
          { name: "Cera liquida C/20 LTS", price: 700 },
          { name: "Almorol C/20 LTS", price: 460 },
          { name: "Brillo para llantas C/20 LTS", price: 460 },
          { name: "Abrillantador para llantas en gel C/20 LTS", price: 750 },
          { name: "Desengrasante de motor C/20 LTS", price: 470 },
          { name: "Desengrasante interiores auto C/20 LTS", price: 420 },
          { name: "Desengrasante de palomilla C/20 LTS", price: 580 },
          { name: "Glicerina", price: 450 },
          { name: "Limpiador para interiores C/20 LTS", price: 420 },
          { name: "Aromatizante para auto C/20 LTS", price: 380 }
        ]
      }
    ]
  }
];

// Almacén de listas por giro
const giroProductsData = {
  'Restaurantes': ['Cloro desinfectante C/20LTS', 'Lavatrastes C/20 LTS', 'Quitacochambre C/20 LTS', 'Desengrasante C/20 LTS', 'Fibras pieza'],
  'Hoteles': ['Papel higiénico C/12 ROLLOS', 'Toalla en rollo blanca C/6 ROLLOS', 'Jabón corporal C/20 LTS', 'Shampoo C/20 LTS', 'Aromatizante ambiental C/20 LTS'],
  'Gimnasios': ['Cloro desinfectante C/20LTS', 'Limpiavidrios C/20 LTS', 'Toalla interdoblada C/2000 PIEZAS', 'Jabón para manos C/20 LTS'],
  'Lavanderías': ['Jabón en polvo 9 KG', 'Suavizante de telas C/20 LTS', 'Vanish C/20 LTS', 'Mas color C/20 LTS'],
  'Escuelas': ['Cloro desinfectante C/20LTS', 'Pino limpiador C/20 LTS', 'Jabón para manos C/20 LTS', 'Papel higiénico C/12 ROLLOS', 'Bolsa grande'],
  'Autolavados': ['Shampoo para autos C/20 LTS', 'Cera liquida C/20 LTS', 'Almorol C/20 LTS', 'Brillo para llantas C/20 LTS', 'Microfibras PIEZA'],
  'Oficinas': ['Limpiavidrios C/20 LTS', 'Aromatizante ambiental C/20 LTS', 'Papel higiénico C/12 ROLLOS', 'Fabuloso C/20LTS'],
  'Iglesias': ['Pino limpiador C/20 LTS', 'Aromatizante ambiental C/20 LTS', 'Papel higiénico C/12 ROLLOS', 'Escobas PIEZA', 'Trapeadores PIEZA']
};

let currentGiro = '';

// ==================== NAVEGACIÓN Y PÁGINAS ====================
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const selectedPage = document.getElementById(`page-${pageId}`);
  if (selectedPage) {
    selectedPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navLinks = document.getElementById('navLinks');
  if (navLinks && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
}

// Menú Móvil
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
}

// ==================== RENDERING DE CATÁLOGO AGRUPADO ====================
function renderCatalogGrouped(categories) {
  const container = document.getElementById('catalogContainer');
  if (!container) return;
  
  container.innerHTML = '';

  categories.forEach(catGroup => {
    const block = document.createElement('div');
    block.className = 'category-block';

    let blockHTML = `<h2 class="category-title">${catGroup.category}</h2>`;

    catGroup.subcategories.forEach(subGroup => {
      if (subGroup.sub && subGroup.sub !== "General" && subGroup.sub !== "Limpiadores" && subGroup.sub !== "Productos") {
        blockHTML += `<h3 class="subcategory-title">${subGroup.sub}</h3>`;
      }

      blockHTML += `<ul class="product-list">`;
      subGroup.products.forEach(prod => {
        const formattedPrice = typeof prod.price === 'number' 
          ? `$${prod.price.toFixed(2)} MXN` 
          : prod.price;

        blockHTML += `
          <li class="product-item">
            <span class="product-name">${prod.name}</span>
            <span class="product-price">${formattedPrice}</span>
          </li>
        `;
      });
      blockHTML += `</ul>`;
    });

    block.innerHTML = blockHTML;
    container.appendChild(block);
  });
}

// Filtrar productos manteniendo categorías
function filterProducts() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase();
  
  if (!query) {
    renderCatalogGrouped(catalogCategories);
    return;
  }

  const filtered = catalogCategories.map(catGroup => {
    const matchingSubs = catGroup.subcategories.map(subGroup => {
      const matchingProds = subGroup.products.filter(p => p.name.toLowerCase().includes(query));
      return { ...subGroup, products: matchingProds };
    }).filter(subGroup => subGroup.products.length > 0);

    return { ...catGroup, subcategories: matchingSubs };
  }).filter(catGroup => catGroup.subcategories.length > 0);

  renderCatalogGrouped(filtered);
}

// ==================== MODAL DE GIROS ====================
function showGiroProducts(giro) {
  currentGiro = giro;
  const modalTitle = document.getElementById('modalTitle');
  const giroModal = document.getElementById('giroModal');
  
  if (modalTitle) modalTitle.innerText = `Productos sugeridos para ${giro}`;
  renderGiroList();
  if (giroModal) giroModal.style.display = 'block';
}

function renderGiroList() {
  const listContainer = document.getElementById('giroProductList');
  if (!listContainer || !giroProductsData[currentGiro]) return;

  listContainer.innerHTML = '';
  giroProductsData[currentGiro].forEach(prod => {
    const li = document.createElement('li');
    li.textContent = prod;
    listContainer.appendChild(li);
  });
}

function addGiroProduct() {
  const input = document.getElementById('newGiroProduct');
  if (!input) return;

  const val = input.value.trim();
  if (val && currentGiro) {
    if (!giroProductsData[currentGiro]) {
      giroProductsData[currentGiro] = [];
    }
    giroProductsData[currentGiro].push(val);
    input.value = '';
    renderGiroList();
  }
}

function closeModal() {
  const giroModal = document.getElementById('giroModal');
  if (giroModal) giroModal.style.display = 'none';
}

// ==================== ANIMACIONES EN SCROLL ====================
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Formulario de Contacto
function handleFormSubmit(e) {
  e.preventDefault();
  alert('¡Gracias por comunicarte con Mopza! Nos pondremos en contacto contigo a la brevedad.');
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.reset();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderCatalogGrouped(catalogCategories);
  setupScrollAnimations();
});
