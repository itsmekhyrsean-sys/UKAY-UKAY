const seedInventory = [
  { id: crypto.randomUUID(), sku: "JKT-001", name: "Vintage Denim Jacket", category: "Outerwear", size: "M", color: "Blue", brand: "Levi's", qty: 0, cost: 130, price: 280, sold: 38, image: "jacket", supplier: "Bale A" },
  { id: crypto.randomUUID(), sku: "DRS-002", name: "Floral Midi Dress", category: "Dresses", size: "S", color: "Beige", brand: "Zara", qty: 3, cost: 210, price: 450, sold: 24, image: "dress", supplier: "Bale B" },
  { id: crypto.randomUUID(), sku: "PNT-003", name: "Cargo Pants", category: "Bottoms", size: "L", color: "Khaki", brand: "H&M", qty: 2, cost: 140, price: 300, sold: 19, image: "jeans", supplier: "Bale A" },
  { id: crypto.randomUUID(), sku: "SWT-004", name: "Striped Knit Sweater", category: "Tops", size: "M", color: "Multi", brand: "Uniqlo", qty: 1, cost: 160, price: 350, sold: 16, image: "sweater", supplier: "Bale C" },
  { id: crypto.randomUUID(), sku: "HOD-005", name: "Graphic Hoodie", category: "Tops", size: "M", color: "Black", brand: "Nike", qty: 7, cost: 200, price: 420, sold: 11, image: "hoodie", supplier: "Bale C" },
  { id: crypto.randomUUID(), sku: "JNS-006", name: "Y2K Baggy Jeans", category: "Bottoms", size: "L", color: "Blue", brand: "Zara", qty: 15, cost: 320, price: 650, sold: 7, image: "jeans", supplier: "Bale D" }
];

const seedTransactions = [
  { invoice: "INV-2024-0520-0012", customer: "Maria Santos", items: 1, total: 330, payment: "GCash", date: "May 20, 2024", status: "Completed" },
  { invoice: "INV-2024-0520-0011", customer: "John Dela Cruz", items: 1, total: 210, payment: "GCash", date: "May 20, 2024", status: "Completed" },
  { invoice: "INV-2024-0520-0010", customer: "Ana Reyes", items: 1, total: 480, payment: "Cash", date: "May 20, 2024", status: "Completed" },
  { invoice: "INV-2024-0519-0009", customer: "Walk-in Customer", items: 4, total: 11560, payment: "Maya", date: "May 19, 2024", status: "Completed" }
];

const seedComments = [
  { id: "CMT-0001", customer: "Maria Santos", comment: "mine", type: "Mine", itemSku: "JKT-001", time: "10:01 AM", status: "Pending" },
  { id: "CMT-0002", customer: "John Dela Cruz", comment: "Mine po", type: "Mine", itemSku: "DRS-002", time: "10:02 AM", status: "Pending" },
  { id: "CMT-0003", customer: "Ana Reyes", comment: "mine size M", type: "Mine", itemSku: "SWT-004", time: "10:03 AM", status: "Pending" },
  { id: "CMT-0004", customer: "Mark Lopez", comment: "mine 280", type: "Bid", itemSku: "JKT-001", time: "10:04 AM", status: "Pending" },
  { id: "CMT-0005", customer: "Sophia Cruz", comment: "Minee!!!", type: "Mine", itemSku: "PNT-003", time: "10:05 AM", status: "Pending" },
  { id: "CMT-0006", customer: "Liza Manalo", comment: "mine po", type: "Mine", itemSku: "JNS-006", time: "10:06 AM", status: "Pending" },
  { id: "CMT-0007", customer: "Henry Ramos", comment: "MINE", type: "Mine", itemSku: "HOD-005", time: "10:07 AM", status: "Pending" }
];

const seedOrders = [
  { id: "ORD-0520-0012", customer: "Maria Santos", itemSku: "JKT-001", itemName: "Vintage Denim Jacket", amount: 280, source: "Facebook Live", status: "Paid", paymentTime: "May 20, 2024 11:02 AM" },
  { id: "ORD-0520-0011", customer: "John Dela Cruz", itemSku: "DRS-002", itemName: "Floral Midi Dress", amount: 210, source: "Comment", status: "Paid", paymentTime: "May 20, 10:58 AM" },
  { id: "ORD-0520-0010", customer: "Ana Reyes", itemSku: "SWT-004", itemName: "Striped Knit Sweater", amount: 480, source: "Comment", status: "Pending Payment", paymentTime: "" },
  { id: "ORD-0520-0009", customer: "Mark Lopez", itemSku: "PNT-003", itemName: "Cargo Pants", amount: 350, source: "Comment", status: "Pending Payment", paymentTime: "" }
];

const seedMessages = [
  {
    id: "MSG-0001",
    customer: "Maria Santos",
    contact: "0917 123 4567",
    messages: [
      { from: "customer", text: "Mine na po.", time: "10:16 AM" },
      { from: "store", text: "Noted po. Mine confirmed. Please send payment to reserve.", time: "10:16 AM" },
      { from: "customer", text: "Thank you po sa payment!", time: "11:02 AM" },
      { from: "store", text: "Payment detected. Generating invoice...", time: "11:02 AM", system: true }
    ]
  },
  {
    id: "MSG-0002",
    customer: "John Dela Cruz",
    contact: "0928 555 0198",
    messages: [
      { from: "customer", text: "Available pa yung dress?", time: "10:12 AM" },
      { from: "store", text: "Yes po, available pa.", time: "10:13 AM" }
    ]
  }
];

