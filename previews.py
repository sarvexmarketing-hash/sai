"""
Live Interactive Previews for the 5 Software Archetypes
Rendered inside the sandboxed preview iframe of the Sai Technologies Workspace Studio.
"""

def get_preview_html(archetype_id):
    if archetype_id == "website":
        return get_website_preview()
    elif archetype_id == "webapp":
        return get_webapp_preview()
    elif archetype_id == "crm":
        return get_crm_preview()
    elif archetype_id == "erp":
        return get_erp_preview()
    elif archetype_id == "mobile":
        return get_mobile_preview()
    return get_website_preview()

def get_website_preview():
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nexus Store Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #09090c; color: #f4f4f0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    .beam {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
      box-shadow: 0 0 16px rgba(255,255,255,0.25) inset;
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col justify-between">
  <!-- Top Announcement -->
  <div class="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border-b border-white/10 px-4 py-2 text-center text-xs text-neutral-300">
    ⚡ Autonomous AI Build: Nexus Store v1.0.0 • Free Global Shipping on orders over $150
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-30 backdrop-blur-md bg-black/70 border-b border-white/10 px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="size-8 rounded-lg bg-white text-black font-black flex items-center justify-center text-sm">N</div>
      <span class="font-bold tracking-wider text-base">NEXUS STORE</span>
    </div>
    <div class="flex items-center gap-4">
      <button onclick="toggleCart()" class="relative px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors flex items-center gap-2">
        <span>Cart</span>
        <span id="cartCountBadge" class="size-5 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">0</span>
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 mb-6">
      <span class="size-2 rounded-full bg-emerald-400 animate-pulse"></span> Production Ready Next.js 15
    </div>
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Precision Engineered Hardware.</h1>
    <p class="text-neutral-400 max-w-xl mx-auto text-sm md:text-base mb-8">Crafted for creators and developers who demand unyielding performance and minimalist design.</p>
    <div class="flex items-center justify-center gap-3">
      <button onclick="document.getElementById('catalog').scrollIntoView({behavior:'smooth'})" class="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform">Explore Catalog</button>
      <button onclick="alert('Synthesized with Sai Technologies Multi-Agent Platform')" class="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-sm font-medium transition-colors">Architecture Spec</button>
    </div>
  </section>

  <!-- Catalog Section -->
  <section id="catalog" class="max-w-6xl mx-auto px-6 py-8 w-full flex-1">
    <div class="flex flex-col sm:flex-row items-baseline justify-between mb-8 pb-4 border-b border-white/10 gap-4">
      <h2 class="text-xl font-bold">Featured Hardware</h2>
      <div class="flex gap-2 text-xs">
        <button onclick="filterProducts('all')" class="cat-btn px-3 py-1.5 rounded-full bg-white text-black font-semibold">All</button>
        <button onclick="filterProducts('Audio')" class="cat-btn px-3 py-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white">Audio</button>
        <button onclick="filterProducts('Wearables')" class="cat-btn px-3 py-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white">Wearables</button>
        <button onclick="filterProducts('Workspace')" class="cat-btn px-3 py-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white">Workspace</button>
      </div>
    </div>

    <!-- Product Grid -->
    <div id="productGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white/10 bg-black/40 py-6 px-6 text-center text-xs text-neutral-500">
    Generated autonomously by Sai Technologies AI Software Platform • 100% Responsive Full-Stack Architecture
  </footer>

  <!-- Slide-over Cart Drawer -->
  <div id="cartDrawer" class="fixed inset-0 z-50 pointer-events-none transition-all duration-300 opacity-0">
    <div onclick="toggleCart()" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#111116] border-l border-white/10 p-6 flex flex-col justify-between transform translate-x-full transition-transform duration-300" id="cartContent">
      <div>
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 class="font-bold text-lg">Your Cart</h3>
          <button onclick="toggleCart()" class="text-neutral-400 hover:text-white text-lg font-bold">✕</button>
        </div>
        <div id="cartItemsList" class="mt-4 space-y-3 max-h-[60vh] overflow-y-auto">
          <!-- Items inserted here -->
        </div>
      </div>
      <div class="border-t border-white/10 pt-4 space-y-3">
        <div class="flex justify-between text-sm text-neutral-400">
          <span>Subtotal</span>
          <span id="cartSubtotal" class="font-semibold text-white">$0.00</span>
        </div>
        <div class="flex justify-between text-sm text-neutral-400">
          <span>Sales Tax (8%)</span>
          <span id="cartTax" class="font-semibold text-white">$0.00</span>
        </div>
        <div class="flex justify-between text-base font-bold text-white pt-2 border-t border-white/5">
          <span>Total</span>
          <span id="cartTotal">$0.00</span>
        </div>
        <button onclick="openCheckout()" class="w-full py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-[1.02] transition-transform">
          Checkout with Stripe
        </button>
      </div>
    </div>
  </div>

  <!-- Stripe Checkout Modal -->
  <div id="checkoutModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
    <div class="bg-[#141418] border border-white/15 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
      <button onclick="closeCheckout()" class="absolute top-4 right-4 text-neutral-400 hover:text-white">✕</button>
      <div class="flex items-center gap-2 mb-4">
        <span class="text-lg font-bold">Stripe Secure Checkout</span>
      </div>
      <p class="text-xs text-neutral-400 mb-4">Simulated test payment gateway synthesized by Backend Agent.</p>
      <form onsubmit="handlePayment(event)" class="space-y-4">
        <div>
          <label class="text-xs text-neutral-400 block mb-1">Email Address</label>
          <input required type="email" value="alex@example.com" class="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-sm focus:outline-none focus:border-white">
        </div>
        <div>
          <label class="text-xs text-neutral-400 block mb-1">Card Number</label>
          <input required type="text" value="4242 •••• •••• 4242" class="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-sm focus:outline-none focus:border-white">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs text-neutral-400 block mb-1">Exp Date</label>
            <input required type="text" value="12/28" class="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-sm">
          </div>
          <div>
            <label class="text-xs text-neutral-400 block mb-1">CVC</label>
            <input required type="text" value="382" class="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-sm">
          </div>
        </div>
        <button type="submit" id="payBtn" class="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-colors mt-2">
          Pay Now
        </button>
      </form>
    </div>
  </div>

  <script>
    const products = [
      { id: 1, name: 'Cyber Minimalist Watch', category: 'Wearables', price: 289, rating: 4.9, stock: 14, tag: 'Bestseller', img: '⌚' },
      { id: 2, name: 'Acoustic Studio Monitors', category: 'Audio', price: 450, rating: 5.0, stock: 8, tag: 'New', img: '🎧' },
      { id: 3, name: 'Ergonomic Titanium Keyboard', category: 'Workspace', price: 219, rating: 4.8, stock: 22, tag: 'Featured', img: '⌨️' },
      { id: 4, name: 'Smart Ambient Luminary', category: 'Workspace', price: 135, rating: 4.7, stock: 35, tag: 'Trending', img: '💡' }
    ];

    let cart = [];

    function renderProducts(filter = 'all') {
      const grid = document.getElementById('productGrid');
      const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
      grid.innerHTML = filtered.map(p => `
        <div class="group p-5 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
          <div>
            <div class="h-44 rounded-xl bg-black/60 border border-white/5 flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
              ${p.img}
            </div>
            <div class="flex items-center justify-between text-xs text-neutral-400 mb-1">
              <span>${p.category}</span>
              <span class="text-amber-400">★ ${p.rating}</span>
            </div>
            <h3 class="font-bold text-base text-white group-hover:text-emerald-400 transition-colors">${p.name}</h3>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span class="font-extrabold text-lg">$${p.price}</span>
            <button onclick="addToCart(${p.id})" class="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-neutral-200 hover:text-black font-medium text-xs transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      `).join('');
    }

    function filterProducts(cat) {
      document.querySelectorAll('.cat-btn').forEach(b => {
        b.className = b.textContent.trim().toLowerCase() === cat.toLowerCase()
          ? 'cat-btn px-3 py-1.5 rounded-full bg-white text-black font-semibold'
          : 'cat-btn px-3 py-1.5 rounded-full bg-white/10 text-neutral-400 hover:text-white';
      });
      renderProducts(cat);
    }

    function addToCart(productId) {
      const prod = products.find(p => p.id === productId);
      const existing = cart.find(i => i.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ ...prod, qty: 1 });
      }
      updateCartUI();
      toggleCart(true);
    }

    function updateCartUI() {
      const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
      document.getElementById('cartCountBadge').textContent = totalCount;
      const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
      const tax = subtotal * 0.08;
      const total = subtotal + tax;

      document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
      document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;

      const list = document.getElementById('cartItemsList');
      if (cart.length === 0) {
        list.innerHTML = `<p class="text-neutral-500 text-sm text-center py-8">Your cart is currently empty.</p>`;
        return;
      }
      list.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
          <div class="flex items-center gap-3">
            <div class="text-2xl">${item.img}</div>
            <div>
              <p class="font-medium text-sm text-white">${item.name}</p>
              <p class="text-xs text-neutral-400">$${item.price} × ${item.qty}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="changeQty(${item.id}, -1)" class="size-6 rounded bg-white/10 hover:bg-white/20 text-xs">-</button>
            <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)" class="size-6 rounded bg-white/10 hover:bg-white/20 text-xs">+</button>
          </div>
        </div>
      `).join('');
    }

    function changeQty(id, delta) {
      const item = cart.find(i => i.id === id);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
      updateCartUI();
    }

    function toggleCart(forceOpen) {
      const drawer = document.getElementById('cartDrawer');
      const content = document.getElementById('cartContent');
      const isOpen = !drawer.classList.contains('pointer-events-none');
      if (forceOpen || !isOpen) {
        drawer.classList.remove('pointer-events-none', 'opacity-0');
        drawer.classList.add('opacity-100');
        content.classList.remove('translate-x-full');
      } else {
        drawer.classList.add('pointer-events-none', 'opacity-0');
        drawer.classList.remove('opacity-100');
        content.classList.add('translate-x-full');
      }
    }

    function openCheckout() {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      toggleCart(false);
      document.getElementById('checkoutModal').classList.remove('hidden');
    }

    function closeCheckout() {
      document.getElementById('checkoutModal').classList.add('hidden');
    }

    function handlePayment(e) {
      e.preventDefault();
      const btn = document.getElementById('payBtn');
      btn.textContent = 'Processing Payment...';
      btn.disabled = true;
      setTimeout(() => {
        alert("Payment Successful! Order #NX-8821 confirmed. Synthesized webhook fired.");
        cart = [];
        updateCartUI();
        closeCheckout();
        btn.textContent = 'Pay Now';
        btn.disabled = false;
      }, 1000);
    }

    renderProducts();
  </script>
</body>
</html>"""

def get_webapp_preview():
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pulse Analytics Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #08080b; color: #f4f4f0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col md:flex-row">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-6 flex flex-col justify-between bg-black/40">
    <div>
      <div class="flex items-center gap-3 mb-8">
        <div class="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center">P</div>
        <h1 class="font-bold text-lg tracking-wide">PULSE SAAS</h1>
      </div>
      <nav class="space-y-2">
        <button id="nav-telemetry" onclick="setTab('telemetry')" class="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 text-white flex items-center justify-between">
          <span>📊 Telemetry & KPIs</span>
          <span class="size-2 rounded-full bg-emerald-400"></span>
        </button>
        <button id="nav-bookings" onclick="setTab('bookings')" class="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-neutral-400 hover:text-white flex items-center justify-between">
          <span>📅 Schedule & Bookings</span>
          <span class="text-xs bg-white/10 px-2 py-0.5 rounded-full">3</span>
        </button>
      </nav>
    </div>
    <div class="mt-8 md:mt-0 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400">
      <p class="font-medium text-white mb-1">Live Engine Node</p>
      <p>Cluster: us-east-1a</p>
      <p class="text-emerald-400 mt-1">● 99.98% Healthy</p>
    </div>
  </aside>

  <!-- Main Content Area -->
  <main class="flex-1 p-6 md:p-8 overflow-y-auto">
    <!-- Telemetry Tab -->
    <div id="tab-telemetry" class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold">Executive Performance</h2>
          <p class="text-xs text-neutral-400">Real-time metrics aggregated across multi-tenant cluster</p>
        </div>
        <div class="flex gap-2 text-xs">
          <button onclick="updateMetrics('7D')" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20">7 Days</button>
          <button onclick="updateMetrics('30D')" class="px-3 py-1.5 rounded-lg bg-white text-black font-semibold">30 Days</button>
          <button onclick="updateMetrics('1Y')" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20">1 Year</button>
        </div>
      </div>

      <!-- KPI Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10">
          <p class="text-xs text-neutral-400 mb-1">Monthly Recurring Revenue</p>
          <h3 id="mrrVal" class="text-2xl font-extrabold text-white">$48,920</h3>
          <span class="inline-block mt-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">↑ 14.2% vs last month</span>
        </div>
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10">
          <p class="text-xs text-neutral-400 mb-1">Active Subscribers</p>
          <h3 id="usersVal" class="text-2xl font-extrabold text-white">3,420</h3>
          <span class="inline-block mt-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">↑ 8.4% new signups</span>
        </div>
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10">
          <p class="text-xs text-neutral-400 mb-1">Customer Churn</p>
          <h3 class="text-2xl font-extrabold text-white">1.18%</h3>
          <span class="inline-block mt-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">↓ -0.3% low risk</span>
        </div>
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10">
          <p class="text-xs text-neutral-400 mb-1">Avg Customer LTV</p>
          <h3 class="text-2xl font-extrabold text-white">$1,850</h3>
          <span class="inline-block mt-2 text-xs text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded">↑ $120 expansion</span>
        </div>
      </div>

      <!-- Simulated Interactive Bar Chart -->
      <div class="p-6 rounded-2xl bg-[#111116] border border-white/10">
        <div class="flex items-center justify-between mb-6">
          <h3 class="font-bold text-sm">Revenue Trajectory ($ USD)</h3>
          <span class="text-xs text-neutral-400">Synthesized Recharts Data Engine</span>
        </div>
        <div class="h-48 flex items-end gap-3 pt-6 border-b border-white/10 pb-2" id="chartBars">
          <!-- Bars -->
        </div>
        <div class="flex justify-between text-xs text-neutral-500 pt-2">
          <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
        </div>
      </div>
    </div>

    <!-- Bookings Tab -->
    <div id="tab-bookings" class="space-y-6 hidden">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold">Client Appointments</h2>
          <p class="text-xs text-neutral-400">Real-time scheduling and consultation reservations</p>
        </div>
        <button onclick="promptNewBooking()" class="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-transform">+ New Booking</button>
      </div>

      <div class="rounded-2xl bg-[#111116] border border-white/10 overflow-hidden">
        <table class="w-full text-left text-sm">
          <thead class="bg-black/50 text-neutral-400 text-xs border-b border-white/10">
            <tr>
              <th class="p-4">Client Name</th>
              <th class="p-4">Service</th>
              <th class="p-4">Date & Time</th>
              <th class="p-4">Status</th>
              <th class="p-4">Action</th>
            </tr>
          </thead>
          <tbody id="bookingsTbody" class="divide-y divide-white/5">
            <!-- Rows -->
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <script>
    let bookings = [
      { id: "b-101", client: "Sarah Jenkins", service: "Executive Consultation", date: "Tomorrow, 10:00 AM", status: "confirmed" },
      { id: "b-102", client: "Mark Zuckerberg", service: "Architecture Review", date: "Nov 5, 2:30 PM", status: "confirmed" },
      { id: "b-103", client: "Elena Rostova", service: "Security Audit", date: "Nov 6, 11:00 AM", status: "pending" }
    ];

    function setTab(tab) {
      if (tab === 'telemetry') {
        document.getElementById('tab-telemetry').classList.remove('hidden');
        document.getElementById('tab-bookings').classList.add('hidden');
        document.getElementById('nav-telemetry').className = "w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 text-white flex items-center justify-between";
        document.getElementById('nav-bookings').className = "w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-neutral-400 hover:text-white flex items-center justify-between";
      } else {
        document.getElementById('tab-telemetry').classList.add('hidden');
        document.getElementById('tab-bookings').classList.remove('hidden');
        document.getElementById('nav-bookings').className = "w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 text-white flex items-center justify-between";
        document.getElementById('nav-telemetry').className = "w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-neutral-400 hover:text-white flex items-center justify-between";
        renderBookings();
      }
    }

    function renderBars() {
      const barsContainer = document.getElementById('chartBars');
      const heights = [45, 62, 78, 92, 68, 85, 96, 88, 100, 94, 98, 105];
      barsContainer.innerHTML = heights.map((h, i) => `
        <div class="flex-1 flex flex-col items-center gap-1 group">
          <div style="height: ${h}%" class="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm group-hover:brightness-125 transition-all"></div>
        </div>
      `).join('');
    }

    function updateMetrics(range) {
      if (range === '7D') {
        document.getElementById('mrrVal').textContent = "$12,410";
        document.getElementById('usersVal').textContent = "1,105";
      } else if (range === '1Y') {
        document.getElementById('mrrVal').textContent = "$512,800";
        document.getElementById('usersVal').textContent = "38,200";
      } else {
        document.getElementById('mrrVal').textContent = "$48,920";
        document.getElementById('usersVal').textContent = "3,420";
      }
    }

    function renderBookings() {
      const tbody = document.getElementById('bookingsTbody');
      tbody.innerHTML = bookings.map(b => `
        <tr class="hover:bg-white/5 transition-colors">
          <td class="p-4 font-semibold text-white">${b.client}</td>
          <td class="p-4 text-neutral-300">${b.service}</td>
          <td class="p-4 text-neutral-400">${b.date}</td>
          <td class="p-4">
            <span class="px-2 py-0.5 rounded text-xs font-semibold ${b.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}">
              ${b.status}
            </span>
          </td>
          <td class="p-4">
            <button onclick="cancelBooking('${b.id}')" class="text-xs text-red-400 hover:text-red-300">Cancel</button>
          </td>
        </tr>
      `).join('');
    }

    function promptNewBooking() {
      const name = prompt("Client Name:");
      if (!name) return;
      const service = prompt("Service Type:", "System Audit");
      bookings.push({
        id: "b-" + Date.now(),
        client: name,
        service: service || "Consultation",
        date: "Nov 8, 3:00 PM",
        status: "confirmed"
      });
      renderBookings();
    }

    function cancelBooking(id) {
      bookings = bookings.filter(b => b.id !== id);
      renderBookings();
    }

    renderBars();
  </script>
</body>
</html>"""

def get_crm_preview():
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Apex CRM Pipeline</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #07070a; color: #f4f4f0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">
  <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black/50">
    <div class="flex items-center gap-3">
      <div class="size-8 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center">A</div>
      <span class="font-bold text-lg tracking-wide">APEX CRM</span>
    </div>
    <div class="flex items-center gap-4">
      <div class="text-right">
        <p class="text-xs text-neutral-400">Total Active Pipeline</p>
        <p id="pipelineTotal" class="text-sm font-bold text-emerald-400">$229,000</p>
      </div>
      <button onclick="addDeal()" class="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-transform">+ Add Deal</button>
    </div>
  </header>

  <main class="flex-1 p-6 overflow-x-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 min-w-[900px] h-full items-start">
      <!-- Stage 1 -->
      <div class="bg-[#111116] border border-white/10 rounded-2xl p-4 flex flex-col">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
          <span class="font-bold text-xs uppercase tracking-wider text-neutral-400">1. Leads & Prospect</span>
          <span id="badge-LEAD" class="text-xs bg-white/10 px-2 py-0.5 rounded-full">0</span>
        </div>
        <div id="col-LEAD" class="space-y-3 min-h-[300px]"></div>
      </div>

      <!-- Stage 2 -->
      <div class="bg-[#111116] border border-white/10 rounded-2xl p-4 flex flex-col">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
          <span class="font-bold text-xs uppercase tracking-wider text-neutral-400">2. Qualified</span>
          <span id="badge-QUALIFIED" class="text-xs bg-white/10 px-2 py-0.5 rounded-full">0</span>
        </div>
        <div id="col-QUALIFIED" class="space-y-3 min-h-[300px]"></div>
      </div>

      <!-- Stage 3 -->
      <div class="bg-[#111116] border border-white/10 rounded-2xl p-4 flex flex-col">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
          <span class="font-bold text-xs uppercase tracking-wider text-neutral-400">3. Proposal Sent</span>
          <span id="badge-PROPOSAL" class="text-xs bg-white/10 px-2 py-0.5 rounded-full">0</span>
        </div>
        <div id="col-PROPOSAL" class="space-y-3 min-h-[300px]"></div>
      </div>

      <!-- Stage 4 -->
      <div class="bg-[#111116] border border-emerald-500/30 rounded-2xl p-4 flex flex-col">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-emerald-500/20">
          <span class="font-bold text-xs uppercase tracking-wider text-emerald-400">4. Closed & Won</span>
          <span id="badge-WON" class="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">0</span>
        </div>
        <div id="col-WON" class="space-y-3 min-h-[300px]"></div>
      </div>
    </div>
  </main>

  <script>
    let deals = [
      { id: "d-1", title: "Enterprise Cloud Migration", value: 75000, stage: "PROPOSAL", company: "Acme Global", contact: "David Miller" },
      { id: "d-2", title: "Cybersecurity Retainer", value: 34000, stage: "QUALIFIED", company: "Fintech Horizons", contact: "Alice Chen" },
      { id: "d-3", title: "AI Integration Contract", value: 120000, stage: "WON", company: "OmniCorp Labs", contact: "Victor Vance" }
    ];

    const stages = ["LEAD", "QUALIFIED", "PROPOSAL", "WON"];

    function renderPipeline() {
      stages.forEach(st => {
        const col = document.getElementById('col-' + st);
        const stageDeals = deals.filter(d => d.stage === st);
        document.getElementById('badge-' + st).textContent = stageDeals.length;
        col.innerHTML = stageDeals.map(d => `
          <div class="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-white/25 transition-all">
            <h4 class="font-bold text-sm text-white mb-1">${d.title}</h4>
            <p class="text-xs text-neutral-400 mb-2">${d.company} • ${d.contact}</p>
            <div class="flex items-center justify-between pt-2 border-t border-white/5">
              <span class="font-bold text-emerald-400 text-sm">$${d.value.toLocaleString()}</span>
              ${st !== 'WON' ? `<button onclick="advanceDeal('${d.id}')" class="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white text-white hover:text-black transition-colors font-medium">Advance →</button>` : `<span class="text-xs text-emerald-400 font-bold">✓ Won</span>`}
            </div>
          </div>
        `).join('');
      });

      const total = deals.reduce((acc, d) => acc + d.value, 0);
      document.getElementById('pipelineTotal').textContent = `$${total.toLocaleString()}`;
    }

    function advanceDeal(id) {
      const deal = deals.find(d => d.id === id);
      if (!deal) return;
      const idx = stages.indexOf(deal.stage);
      if (idx < stages.length - 1) {
        deal.stage = stages[idx + 1];
        renderPipeline();
      }
    }

    function addDeal() {
      const title = prompt("Deal Title:");
      if (!title) return;
      const company = prompt("Company Name:", "Starlight Inc");
      const valStr = prompt("Estimated Value ($):", "50000");
      deals.push({
        id: "d-" + Date.now(),
        title: title,
        company: company || "New Account",
        value: parseInt(valStr || "50000", 10),
        stage: "LEAD",
        contact: "Direct Lead"
      });
      renderPipeline();
    }

    renderPipeline();
  </script>
</body>
</html>"""

def get_erp_preview():
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vanguard ERP Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #070709; color: #f4f4f0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">
  <header class="border-b border-white/10 px-8 py-4 flex items-center justify-between bg-black/50">
    <div class="flex items-center gap-3">
      <div class="size-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center">V</div>
      <span class="font-bold text-lg tracking-wide">VANGUARD ERP</span>
    </div>
    <div class="flex gap-2">
      <button onclick="setTab('inv')" id="btn-inv" class="px-4 py-2 rounded-lg text-sm bg-white/10 text-white font-semibold">📦 Inventory</button>
      <button onclick="setTab('hr')" id="btn-hr" class="px-4 py-2 rounded-lg text-sm text-neutral-400 hover:text-white font-semibold">👥 HR & Payroll</button>
      <button onclick="setTab('fin')" id="btn-fin" class="px-4 py-2 rounded-lg text-sm text-neutral-400 hover:text-white font-semibold">📈 Financial Ledger</button>
    </div>
  </header>

  <main class="flex-1 p-8">
    <!-- Inventory Section -->
    <div id="tab-inv" class="space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold">Warehouse Stock & Reorder Levels</h2>
        <span class="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full font-semibold">Low Stock Threshold: Active</span>
      </div>
      <div class="rounded-2xl bg-[#111116] border border-white/10 overflow-hidden">
        <table class="w-full text-left text-sm">
          <thead class="bg-black/50 text-neutral-400 text-xs border-b border-white/10">
            <tr>
              <th class="p-4">SKU Code</th>
              <th class="p-4">Item Name</th>
              <th class="p-4">In Stock</th>
              <th class="p-4">Reorder Min</th>
              <th class="p-4">Unit Cost</th>
              <th class="p-4">Status</th>
              <th class="p-4">Action</th>
            </tr>
          </thead>
          <tbody id="invTbody" class="divide-y divide-white/5"></tbody>
        </table>
      </div>
    </div>

    <!-- HR Section -->
    <div id="tab-hr" class="space-y-6 hidden">
      <h2 class="text-xl font-bold">Personnel & Payroll Ledger</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10 flex items-center justify-between">
          <div>
            <p class="text-xs text-neutral-400">Total Active Employees</p>
            <p class="text-2xl font-bold mt-1">42 Headcount</p>
          </div>
          <span class="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">100% Retained</span>
        </div>
        <div class="p-5 rounded-2xl bg-[#111116] border border-white/10 flex items-center justify-between">
          <div>
            <p class="text-xs text-neutral-400">Monthly Payroll Allocation</p>
            <p class="text-2xl font-bold mt-1 text-amber-400">$237,000 / mo</p>
          </div>
          <span class="text-xs bg-white/10 text-neutral-300 px-3 py-1 rounded-full">Direct Deposit Ready</span>
        </div>
      </div>
    </div>

    <!-- Finance Section -->
    <div id="tab-fin" class="space-y-6 hidden">
      <h2 class="text-xl font-bold">Corporate Balance Sheet</h2>
      <div class="p-6 rounded-2xl bg-[#111116] border border-white/10 space-y-4">
        <div class="flex justify-between py-2 border-b border-white/10">
          <span class="text-neutral-400">Gross Q4 Revenue</span>
          <span class="font-bold text-emerald-400">$1,450,000</span>
        </div>
        <div class="flex justify-between py-2 border-b border-white/10">
          <span class="text-neutral-400">Operational & Inventory COGS</span>
          <span class="font-bold text-red-400">-$620,000</span>
        </div>
        <div class="flex justify-between py-2 border-b border-white/10">
          <span class="text-neutral-400">Payroll & R&D Overhead</span>
          <span class="font-bold text-red-400">-$310,000</span>
        </div>
        <div class="flex justify-between py-2 pt-4 text-lg font-bold">
          <span>Net Operating Profit</span>
          <span class="text-emerald-400">$520,000</span>
        </div>
      </div>
    </div>
  </main>

  <script>
    let inventory = [
      { sku: "SKU-9921", name: "Lithium Battery Cells 48V", quantity: 142, reorderMin: 200, unitCost: 48.5, location: "Warehouse B-04" },
      { sku: "SKU-3104", name: "Precision CNC Bearings", quantity: 890, reorderMin: 300, unitCost: 12.0, location: "Warehouse A-12" }
    ];

    function setTab(tab) {
      ['inv', 'hr', 'fin'].forEach(t => {
        document.getElementById('tab-' + t).classList.add('hidden');
        document.getElementById('btn-' + t).className = "px-4 py-2 rounded-lg text-sm text-neutral-400 hover:text-white font-semibold";
      });
      document.getElementById('tab-' + tab).classList.remove('hidden');
      document.getElementById('btn-' + tab).className = "px-4 py-2 rounded-lg text-sm bg-white/10 text-white font-semibold";
    }

    function renderInv() {
      const tbody = document.getElementById('invTbody');
      tbody.innerHTML = inventory.map(item => {
        const isLow = item.quantity < item.reorderMin;
        return `
          <tr class="hover:bg-white/5 transition-colors">
            <td class="p-4 font-mono text-xs text-neutral-400">${item.sku}</td>
            <td class="p-4 font-semibold text-white">${item.name}</td>
            <td class="p-4 font-bold ${isLow ? 'text-red-400' : 'text-emerald-400'}">${item.quantity}</td>
            <td class="p-4 text-neutral-400">${item.reorderMin}</td>
            <td class="p-4">$${item.unitCost.toFixed(2)}</td>
            <td class="p-4">
              <span class="px-2 py-0.5 rounded text-xs font-semibold ${isLow ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}">
                ${isLow ? '⚠️ REORDER NEEDED' : 'OK'}
              </span>
            </td>
            <td class="p-4">
              <button onclick="restock('${item.sku}')" class="px-3 py-1 rounded bg-white text-black text-xs font-semibold hover:scale-105 transition-transform">
                + Restock 100
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    function restock(sku) {
      const item = inventory.find(i => i.sku === sku);
      if (item) {
        item.quantity += 100;
        renderInv();
      }
    }

    renderInv();
  </script>
