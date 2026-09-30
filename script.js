// ===============================
// LAMECIE BAKERY - INTERACTIVE JS
// ===============================

let cart = [];
let currentLanguage = "en";


// ===============================
// TRANSLATIONS
// ===============================

const translations = {

en: {

navHome: "Home",
navAbout: "About Us",
navMenu: "Menu",
navDrinks: "Drinks",
navOrder: "Order",
navContact: "Contact",

cart: "Cart",

welcome: "WELCOME TO LAMECIE",
heroTitle: "Cheesecake<br>made special.",
heroText: "Classic flavors, innovative creations, and desserts made to make every moment sweeter.",
explore: "Explore Our Menu",

ourStory: "OUR STORY",
aboutTitle: "More than just a bakery.",
aboutText1: "Lamecie Bakery is a premium dessert bakery located in Equipetrol, Santa Cruz. We specialize in high-quality cheesecakes and innovative desserts.",
aboutText2: "Our goal is to create a beautiful, cozy, and welcoming environment where customers can enjoy delicious desserts and have a memorable experience.",
owners: "Created by Lara Torres, Maciel Nassar & Martina Guzman.",

specialty: "OUR SPECIALTY",
cheesecakes: "Our Cheesecakes",
cheesecakeIntro: "Our signature cheesecakes combine classic flavors with creative and innovative combinations.",

classic: "Classic",
classicDesc: "Our traditional creamy cheesecake.",

redBerries: "Red Berries",
redBerriesDesc: "Creamy cheesecake with delicious red berries.",

oreoDesc: "A creamy cheesecake with an Oreo twist.",

chocolate: "Chocolate",
chocolateDesc: "Rich and creamy chocolate cheesecake.",

pistachio: "Pistachio",
pistachioDesc: "A smooth cheesecake with pistachio flavor.",

passion: "Passion Fruit",
passionDesc: "A fresh and fruity cheesecake.",

dulce: "Dulce de Leche",
dulceDesc: "Creamy cheesecake with dulce de leche.",

basqueDesc: "A beautifully caramelized Basque cheesecake.",

add: "+ Add to Order",

moreLove: "MORE TO LOVE",
desserts: "Our Desserts",

tarts: "Tarts",
tartsDesc: "Delicious and beautifully presented tarts.",

tiramisuDesc: "A classic Italian dessert with our Lamecie touch.",

cake: "Cake",
cakeDesc: "Beautiful cakes for everyday moments and celebrations.",

pavlovaDesc: "Light, elegant, and delicious.",

drinksTitleSmall: "SIP SOMETHING SPECIAL",
drinksTitle: "Our Drinks",
drinksIntro: "Complete your dessert experience with one of our drinks.",

espressoDesc: "A classic, rich espresso.",
latteDesc: "Smooth espresso with steamed milk.",
cappuccinoDesc: "Espresso, steamed milk, and foam.",

icedLatteDesc: "Espresso, chilled milk, and ice.",

essenceLabel: "Choose your essence:",
caramel: "Caramel",
chocEssence: "Chocolate",
vanilla: "Vanilla",

icedAmericanoDesc: "Espresso, cold water, and ice.",
frappuccinoDesc: "A cold, creamy blended coffee drink.",

limited: "LIMITED EDITION",
monthTitle: "Dessert of the Month",
monthText: "Every month, Lamecie will introduce something new, creative, and delicious.",
comingSoon: "Coming Soon",

orderSmall: "ORDER WITH US",
orderTitle: "Make it yours.",
orderText: "Choose your favorite desserts and place an order for pickup or delivery.",

namePlaceholder: "Your name",
instructionsPlaceholder: "Special instructions (optional)",
selectMethod: "Select pickup or delivery",
pickup: "Store Pickup",
delivery: "Delivery",
placeOrder: "Place Order",

visit: "COME VISIT US",
address: "Equipetrol, Santa Cruz de la Sierra, Bolivia",
social: "Follow us on Instagram & TikTok",

yourOrder: "Your Order",
emptyCart: "Your cart is empty 🍰",
total: "Total",
continueOrder: "Continue to Order",

rights: "All rights reserved."

},

es: {

navHome: "Inicio",
navAbout: "Nosotros",
navMenu: "Menú",
navDrinks: "Bebidas",
navOrder: "Ordenar",
navContact: "Contacto",

cart: "Carrito",

welcome: "BIENVENIDO A LAMECIE",
heroTitle: "Cheesecake<br>hecho especial.",
heroText: "Sabores clásicos, creaciones innovadoras y postres hechos para endulzar cada momento.",
explore: "Explora Nuestro Menú",

ourStory: "NUESTRA HISTORIA",
aboutTitle: "Mucho más que una pastelería.",
aboutText1: "Lamecie Bakery es una pastelería premium ubicada en Equipetrol, Santa Cruz. Nos especializamos en cheesecakes de alta calidad y postres innovadores.",
aboutText2: "Nuestro objetivo es crear un espacio hermoso, acogedor y agradable donde los clientes puedan disfrutar de deliciosos postres y vivir una experiencia memorable.",
owners: "Creado por Lara Torres, Maciel Nassar y Martina Guzman.",

specialty: "NUESTRA ESPECIALIDAD",
cheesecakes: "Nuestros Cheesecakes",
cheesecakeIntro: "Nuestros cheesecakes combinan sabores clásicos con combinaciones creativas e innovadoras.",

classic: "Clásico",
classicDesc: "Nuestro tradicional cheesecake cremoso.",

redBerries: "Frutos Rojos",
redBerriesDesc: "Cheesecake cremoso con deliciosos frutos rojos.",

oreoDesc: "Un cheesecake cremoso con un toque de Oreo.",

chocolate: "Chocolate",
chocolateDesc: "Cheesecake de chocolate rico y cremoso.",

pistachio: "Pistacho",
pistachioDesc: "Un cheesecake suave con sabor a pistacho.",

passion: "Maracuyá",
passionDesc: "Un cheesecake fresco y frutal.",

dulce: "Dulce de Leche",
dulceDesc: "Cheesecake cremoso con dulce de leche.",

basqueDesc: "Un delicioso cheesecake vasco caramelizado.",

add: "+ Agregar",

moreLove: "MÁS PARA DISFRUTAR",
desserts: "Nuestros Postres",

tarts: "Tartas",
tartsDesc: "Deliciosas tartas con una hermosa presentación.",

tiramisuDesc: "Un clásico postre italiano con el toque de Lamecie.",

cake: "Torta",
cakeDesc: "Hermosas tortas para celebraciones y momentos especiales.",

pavlovaDesc: "Ligera, elegante y deliciosa.",

drinksTitleSmall: "ACOMPAÑA TU POSTRE",
drinksTitle: "Nuestras Bebidas",
drinksIntro: "Completa tu experiencia con uno de nuestros deliciosos drinks.",

espressoDesc: "Un espresso clásico e intenso.",
latteDesc: "Espresso suave con leche vaporizada.",
cappuccinoDesc: "Espresso, leche vaporizada y espuma.",

icedLatteDesc: "Espresso, leche fría y hielo.",

essenceLabel: "Elige tu esencia:",
caramel: "Caramelo",
chocEssence: "Chocolate",
vanilla: "Vainilla",

icedAmericanoDesc: "Espresso, agua fría y hielo.",
frappuccinoDesc: "Una bebida fría, cremosa y mezclada con café.",

limited: "EDICIÓN LIMITADA",
monthTitle: "Postre del Mes",
monthText: "Cada mes, Lamecie presentará algo nuevo, creativo y delicioso.",
comingSoon: "Próximamente",

orderSmall: "ORDENA CON NOSOTROS",
orderTitle: "Hazlo tuyo.",
orderText: "Elige tus postres favoritos y realiza un pedido para recoger o recibir a domicilio.",

namePlaceholder: "Tu nombre",
instructionsPlaceholder: "Instrucciones especiales (opcional)",
selectMethod: "Selecciona recogida o delivery",
pickup: "Recoger en tienda",
delivery: "Delivery",
placeOrder: "Realizar Pedido",

visit: "VISÍTANOS",
address: "Equipetrol, Santa Cruz de la Sierra, Bolivia",
social: "Síguenos en Instagram y TikTok",

yourOrder: "Tu Pedido",
emptyCart: "Tu carrito está vacío 🍰",
total: "Total",
continueOrder: "Continuar con el Pedido",

rights: "Todos los derechos reservados."

}

};