const seedAutomations = [
  { id: "AUTO-001", name: "Auto Reply Keywords", description: "Replies to mine, how much, available, and size questions.", enabled: true },
  { id: "AUTO-002", name: "Payment Detection", description: "Flags paid, sent, GCash, and payment screenshot messages.", enabled: true },
  { id: "AUTO-003", name: "Auto Invoice", description: "Generates invoices when an order is marked paid.", enabled: true },
  { id: "AUTO-004", name: "Payment Reminder", description: "Reminds pending customers before cutoff.", enabled: false }
];

const seedUsers = [
  {
    id: "USR-0001",
    name: "Admin",
    email: "admin@ukaypro.com",
    phone: "",
    role: "Admin",
    password: "admin123",
    facebookPage: {
      name: "Ukay Online Shop",
      url: "https://facebook.com/ukayonlineshop",
      category: "Facebook Page",
      followers: 5678
    }
  }
];

const storageKey = "ukaypro-system-v2";
const state = loadState();
let cart = [];
let selectedPayment = "Cash";
let currentUser = null;
let activeChatId = "MSG-0001";

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const modalBackdrop = document.querySelector("#modalBackdrop");
const signupBackdrop = document.querySelector("#signupBackdrop");
const itemForm = document.querySelector(".item-modal");
const signupForm = document.querySelector("#signupForm");
const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" });

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    const parsed = JSON.parse(saved);
    return {
      inventory: parsed.inventory || seedInventory,
      transactions: parsed.transactions || seedTransactions,
      comments: parsed.comments || seedComments,
      orders: parsed.orders || seedOrders,
      messages: parsed.messages || seedMessages,
      automations: parsed.automations || seedAutomations,
      users: parsed.users || seedUsers
    };
  }
  return { inventory: seedInventory, transactions: seedTransactions, comments: seedComments, orders: seedOrders, messages: seedMessages, automations: seedAutomations, users: seedUsers };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function formatPeso(amount) {
  return peso.format(amount).replace("PHP", "P");
}

function itemStatus(item) {
  if (item.qty <= 0) return "Out of Stock";
  if (item.qty <= 3) return "Low Stock";
  return "In Stock";
}

function statusClass(status) {
  if (status === "In Stock") return "in";
  if (status === "Low Stock") return "low";
  return "out";
}