</body>
</html>"""

def get_mobile_preview():
    return """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nova Mobile Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #050508; color: #f4f4f0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body class="antialiased min-h-screen flex items-center justify-center p-4">
  <!-- Smartphone Frame -->
  <div class="w-[360px] h-[720px] bg-black text-white rounded-[44px] border-[8px] border-[#222228] overflow-hidden flex flex-col shadow-2xl relative">
    <!-- Dynamic Island Notch -->
    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#16161a] rounded-full z-50 flex items-center justify-between px-2.5">
      <div class="size-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
      <div class="size-1.5 rounded-full bg-neutral-600"></div>
    </div>

    <!-- Status Bar -->
    <div class="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] text-neutral-400">
      <span>9:41</span>
      <div class="flex gap-1 items-center">
        <span>5G</span>
        <span>100%</span>
      </div>
    </div>

    <!-- App Body Content -->
    <div class="flex-1 overflow-y-auto px-4 pt-2 pb-16">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-black tracking-wider">NOVA FEED</h2>
        <span class="text-xs bg-white/10 px-2 py-0.5 rounded-full">v1.1</span>
      </div>

      <!-- Feed Cards -->
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-[#111116] border border-white/10">
          <div class="flex items-center gap-3 mb-3">
            <div class="size-9 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center font-bold text-xs">ML</div>
            <div>
              <p class="font-bold text-xs">Maya Lin</p>
              <p class="text-[10px] text-neutral-400">2h ago • San Francisco</p>
            </div>
          </div>
          <p class="text-xs text-neutral-300 mb-3">Synthesizing full-stack software straight from mobile using Sai Technologies's 8 autonomous agents. Instant hot reloading on every prompt!</p>
          <div class="h-32 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex items-center justify-center text-xs text-neutral-400">
            Interactive Video / 3D Canvas
          </div>
          <div class="flex items-center justify-between mt-3 pt-2 border-t border-white/5 text-xs text-neutral-400">
            <button onclick="toggleLike(this)" class="flex items-center gap-1 hover:text-pink-400 transition-colors">
              <span>❤️</span> <span class="like-cnt">48</span>
            </button>
            <button class="flex items-center gap-1 hover:text-white">
              <span>💬</span> <span>12</span>
            </button>
            <button class="hover:text-white">↗ Share</button>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#111116] border border-white/10">
          <div class="flex items-center gap-3 mb-3">
            <div class="size-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-xs">ZK</div>
            <div>
              <p class="font-bold text-xs">Zachary Kane</p>
              <p class="text-[10px] text-neutral-400">5h ago • Tokyo</p>
            </div>
          </div>
          <p class="text-xs text-neutral-300 mb-3">Testing the ERP inventory auto-reorder thresholds. The SQLite migration was completed in 140ms.</p>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation Bar -->
    <div class="absolute bottom-0 inset-x-0 h-14 bg-black/90 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-4">
      <button class="text-xs font-bold text-white flex flex-col items-center">
        <span>🔥</span>
        <span class="text-[9px]">Feed</span>
      </button>
      <button class="text-xs text-neutral-500 hover:text-white flex flex-col items-center">
        <span>🔍</span>
        <span class="text-[9px]">Discover</span>
      </button>
      <button class="text-xs text-neutral-500 hover:text-white flex flex-col items-center">
        <span>⚡</span>
        <span class="text-[9px]">Studio</span>
      </button>
      <button class="text-xs text-neutral-500 hover:text-white flex flex-col items-center">
        <span>👤</span>
        <span class="text-[9px]">Profile</span>
      </button>
    </div>
  </div>

  <script>
    function toggleLike(btn) {
      const span = btn.querySelector('.like-cnt');
      let cnt = parseInt(span.textContent, 10);
      span.textContent = cnt + 1;
      btn.classList.add('text-pink-400');
    }
  </script>
</body>
</html>"""

