// ==============================
// LAMECIE BAKERY - INTERACTIVE
// ==============================

const cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    updateCart();
}

function changeQuantity(name, amount) {
    const item = cart.find(item => item.name === name);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(name);
        return;
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;
    let numberOfItems = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🍰
            </p>
        `;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;

        total += itemTotal;
        numberOfItems += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>Bs ${item.price} each</p>

                <div class="quantity-controls">
                    <button onclick="changeQuantity('${item.name}', -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
            </div>

            <div>
                <strong>Bs ${itemTotal}</strong>
                <button
                    class="remove-button"
                    onclick="removeFromCart('${item.name}')">
                    Remove
                </button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Bs ${total}`;
    cartCount.textContent = numberOfItems;
}

function openCart() {
    const cartPanel = document.getElementById("cart-panel");

    if (cartPanel) {
        cartPanel.classList.add("active");
    }
}

function closeCart() {
    const cartPanel = document.getElementById("cart-panel");

    if (cartPanel) {
        cartPanel.classList.remove("active");
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add something delicious first! 🍰");
        return;
    }

    const orderSection = document.getElementById("orders");

    if (orderSection) {
        closeCart();
        orderSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function submitOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Please add at least one product to your order.");
        return;
    }

    const name = document.getElementById("customer-name").value;
    const method = document.getElementById("order-method").value;

    let orderSummary = "";

    cart.forEach(item => {
        orderSummary += `${item.name} x${item.quantity}\n`;
    });

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    alert(
        `Thank you, ${name}! 🍰\n\n` +
        `Your Lamecie order has been received.\n\n` +
        `${orderSummary}\n` +
        `Total: Bs ${total}\n` +
        `Method: ${method}\n\n` +
        `We can't wait to make something delicious for you!`
    );

    cart.length = 0;
    updateCart();

    document.getElementById("order-form").reset();
}

// ==============================
// MOBILE MENU
// ==============================

function toggleMobileMenu() {
    const navigation = document.querySelector(".nav-links");

    if (navigation) {
        navigation.classList.toggle("mobile-open");
    }
}

// ==============================
// SCROLL ANIMATIONS
// ==============================

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.addEventListener("DOMContentLoaded", () => {

    document
        .querySelectorAll(".product-card, .dessert-list div")
        .forEach(element => {
            element.classList.add("scroll-animation");
            observer.observe(element);
        });

    updateCart();
});