function getFilteredInventory() {
  const query = document.querySelector("#inventorySearch")?.value.trim().toLowerCase() || "";
  if (!query) return state.inventory;
  return state.inventory.filter((item) => {
    return [item.name, item.sku, item.category, item.brand, item.color, item.size]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function getFilteredPosItems() {
  const query = document.querySelector("#posSearch")?.value.trim().toLowerCase() || "";
  const available = state.inventory.filter((item) => item.qty > 0);
  if (!query) return available;
  return available.filter((item) => `${item.name} ${item.sku} ${item.category}`.toLowerCase().includes(query));
}

function findItemBySku(sku) {
  return state.inventory.find((item) => item.sku === sku);
}

function orderStatusClass(status) {
  if (status === "Paid" || status === "For Pickup" || status === "Completed") return "in";
  if (status === "Pending Payment" || status === "Pending" || status === "Ready" || status === "Review" || status === "Open") return "low";
  return "out";
}

function nextOrderId() {
  return `ORD-${new Date().toISOString().slice(5, 10).replace("-", "")}-${String(state.orders.length + 1).padStart(4, "0")}`;
}

function renderLiveSelling() {
  const queue = state.inventory.filter((item) => item.qty > 0).slice(0, 8);
  const mines = state.comments.filter((comment) => comment.type === "Mine").length;
  const activeOrders = state.orders.filter((order) => order.status !== "Completed").length;

  document.querySelector("#liveQueueCount").textContent = queue.length;
  document.querySelector("#liveMineCount").textContent = mines;
  document.querySelector("#liveOrderCount").textContent = activeOrders;
  document.querySelector("#liveSummary").textContent = `${queue.length} queued items - ${mines} detected mines`;
  document.querySelector("#liveRows").innerHTML = queue.map((item) => `
    <tr>
      <td>${item.sku}</td>
      <td><strong>${item.name}</strong><small>${item.size} - ${item.color}</small></td>
      <td>${formatPeso(item.price)}</td>
      <td>${item.qty}</td>
      <td><span class="status ${statusClass(itemStatus(item))}">${itemStatus(item)}</span></td>
      <td><button class="row-action neutral" data-feature-item="${item.id}" type="button">Feature</button></td>
    </tr>
  `).join("");
}

function renderPosts() {
  document.querySelector("#postGrid").innerHTML = state.inventory.slice(0, 6).map((item) => `
    <article class="post-card">
      <span class="post-image ${item.image}"></span>
      <div>
        <small>${item.sku}</small>
        <h3>${item.name}</h3>
        <p>Size: ${item.size} | Color: ${item.color} | Price: ${formatPeso(item.price)}</p>
        <textarea readonly>Code: ${item.sku}
${item.name.toUpperCase()}
Size ${item.size} - ${item.color}
Price: ${formatPeso(item.price)}
Comment MINE to reserve.</textarea>
      </div>
    </article>
  `).join("");
}

function renderComments() {
  document.querySelector("#commentRows").innerHTML = state.comments.map((comment) => {
    const item = findItemBySku(comment.itemSku);
    const hasOrder = state.orders.some((order) => order.commentId === comment.id);
    return `
      <tr>
        <td><strong>${comment.customer}</strong><small>${comment.time}</small></td>
        <td>${comment.comment}</td>
        <td>${comment.type}</td>
        <td>${item ? item.name : comment.itemSku}</td>
        <td><span class="status ${orderStatusClass(comment.status)}">${comment.status}</span></td>
        <td><button class="row-action neutral" data-create-order="${comment.id}" type="button" ${hasOrder ? "disabled" : ""}>${hasOrder ? "Added" : "Create Order"}</button></td>
      </tr>
    `;
  }).join("");
}

function renderOrders() {
  const pending = state.orders.filter((order) => order.status === "Pending Payment").length;
  const paid = state.orders.filter((order) => order.status === "Paid").length;
  const pickup = state.orders.filter((order) => order.status === "For Pickup").length;
  const value = state.orders.reduce((sum, order) => sum + order.amount, 0);

  document.querySelector("#pendingOrdersMetric").textContent = pending;
  document.querySelector("#paidOrdersMetric").textContent = paid;
  document.querySelector("#pickupOrdersMetric").textContent = pickup;
  document.querySelector("#orderValueMetric").textContent = formatPeso(value);
  document.querySelector("#orderRows").innerHTML = state.orders.map((order) => `
    <tr>
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td><strong>${order.itemName}</strong><small>${order.itemSku}</small></td>
      <td>${formatPeso(order.amount)}</td>
      <td>${order.source}</td>
      <td><span class="status ${orderStatusClass(order.status)}">${order.status}</span></td>
      <td><button class="row-action neutral" data-mark-paid="${order.id}" type="button" ${order.status !== "Pending Payment" ? "disabled" : ""}>Mark Paid</button></td>
    </tr>
  `).join("");
}

function renderMessenger() {
  const active = state.messages.find((thread) => thread.id === activeChatId) || state.messages[0];
  if (!active) return;
  activeChatId = active.id;
  document.querySelector("#activeChatName").textContent = active.customer;
  document.querySelector("#chatList").innerHTML = state.messages.map((thread) => `
    <button class="chat-person ${thread.id === activeChatId ? "active" : ""}" data-chat="${thread.id}" type="button">
      <span class="avatar mini"></span>
      <span><strong>${thread.customer}</strong><small>${thread.messages.at(-1)?.text || "No messages yet"}</small></span>
    </button>
  `).join("");
  document.querySelector("#chatThread").innerHTML = active.messages.map((message) => `
    <div class="message ${message.from === "store" ? "sent" : "received"}">
      <p>${message.text}</p>
      <small>${message.time}</small>
    </div>
  `).join("");
}

function renderInvoices() {
  const invoiceSources = state.transactions.slice(0, 4);
  document.querySelector("#invoiceGrid").innerHTML = invoiceSources.map((tx) => `
    <article class="invoice-card">
      <div class="invoice-head">
        <strong>UkayPro</strong>
        <span>${tx.invoice}</span>
      </div>
      <h3>Invoice</h3>
      <p><b>Bill to:</b> ${tx.customer}</p>
      <p><b>Date:</b> ${tx.date}</p>
      <p><b>Payment:</b> ${tx.payment}</p>
      <div class="invoice-total"><span>Total</span><strong>${formatPeso(tx.total)}</strong></div>
      <button class="primary-button compact" type="button">Send to Customer</button>
    </article>
  `).join("");
}

function renderCustomers() {
  const customers = {};
  state.orders.forEach((order) => {
    if (!customers[order.customer]) customers[order.customer] = { name: order.customer, contact: "-", orders: 0, spent: 0 };
    customers[order.customer].orders += 1;
    customers[order.customer].spent += order.status === "Paid" || order.status === "For Pickup" ? order.amount : 0;
  });
  state.transactions.forEach((tx) => {
    if (!customers[tx.customer]) customers[tx.customer] = { name: tx.customer, contact: "-", orders: 0, spent: 0 };
    customers[tx.customer].orders += 1;
    customers[tx.customer].spent += tx.total;
  });
  state.messages.forEach((thread) => {
    if (!customers[thread.customer]) customers[thread.customer] = { name: thread.customer, contact: thread.contact, orders: 0, spent: 0 };
    customers[thread.customer].contact = thread.contact;
  });

  document.querySelector("#customerRows").innerHTML = Object.values(customers).map((customer) => `
    <tr>
      <td><strong>${customer.name}</strong></td>
      <td>${customer.contact}</td>
      <td>${customer.orders}</td>
      <td>${formatPeso(customer.spent)}</td>
      <td><span class="status ${customer.spent > 1000 ? "in" : "low"}">${customer.spent > 1000 ? "VIP" : "Regular"}</span></td>
    </tr>
  `).join("");
}

function renderAutomation() {
  document.querySelector("#automationGrid").innerHTML = state.automations.map((rule) => `
    <article class="automation-card">
      <div>
        <h3>${rule.name}</h3>
        <p>${rule.description}</p>
      </div>
      <button class="toggle ${rule.enabled ? "on" : ""}" data-toggle-rule="${rule.id}" type="button">${rule.enabled ? "ON" : "OFF"}</button>
    </article>
  `).join("");
}

function renderDashboardSuite() {
  const commentRows = document.querySelector("#dashboardCommentRows");
  if (commentRows) {
    commentRows.innerHTML = state.comments.slice(0, 7).map((comment) => `
      <tr>
        <td><strong>${comment.customer}</strong></td>
        <td>${comment.comment}</td>
        <td>${comment.time}</td>
        <td><span class="status ${orderStatusClass(comment.status)}">${comment.status}</span></td>
      </tr>
    `).join("");
  }

  const flowRows = document.querySelector("#dashboardFlowRows");
  if (flowRows) {
    flowRows.innerHTML = state.orders.slice(0, 1).map((order) => `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.itemName}<small>${order.itemSku}</small></td>
        <td>${formatPeso(order.amount)}</td>
        <td><span class="status ${orderStatusClass(order.status)}">${order.status}</span></td>
        <td>${order.paymentTime || "Awaiting payment"}</td>
      </tr>
    `).join("");
  }

  const activeThread = state.messages.find((thread) => thread.id === activeChatId) || state.messages[0];
  const dashboardChat = document.querySelector("#dashboardChatThread");
  if (dashboardChat && activeThread) {
    dashboardChat.innerHTML = activeThread.messages.map((message) => `
      <div class="dashboard-message ${message.from === "store" ? "sent" : "received"} ${message.system ? "system" : ""}">
        <p>${message.text}</p>
        <small>${message.time}</small>
      </div>
    `).join("");
  }

  const invoice = state.transactions[0];
  const invoicePanel = document.querySelector("#dashboardInvoice");
  if (invoicePanel && invoice) {
    invoicePanel.innerHTML = `
      <div class="dashboard-invoice">
        <div>
          <strong>Ukay Online Shop</strong>
          <span>${invoice.invoice}</span>
        </div>
        <h4>Invoice</h4>
        <p><b>Bill to:</b> ${invoice.customer}</p>
        <p><b>Payment Method:</b> ${invoice.payment}</p>
        <table class="compact-table">
          <thead><tr><th>Item</th><th>Qty</th><th>Total</th></tr></thead>
          <tbody><tr><td>Vintage Denim Jacket</td><td>${invoice.items}</td><td>${formatPeso(invoice.total)}</td></tr></tbody>
        </table>
        <div class="invoice-total"><span>Total Amount</span><strong>${formatPeso(invoice.total)}</strong></div>
      </div>
    `;
  }

  const inventoryRows = document.querySelector("#dashboardInventoryRows");
  if (inventoryRows) {
    inventoryRows.innerHTML = state.inventory.slice(0, 4).map((item) => {
      const status = itemStatus(item);
      return `
        <tr>
          <td><span class="table-thumb ${item.image}"></span><strong>${item.name}</strong></td>
          <td>${item.sku}</td>
          <td>${item.qty}</td>
          <td><span class="status ${statusClass(status)}">${status}</span></td>
        </tr>
      `;
    }).join("");
  }

  const orderRows = document.querySelector("#dashboardOrderRows");
  if (orderRows) {
    orderRows.innerHTML = state.orders.slice(0, 4).map((order) => `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.itemSku}</td>
        <td>${formatPeso(order.amount)}</td>
        <td><span class="status ${orderStatusClass(order.status)}">${order.status}</span></td>
      </tr>
    `).join("");
  }

  const automationRules = document.querySelector("#dashboardAutomationRules");
  if (automationRules) {
    automationRules.innerHTML = state.automations.map((rule) => `
      <article>
        <div>
          <strong>${rule.name}</strong>
          <small>${rule.description}</small>
        </div>
        <span class="toggle ${rule.enabled ? "on" : ""}">${rule.enabled ? "ON" : "OFF"}</span>
      </article>
    `).join("") + `<button type="button" data-view-shortcut="automation">Add New Automation</button>`;
  }
}

function renderInventory() {
  const rows = getFilteredInventory().map((item) => {
    const status = itemStatus(item);
    return `
      <tr>
        <td><span class="table-thumb ${item.image}"></span></td>
        <td><strong>${item.name}</strong><small>${item.sku}</small></td>
        <td>${item.category}</td>
        <td>${item.size}</td>
        <td>${item.color}</td>
        <td>${item.brand || "Unbranded"}</td>
        <td>${item.qty}</td>
        <td>${formatPeso(item.price)}</td>
        <td><span class="status ${statusClass(status)}">${status}</span></td>
        <td><button class="row-action" data-delete="${item.id}" title="Delete">Delete</button></td>
      </tr>
    `;
  }).join("");

  document.querySelector("#inventoryRows").innerHTML = rows || `
    <tr><td colspan="10" class="empty-cell">No items found.</td></tr>
  `;
}

function renderLists() {
  const lowStock = state.inventory.filter((item) => item.qty <= 3).slice(0, 4);
  const lowStockList = document.querySelector("#lowStockList");
  if (lowStockList) {
    lowStockList.innerHTML = lowStock.map((item) => `
      <div class="item-row">
        <span class="thumb ${item.image}"></span>
        <div><strong>${item.name}</strong><small>${item.size} - ${item.color}</small></div>
        <span class="danger">${item.qty} pcs left</span>
      </div>
    `).join("") || `<p class="empty-message">No low stock items.</p>`;
  }

  const newItemsList = document.querySelector("#newItemsList");
  if (newItemsList) {
    newItemsList.innerHTML = state.inventory.slice(-4).reverse().map((item) => `
      <div class="item-row">
        <span class="thumb ${item.image}"></span>
        <div><strong>${item.name}</strong><small>${item.sku}</small></div>
      </div>
    `).join("");
  }
}

function renderTransactions() {
  const transactionRows = document.querySelector("#transactionRows");
  if (!transactionRows) return;
  transactionRows.innerHTML = state.transactions.slice(0, 8).map((row) => `
    <tr>
      <td>${row.invoice}</td>
      <td>${row.customer}</td>
      <td>${row.items}</td>
      <td>${formatPeso(row.total)}</td>
      <td>${row.payment}</td>
      <td><span class="status in">${row.status}</span></td>
    </tr>
  `).join("");
}

function renderPOS() {
  document.querySelector("#posItems").innerHTML = getFilteredPosItems().map((item) => `
    <div class="pos-row">
      <span class="thumb ${item.image}"></span>
      <div><strong>${item.name}</strong><small>${item.size} / ${item.color}<br>${formatPeso(item.price)} - ${item.qty} left</small></div>
      <button class="add-cart-button" data-add-cart="${item.id}" type="button">Add</button>
    </div>
  `).join("") || `<p class="empty-message">No available items.</p>`;
}

function renderCart() {
  const subtotal = cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  const discount = subtotal * 0.10;
  const total = subtotal - discount;
  const itemCount = cart.reduce((sum, line) => sum + line.qty, 0);

  document.querySelector("#cartTitle").textContent = `Cart (${itemCount})`;
  document.querySelector("#cartItems").innerHTML = cart.map((line) => `
    <div class="cart-item">
      <div><strong>${line.name}</strong><small>${formatPeso(line.price)} each</small></div>
      <div class="qty-control">
        <button data-cart-minus="${line.id}" type="button">-</button>
        <b>${line.qty}</b>
        <button data-cart-plus="${line.id}" type="button">+</button>
      </div>
    </div>
  `).join("") || `<p class="empty-message">Cart is empty.</p>`;

  document.querySelector("#cartSubtotal").textContent = formatPeso(subtotal);
  document.querySelector("#cartDiscount").textContent = `-${formatPeso(discount)}`;
  document.querySelector("#cartTotal").textContent = formatPeso(total);
}

function renderStock() {
  const grouped = state.inventory.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = { available: 0, reserved: 0, sold: 0, damaged: 0 };
    groups[item.category].available += item.qty;
    groups[item.category].sold += item.sold || 0;
    return groups;
  }, {});

  document.querySelector("#stockRows").innerHTML = Object.entries(grouped).map(([category, row]) => `
    <tr><td>${category}</td><td>${row.available}</td><td>${row.reserved}</td><td>${row.sold}</td><td>${row.damaged}</td></tr>
  `).join("");
}

function renderMetrics() {
  const totalStocks = state.inventory.reduce((sum, item) => sum + item.qty, 0);
  const lowStocks = state.inventory.filter((item) => item.qty <= 3).length;
  const totalSales = state.transactions.reduce((sum, tx) => sum + tx.total, 0);
  const totalOrders = state.transactions.length;
  const totalSold = state.inventory.reduce((sum, item) => sum + (item.sold || 0), 0);
  const pendingOrders = state.orders.filter((order) => order.status === "Pending Payment").length;
  const paidOrders = state.orders.filter((order) => order.status === "Paid" || order.status === "For Pickup").length;
  const categorySales = state.inventory.reduce((groups, item) => {
    groups[item.category] = (groups[item.category] || 0) + (item.sold || 0);
    return groups;
  }, {});
  const [topCategory = "None", topSold = 0] = Object.entries(categorySales).sort((a, b) => b[1] - a[1])[0] || [];

  const setMetric = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  setMetric("#todaySalesMetric", formatPeso(totalSales));
  setMetric("#salesHint", `${totalOrders} completed invoices`);
  setMetric("#pendingOverviewMetric", pendingOrders);
  setMetric("#paidOverviewMetric", paidOrders);
  setMetric("#invoiceOverviewMetric", state.transactions.length);
  setMetric("#itemsSoldOverviewMetric", totalSold);
  setMetric("#totalStocksMetric", `${totalStocks} items`);
  setMetric("#lowStocksMetric", `${lowStocks} items`);
  setMetric("#topCategoryMetric", topCategory);
  setMetric("#topCategoryHint", `${topSold} sold`);
  setMetric("#newItemsMetric", `${state.inventory.length} items`);
  setMetric("#reportSales", formatPeso(totalSales));
  setMetric("#reportOrders", totalOrders);
  setMetric("#reportAverage", formatPeso(totalOrders ? totalSales / totalOrders : 0));
  setMetric("#reportItemsSold", totalSold);
}

function renderAll() {
  renderDashboardSuite();
  renderLiveSelling();
  renderPosts();
  renderComments();
  renderOrders();
  renderMessenger();
  renderInventory();
  renderLists();
  renderTransactions();
  renderInvoices();
  renderPOS();
  renderCart();
  renderStock();
  renderCustomers();
  renderAutomation();
  renderMetrics();
}

function activateView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  const nextView = document.querySelector(`#${viewId}`);
  nextView.classList.add("active-view");
  nextView.getAnimations().forEach((animation) => {
    animation.cancel();
    animation.play();
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });
}