// ===============================
// LANGUAGE
// ===============================

function setLanguage(language) {

currentLanguage = language;

document.documentElement.lang = language;

const textElements = document.querySelectorAll("[data-i18n]");

textElements.forEach(element => {

const key = element.getAttribute("data-i18n");

if (translations[language][key]) {
element.innerHTML = translations[language][key];
}

});


// Placeholders

const placeholderElements =
document.querySelectorAll("[data-placeholder]");

placeholderElements.forEach(element => {

const key = element.getAttribute("data-placeholder");

if (translations[language][key]) {
element.placeholder = translations[language][key];
}

});


// Update language buttons

const enButton = document.getElementById("en-btn");
const esButton = document.getElementById("es-btn");

if (enButton) {
enButton.classList.toggle("active", language === "en");
}

if (esButton) {
esButton.classList.toggle("active", language === "es");
}


// Update cart

renderCart();

}


// ===============================
// CART
// ===============================

function addToCart(name, price) {

const existingItem =
cart.find(item => item.name === name);

if (existingItem) {

existingItem.quantity++;

} else {

cart.push({
name: name,
price: price,
quantity: 1
});

}

renderCart();


// Small notification

showNotification(
currentLanguage === "es"
? "¡Agregado al carrito!"
: "Added to cart!"
);

}