function openModal() {
  const nextNumber = String(state.inventory.length + 1).padStart(4, "0");
  itemForm.reset();
  itemForm.elements.sku.value = `ITM-${nextNumber}`;
  itemForm.elements.qty.value = 1;
  itemForm.elements.price.value = 0;
  itemForm.elements.cost.value = 0;
  modalBackdrop.classList.remove("hidden");
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
}

function setMessage(selector, message, isSuccess = false) {
  const element = document.querySelector(selector);
  element.textContent = message;
  element.classList.toggle("success", isSuccess);
}

function openSignup() {
  signupForm.reset();
  const page = defaultFacebookPage();
  document.querySelector("#fbPageUrl").value = page.url;
  document.querySelector("#fbPageName").value = page.name;
  document.querySelector("#fbPageCategory").value = "Ukay-Ukay Store";
  document.querySelector("#fbPageFollowers").value = page.followers;
  updateFacebookPreview({ ...page, category: "Ukay-Ukay Store" });
  document.querySelectorAll(".field-error, .field-success").forEach((element) => {
    element.classList.remove("field-error", "field-success");
  });
  document.querySelectorAll(".field-hint").forEach((element) => {
    element.classList.remove("error", "success");
  });
  document.querySelector("#phoneHint").textContent = "Format: +63 followed by 10 numbers.";
  document.querySelector("#passwordHint").textContent = "Use at least 8 characters with uppercase, number, and symbol.";
  document.querySelector("#confirmPasswordHint").textContent = "Re-enter the same password.";
  document.querySelector(".password-strength").classList.remove("low", "good");
  setMessage("#signupMessage", "");
  setMessage("#loginMessage", "");
  signupBackdrop.classList.remove("hidden");
}

function closeSignup() {
  signupBackdrop.classList.add("hidden");
}

function defaultFacebookPage() {
  return {
    name: "Ukay Online Shop",
    url: "https://facebook.com/ukayonlineshop",
    category: "Facebook Page",
    followers: 5678
  };
}

function normalizePageName(value) {
  return value
    .replace(/^@/, "")
    .replace(/[-_.]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function inferFacebookPageFromUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (!host.includes("facebook.com") && !host.includes("fb.com")) return null;
    const slug = parsed.pathname.split("/").filter(Boolean)[0] || "";
    if (!slug || ["pages", "profile.php", "groups"].includes(slug)) return null;
    return normalizePageName(decodeURIComponent(slug));
  } catch (error) {
    return null;
  }
}

function getSignupFacebookPage() {
  return {
    name: document.querySelector("#fbPageName").value.trim(),
    url: document.querySelector("#fbPageUrl").value.trim(),
    category: document.querySelector("#fbPageCategory").value,
    followers: Number(document.querySelector("#fbPageFollowers").value) || 0
  };
}

function updateFacebookPreview(page = getSignupFacebookPage()) {
  const preview = document.querySelector("#fbPagePreview");
  if (!preview) return;
  preview.querySelector("strong").textContent = page.name || "Facebook Page Name";
  preview.querySelector("small").textContent = `${page.category || "Facebook Page"}${page.followers ? ` - ${page.followers.toLocaleString()} followers` : ""}`;
}