// ===============================
// ICED LATTE
// ===============================

function addIcedLatte() {

const essenceElement =
document.getElementById("essence");

const essence =
essenceElement ? essenceElement.value : "Caramel";

const name =
"Iced Latte (" + essence + ")";

addToCart(name, 20);

}


// ===============================
// REMOVE ITEM
// ===============================

function removeFromCart(index) {

if (cart[index].quantity > 1) {

cart[index].quantity--;

} else {

cart.splice(index, 1);

}

renderCart();

}


// ===============================
// ADD ONE MORE
// ===============================

function increaseQuantity(index) {

cart[index].quantity++;

renderCart();

}


// ===============================
// RENDER CART
// ===============================

function renderCart() {

const cartContainer =
document.getElementById("cart-items");

const cartCount =
document.getElementById("cart-count");

const cartTotal =
document.getElementById("cart-total");

if (!cartContainer) return;


if (cart.length === 0) {

cartContainer.innerHTML =
`<p class="empty-cart">
${translations[currentLanguage].emptyCart}
</p>`;

if (cartCount) {
cartCount.textContent = "0";
}

if (cartTotal) {
cartTotal.textContent = "Bs 0";
}

return;

}


let total = 0;
let count = 0;

cartContainer.innerHTML = "";

cart.forEach((item, index) => {

const itemTotal =
item.price * item.quantity;

total += itemTotal;
count += item.quantity;


const div =
document.createElement("div");

div.className = "cart-item";

div.innerHTML = `

<div class="cart-item-info">

<strong>${item.name}</strong>

<span>
Bs ${item.price} × ${item.quantity}
</span>

</div>

<div class="cart-item-controls">

<button onclick="removeFromCart(${index})">
−
</button>

<span>${item.quantity}</span>

<button onclick="increaseQuantity(${index})">
+
</button>

</div>

`;

cartContainer.appendChild(div);

});


if (cartCount) {
cartCount.textContent = count;
}

if (cartTotal) {
cartTotal.textContent = "Bs " + total;
}

}


// ===============================
// OPEN CART
// ===============================

function openCart() {

const panel =
document.getElementById("cart-panel");

const overlay =
document.getElementById("cart-overlay");

if (panel) {
panel.classList.add("open");
}

if (overlay) {
overlay.classList.add("open");
}

}


// ===============================
// CLOSE CART
// ===============================

function closeCart() {

const panel =
document.getElementById("cart-panel");

const overlay =
document.getElementById("cart-overlay");

if (panel) {
panel.classList.remove("open");
}

if (overlay) {
overlay.classList.remove("open");
}

}


// ===============================
// CHECKOUT
// ===============================

function checkout() {

if (cart.length === 0) {

showNotification(
currentLanguage === "es"
? "Tu carrito está vacío."
: "Your cart is empty."
);

return;

}

closeCart();

const orderSection =
document.getElementById("orders");

if (orderSection) {

orderSection.scrollIntoView({
behavior: "smooth"
});

}

}


// ===============================
// SUBMIT ORDER
// ===============================

function submitOrder(event) {

event.preventDefault();

if (cart.length === 0) {

showNotification(
currentLanguage === "es"
? "Agrega algo al carrito primero."
: "Please add something to your cart first."
);

return;

}


const name =
document.getElementById("customer-name").value;

const method =
document.getElementById("order-method").value;


let total = 0;

cart.forEach(item => {

total +=
item.price * item.quantity;

});


let message =
currentLanguage === "es"

? `¡Gracias, ${name}! Tu pedido de Bs ${total} para ${method} ha sido recibido.`

: `Thank you, ${name}! Your Bs ${total} order for ${method} has been received.`;


alert(message);


// Reset

cart = [];

renderCart();

document.getElementById("order-form").reset();

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMobileMenu() {

const navLinks =
document.querySelector(".nav-links");

if (navLinks) {

navLinks.classList.toggle("mobile-open");

}

}


// ===============================
// DESSERT OF THE MONTH
// ===============================

function showComingSoon() {

alert(

currentLanguage === "es"

? "🍰 ¡Muy pronto! Nuestro próximo postre del mes será anunciado en nuestras redes."

: "🍰 Coming soon! Our next Dessert of the Month will be announced on our social media."

);

}


// ===============================
// NOTIFICATION
// ===============================

function showNotification(message) {

const notification =
document.createElement("div");

notification.className =
"lamecie-notification";

notification.textContent =
message;

document.body.appendChild(notification);


setTimeout(() => {

notification.classList.add("show");

}, 10);


setTimeout(() => {

notification.classList.remove("show");

setTimeout(() => {

notification.remove();

}, 300);

}, 1800);

}


// ===============================
// INITIALIZE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

setLanguage("en");

renderCart();

});