function applyFacebookPage(page = defaultFacebookPage()) {
  document.querySelectorAll(".fb-page-name").forEach((element) => {
    element.textContent = page.name || "Facebook Page";
  });
  document.querySelectorAll(".fb-page-category").forEach((element) => {
    element.textContent = page.category || "Facebook Page";
  });
  const followersMetric = document.querySelector("#fbFollowersMetric");
  if (followersMetric) followersMetric.textContent = Number(page.followers || 0).toLocaleString();
}

function setFieldState(input, hint, message, state = "") {
  input.classList.remove("field-error", "field-success");
  hint.classList.remove("error", "success");
  hint.textContent = message;

  if (state === "error") {
    input.classList.add("field-error");
    hint.classList.add("error");
  }

  if (state === "success") {
    input.classList.add("field-success");
    hint.classList.add("success");
  }
}

function validatePhoneNumber() {
  const input = document.querySelector("#signupPhone");
  const hint = document.querySelector("#phoneHint");
  const value = input.value.trim();
  const isValid = /^\+63\d{10}$/.test(value);

  if (!value) {
    setFieldState(input, hint, "Phone number is required. Format: +639171234567.", "error");
    return false;
  }

  if (!isValid) {
    setFieldState(input, hint, "Must start with +63 followed by exactly 10 numbers.", "error");
    return false;
  }

  setFieldState(input, hint, "Phone number format is valid.", "success");
  return true;
}

function passwordStrength(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score >= 4 ? "good" : "low";
}

function validatePassword() {
  const input = document.querySelector("#signupPassword");
  const hint = document.querySelector("#passwordHint");
  const strength = document.querySelector(".password-strength");
  const value = input.value;

  strength.classList.remove("low", "good");

  if (!value) {
    setFieldState(input, hint, "Password is required.", "error");
    return false;
  }

  const level = passwordStrength(value);
  strength.classList.add(level);

  if (level === "low") {
    setFieldState(input, hint, "Low password. Use 8+ chars with uppercase, number, and symbol.", "error");
    return false;
  }

  setFieldState(input, hint, "Good password.", "success");
  return true;
}

function validateConfirmPassword() {
  const password = document.querySelector("#signupPassword").value;
  const input = document.querySelector("#confirmSignupPassword");
  const hint = document.querySelector("#confirmPasswordHint");
  const value = input.value;

  if (!value) {
    setFieldState(input, hint, "Please confirm your password.", "error");
    return false;
  }

  if (value !== password) {
    setFieldState(input, hint, "Passwords do not match.", "error");
    return false;
  }

  setFieldState(input, hint, "Passwords match.", "success");
  return true;
}

function validateSignupForm() {
  const isPhoneValid = validatePhoneNumber();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();
  return isPhoneValid && isPasswordValid && isConfirmValid;
}

function signIn() {
  const email = document.querySelector("#loginEmail").value.trim().toLowerCase();
  const password = document.querySelector("#loginPassword").value;
  const user = state.users.find((account) => account.email.toLowerCase() === email && account.password === password);

  if (!user) {
    setMessage("#loginMessage", "Invalid email or password.");
    return;
  }

  currentUser = user;
  document.querySelectorAll(".profile strong, .sidebar-user strong").forEach((element) => {
    element.textContent = `Hi, ${user.name}`;
  });
  document.querySelectorAll(".profile small, .sidebar-user small").forEach((element) => {
    element.textContent = user.role;
  });
  applyFacebookPage(user.facebookPage || defaultFacebookPage());
  setMessage("#loginMessage", "");
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
}

// Allow pressing Enter on the login form to submit
const loginFormEl = document.querySelector("#loginForm");
if (loginFormEl) {
  loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    signIn();
  });
}

// Export inventory as CSV
function exportInventoryCSV() {
  if (!state.inventory || !state.inventory.length) {
    alert("No inventory to export.");
    return;
  }

  const headers = ["id", "sku", "name", "category", "size", "color", "brand", "qty", "cost", "price", "supplier"];
  const rows = state.inventory.map((it) => headers.map((h) => (it[h] ?? "")).join(","));
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ukaypro-inventory-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function registerUser(event) {
  event.preventDefault();
  const data = new FormData(signupForm);
  const name = data.get("name").trim();
  const email = data.get("email").trim().toLowerCase();
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

  if (!validateSignupForm()) {
    setMessage("#signupMessage", "Please fix the highlighted fields.");
    return;
  }

  if (password !== confirmPassword) {
    setMessage("#signupMessage", "Passwords do not match.");
    return;
  }

  if (state.users.some((user) => user.email.toLowerCase() === email)) {
    setMessage("#signupMessage", "Email is already registered.");
    return;
  }

  const facebookPage = getSignupFacebookPage();
  const inferredPageName = inferFacebookPageFromUrl(facebookPage.url);
  if (!inferredPageName) {
    setMessage("#signupMessage", "Enter a valid Facebook Page URL.");
    return;
  }

  const user = {
    id: `USR-${String(state.users.length + 1).padStart(4, "0")}`,
    name,
    email,
    phone: data.get("phone").trim(),
    role: data.get("role"),
    password,
    facebookPage: {
      ...facebookPage,
      name: facebookPage.name || inferredPageName
    }
  };

  state.users.push(user);
  saveState();
  closeSignup();
  document.querySelector("#loginEmail").value = email;
  document.querySelector("#loginPassword").value = "";
  setMessage("#loginMessage", "Account created. Enter your password to sign in.", true);
}

function addToCart(itemId) {
  const item = state.inventory.find((entry) => entry.id === itemId);
  if (!item || item.qty <= 0) return;
  const existing = cart.find((line) => line.id === itemId);
  const currentQty = existing ? existing.qty : 0;
  if (currentQty >= item.qty) return;
  if (existing) existing.qty += 1;
  else cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  renderCart();
}

function changeCartQty(itemId, amount) {
  const line = cart.find((entry) => entry.id === itemId);
  const item = state.inventory.find((entry) => entry.id === itemId);
  if (!line || !item) return;
  line.qty += amount;
  if (line.qty <= 0) cart = cart.filter((entry) => entry.id !== itemId);
  if (line.qty > item.qty) line.qty = item.qty;
  renderCart();
}

function processPayment() {
  if (!cart.length) {
    alert("Cart is empty.");
    return;
  }

  const subtotal = cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  const total = subtotal * 0.90;
  const invoice = `INV-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${String(state.transactions.length + 1).padStart(3, "0")}`;

  cart.forEach((line) => {
    const item = state.inventory.find((entry) => entry.id === line.id);
    if (item) {
      item.qty -= line.qty;
      item.sold = (item.sold || 0) + line.qty;
    }
  });

  state.transactions.unshift({
    invoice,
    customer: "Walk-in Customer",
    items: cart.reduce((sum, line) => sum + line.qty, 0),
    total,
    payment: selectedPayment,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    status: "Completed"
  });

  cart = [];
  saveState();
  renderAll();
  alert(`Payment completed. Invoice: ${invoice}`);
}

function createOrderFromComment(commentId) {
  const comment = state.comments.find((entry) => entry.id === commentId);
  if (!comment || state.orders.some((order) => order.commentId === commentId)) return;
  const item = findItemBySku(comment.itemSku);
  if (!item) return;

  state.orders.unshift({
    id: nextOrderId(),
    customer: comment.customer,
    itemSku: item.sku,
    itemName: item.name,
    amount: item.price,
    source: "Comment Monitor",
    status: "Pending Payment",
    paymentTime: "",
    commentId
  });
  comment.status = "Order Created";

  if (!state.messages.some((thread) => thread.customer === comment.customer)) {
    state.messages.unshift({
      id: `MSG-${String(state.messages.length + 1).padStart(4, "0")}`,
      customer: comment.customer,
      contact: "-",
      messages: [{ from: "customer", text: comment.comment, time: comment.time }]
    });
  }

  saveState();
  renderAll();
}

function markOrderPaid(orderId) {
  const order = state.orders.find((entry) => entry.id === orderId);
  if (!order || order.status !== "Pending Payment") return;
  order.status = "Paid";
  order.paymentTime = new Date().toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

  state.transactions.unshift({
    invoice: `INV-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${String(state.transactions.length + 1).padStart(3, "0")}`,
    customer: order.customer,
    items: 1,
    total: order.amount,
    payment: "GCash",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    status: "Completed"
  });

  const item = findItemBySku(order.itemSku);
  if (item && item.qty > 0) {
    item.qty -= 1;
    item.sold = (item.sold || 0) + 1;
  }

  const thread = state.messages.find((entry) => entry.customer === order.customer);
  if (thread) {
    thread.messages.push({ from: "store", text: `Payment received for ${order.itemName}. Invoice is ready.`, time: "Now" });
    activeChatId = thread.id;
  }

  saveState();
  renderAll();
}

function sendMessage(text) {
  const thread = state.messages.find((entry) => entry.id === activeChatId);
  const cleanText = text.trim();
  if (!thread || !cleanText) return;
  thread.messages.push({ from: "store", text: cleanText, time: "Now" });
  document.querySelector("#messageInput").value = "";
  saveState();
  renderMessenger();
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => activateView(item.dataset.view));
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  currentUser = null;
  appShell.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

document.querySelector("#openSignup").addEventListener("click", (event) => {
  event.preventDefault();
  openSignup();
});
document.querySelector("#closeSignup").addEventListener("click", closeSignup);
document.querySelector("#cancelSignup").addEventListener("click", closeSignup);
document.querySelector("#signupPhone").addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
  if (event.target.value.length >= 13) validatePhoneNumber();
});
document.querySelector("#signupPhone").addEventListener("blur", validatePhoneNumber);
document.querySelector("#signupPassword").addEventListener("input", () => {
  validatePassword();
  if (document.querySelector("#confirmSignupPassword").value) validateConfirmPassword();
});
document.querySelector("#confirmSignupPassword").addEventListener("input", validateConfirmPassword);
document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.querySelector(`#${button.dataset.togglePassword}`);
    const nextType = input.type === "password" ? "text" : "password";
    input.type = nextType;
    button.textContent = nextType === "password" ? "Show" : "Hide";
  });
});
document.querySelector("#extractFbPage").addEventListener("click", () => {
  const url = document.querySelector("#fbPageUrl").value.trim();
  const inferredName = inferFacebookPageFromUrl(url);
  if (!inferredName) {
    setMessage("#signupMessage", "Paste a valid Facebook Page URL first.");
    return;
  }
  document.querySelector("#fbPageName").value = inferredName;
  setMessage("#signupMessage", "Facebook Page detected from URL.", true);
  updateFacebookPreview();
});
document.querySelector("#useDemoFbPage").addEventListener("click", () => {
  const page = defaultFacebookPage();
  document.querySelector("#fbPageUrl").value = page.url;
  document.querySelector("#fbPageName").value = page.name;
  document.querySelector("#fbPageCategory").value = "Ukay-Ukay Store";
  document.querySelector("#fbPageFollowers").value = page.followers;
  setMessage("#signupMessage", "Demo Facebook Page loaded.", true);
  updateFacebookPreview({ ...page, category: "Ukay-Ukay Store" });
});
["#fbPageName", "#fbPageCategory", "#fbPageFollowers"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", () => updateFacebookPreview());
});
signupForm.addEventListener("submit", registerUser);
document.querySelector("#openAddModal").addEventListener("click", openModal);
document.querySelector("#closeModal").addEventListener("click", closeModal);
document.querySelector("#cancelModal").addEventListener("click", closeModal);
document.querySelector("#inventorySearch").addEventListener("input", renderInventory);
document.querySelector("#posSearch").addEventListener("input", renderPOS);
document.querySelector("#clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
});
document.querySelector("#processPayment").addEventListener("click", processPayment);
document.querySelector("#startLiveButton").addEventListener("click", () => {
  document.querySelector("#liveStatus").textContent = "Live";
  document.querySelector("#liveStatus").className = "status in";
});
document.querySelector("#copyLiveScript").addEventListener("click", () => {
  navigator.clipboard?.writeText(document.querySelector("#liveScript").textContent.trim());
});
document.querySelector("#generateCaptions").addEventListener("click", renderPosts);
document.querySelector("#runAutomations").addEventListener("click", () => {
  state.comments.forEach((comment) => {
    if (comment.type === "Mine" && comment.status === "Pending") comment.status = "Ready";
  });
  saveState();
  renderAll();
});
document.querySelector("#sendQuickReply").addEventListener("click", () => {
  sendMessage("Hi po! Mine confirmed. Please send payment screenshot to reserve your item.");
});
document.querySelector("#sendMessage").addEventListener("click", () => {
  sendMessage(document.querySelector("#messageInput").value);
});
document.querySelector("#messageInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") sendMessage(event.target.value);
});

document.querySelector(".payment-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;
  selectedPayment = button.dataset.payment;
  document.querySelectorAll("[data-payment]").forEach((item) => item.classList.toggle("active", item === button));
});

document.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete]");
  const addButton = event.target.closest("[data-add-cart]");
  const minusButton = event.target.closest("[data-cart-minus]");
  const plusButton = event.target.closest("[data-cart-plus]");
  const createOrderButton = event.target.closest("[data-create-order]");
  const markPaidButton = event.target.closest("[data-mark-paid]");
  const chatButton = event.target.closest("[data-chat]");
  const toggleRuleButton = event.target.closest("[data-toggle-rule]");
  const viewShortcutButton = event.target.closest("[data-view-shortcut]");

  if (deleteButton) {
    const confirmed = confirm("Delete this item? This cannot be undone.");
    if (!confirmed) return;
    state.inventory = state.inventory.filter((item) => item.id !== deleteButton.dataset.delete);
    cart = cart.filter((line) => line.id !== deleteButton.dataset.delete);
    saveState();
    renderAll();
  }

  if (addButton) addToCart(addButton.dataset.addCart);
  if (minusButton) changeCartQty(minusButton.dataset.cartMinus, -1);
  if (plusButton) changeCartQty(plusButton.dataset.cartPlus, 1);
  if (createOrderButton) createOrderFromComment(createOrderButton.dataset.createOrder);
  if (markPaidButton) markOrderPaid(markPaidButton.dataset.markPaid);
  if (chatButton) {
    activeChatId = chatButton.dataset.chat;
    renderMessenger();
  }
  if (toggleRuleButton) {
    const rule = state.automations.find((entry) => entry.id === toggleRuleButton.dataset.toggleRule);
    if (rule) {
      rule.enabled = !rule.enabled;
      saveState();
      renderAutomation();
    }
  }
  if (viewShortcutButton) activateView(viewShortcutButton.dataset.viewShortcut);
});

// bind export button
const exportBtn = document.querySelector("#exportInventory");
if (exportBtn) exportBtn.addEventListener("click", exportInventoryCSV);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

signupBackdrop.addEventListener("click", (event) => {
  if (event.target !== signupBackdrop) return;
  setMessage("#signupMessage", "Complete the signup form or use Cancel to close.");
  signupForm.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 180, easing: "ease-out" }
  );
});

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(itemForm);
  const category = data.get("category");
  const image = category === "Dresses" ? "dress" : category === "Bottoms" ? "jeans" : category === "Tops" ? "sweater" : "jacket";

  state.inventory.push({
    id: crypto.randomUUID(),
    sku: data.get("sku"),
    name: data.get("name"),
    category,
    brand: data.get("brand") || "Unbranded",
    color: data.get("color"),
    size: data.get("size"),
    cost: Number(data.get("cost")) || 0,
    price: Number(data.get("price")) || 0,
    qty: Number(data.get("qty")) || 0,
    supplier: data.get("supplier"),
    sold: 0,
    image
  });

  saveState();
  closeModal();
  renderAll();
  activateView("inventory");
});

renderAll();
