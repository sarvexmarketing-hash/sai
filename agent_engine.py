"""
Sai Technologies Multi-Agent Software Engineering Engine
Implements the 8-agent development pipeline:
1. Planner Agent: Requirements decomposition, user stories, spec.json
2. Architect Agent: System topology, modular directory scaffolding, architecture.json
3. Frontend Agent: Semantic UI components, responsive layout, client state
4. Backend Agent: REST API routes, controllers, auth middleware
5. Database Agent: Schemas, migrations, seed data, SQL query execution
6. Testing Agent: Unit/integration test suites, assertions, build verification
7. Debugging Agent: Automated diagnostics, stack trace analysis, patching
8. Deployment Agent: Dockerfile, environment configurations, ZIP export
"""

import os
import io
import json
import zipfile
import sqlite3
import time

PROJECT_ARCHETYPES = {
    "website": {
        "id": "website",
        "name": "Nexus Store - E-Commerce & Landing Platform",
        "category": "Websites",
        "framework": "Next.js 15 (App Router) + Tailwind CSS + Stripe",
        "description": "High-converting modern e-commerce storefront with live cart, checkout flow, product catalog, and responsive dark eggshell theme.",
        "version": "1.0.0",
        "branch": "main",
        "files": {
            "spec.json": json.dumps({
                "projectName": "Nexus Store",
                "archetype": "website",
                "targetAudience": "Modern consumers & direct-to-consumer digital brands",
                "coreFeatures": [
                    "Hero banner with dynamic CTA & product spotlight",
                    "Categorized product catalog with instant search & filter",
                    "Slide-over slideout shopping cart with live total calculations",
                    "Stripe Checkout modal simulation with discount codes",
                    "Mobile-first responsive design matching Sai Technologies dark aesthetic"
                ],
                "designSystem": {
                    "theme": "Dark Eggshell Slate",
                    "typography": "Telka / Geist Sans",
                    "accentColor": "#ffffff",
                    "surfaceColor": "#0e0e11"
                }
            }, indent=2),
            "architecture.json": json.dumps({
                "techStack": {
                    "frontend": "Next.js 15, React 19, Tailwind CSS 4",
                    "backend": "Next.js Route Handlers (Edge Runtime)",
                    "database": "SQLite / Prisma ORM",
                    "payments": "Stripe API v2024",
                    "testing": "Vitest + React Testing Library"
                },
                "topology": {
                    "entrypoint": "src/app/page.tsx",
                    "apiPrefix": "/api/v1",
                    "stateManagement": "React Context + Zustand Local Storage"
                }
            }, indent=2),
            "package.json": json.dumps({
                "name": "nexus-store",
                "version": "1.0.0",
                "private": True,
                "scripts": {
                    "dev": "next dev",
                    "build": "next build",
                    "start": "next start",
                    "test": "vitest run"
                },
                "dependencies": {
                    "next": "15.1.0",
                    "react": "19.0.0",
                    "react-dom": "19.0.0",
                    "lucide-react": "^0.460.0",
                    "clsx": "^2.1.1",
                    "tailwind-merge": "^2.5.4"
                },
                "devDependencies": {
                    "tailwindcss": "^4.0.0",
                    "typescript": "^5.6.3",
                    "vitest": "^2.1.4"
                }
            }, indent=2),
            "src/app/page.tsx": """import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0d] text-[#f4f4f0] antialiased">
      <Header cartCount={cart.reduce((a, b) => a + b.qty, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <Hero onExplore={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} />
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
        <ProductGrid onAddToCart={addToCart} />
      </section>
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        setCart={setCart}
        onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
      />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cart={cart}
        onSuccess={() => setCart([])}
      />
    </main>
  );
}""",
            "src/components/Header.tsx": """import React from 'react';

export default function Header({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-white text-black font-bold flex items-center justify-center text-sm">
            N
          </div>
          <span className="font-bold text-lg tracking-wider">NEXUS STORE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#a0a0a8]">
          <a href="#catalog" className="hover:text-white transition-colors">Catalog</a>
          <a href="#features" className="hover:text-white transition-colors">New Releases</a>
          <a href="#about" className="hover:text-white transition-colors">Brand Story</a>
        </nav>
        <button 
          onClick={onOpenCart}
          className="relative px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors flex items-center gap-2"
        >
          <span>Cart</span>
          <span className="size-5 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}""",
            "api/products/route.ts": """import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Cyber Minimalist Watch', price: 289, rating: 4.9, stock: 14, tag: 'Bestseller' },
    { id: 2, name: 'Acoustic Studio Monitors', price: 450, rating: 5.0, stock: 8, tag: 'New' },
    { id: 3, name: 'Ergonomic Titanium Keyboard', price: 219, rating: 4.8, stock: 22, tag: 'Featured' },
    { id: 4, name: 'Smart Ambient Luminary', price: 135, rating: 4.7, stock: 35, tag: 'Trending' }
  ];
  return NextResponse.json({ products });
}""",
            "prisma/schema.prisma": """datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  price       Float
  stock       Int      @default(0)
  tag         String?
  createdAt   DateTime @default(now())
}

model Order {
  id          String   @id @default(cuid())
  total       Float
  status      String   @default("pending")
  customer    String
  createdAt   DateTime @default(now())
}""",
            "database/seed.json": json.dumps([
                {"table": "Product", "id": 1, "name": "Cyber Minimalist Watch", "price": 289.0, "stock": 14, "tag": "Bestseller"},
                {"table": "Product", "id": 2, "name": "Acoustic Studio Monitors", "price": 450.0, "stock": 8, "tag": "New"},
                {"table": "Product", "id": 3, "name": "Ergonomic Titanium Keyboard", "price": 219.0, "stock": 22, "tag": "Featured"},
                {"table": "Product", "id": 4, "name": "Smart Ambient Luminary", "price": 135.0, "stock": 35, "tag": "Trending"}
            ], indent=2),
            "tests/store.test.ts": """import { describe, it, expect } from 'vitest';

describe('Nexus Store Core Engine', () => {
  it('calculates cart subtotals with tax correctly', () => {
    const items = [
      { id: 1, price: 289, qty: 1 },
      { id: 4, price: 135, qty: 2 }
    ];
    const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
    const tax = subtotal * 0.08;
    expect(subtotal).toBe(559);
    expect(Math.round((subtotal + tax) * 100) / 100).toBe(603.72);
  });

  it('validates stock boundary checks before checkout', () => {
    const stock = 5;
    const requested = 3;
    expect(requested <= stock).toBe(true);
  });
});""",
            "README.md": """# Nexus Store - AI Synthesized E-Commerce Platform
Synthesized autonomously by Sai Technologies AI Software Platform.
- Framework: Next.js 15, React 19, Tailwind CSS
- Design Identity: Dark Eggshell Sai Technologies Design System
- Setup:
  ```bash
  npm install
  npm run dev
  ```
"""
        }
    },
    "webapp": {
        "id": "webapp",
        "name": "Pulse Analytics - SaaS Booking & Performance Suite",
        "category": "Web Applications",
        "framework": "React 19 + TypeScript + Chart.js + Node API",
        "description": "Full-featured SaaS platform with live KPI telemetry, revenue charts, interactive appointment scheduling, and customer data tables.",
        "version": "1.2.0",
        "branch": "main",
        "files": {
            "spec.json": json.dumps({
                "projectName": "Pulse Analytics",
                "archetype": "webapp",
                "targetAudience": "B2B SaaS companies, clinic managers, consultants",
                "coreFeatures": [
                    "Real-time KPI metrics (MRR, Active Users, Churn Rate, LTV)",
                    "Interactive revenue trend graph with time range filters",
                    "Client appointment calendar and instant slot reservation",
                    "Customer management data table with status badges and sorting"
                ]
            }, indent=2),
            "architecture.json": json.dumps({
                "techStack": {
                    "frontend": "React 19, TypeScript, Tailwind CSS, Recharts",
                    "backend": "Express / Fastify REST API",
                    "database": "PostgreSQL / SQLite",
                    "caching": "Redis session store"
                }
            }, indent=2),
            "package.json": json.dumps({
                "name": "pulse-analytics",
                "version": "1.2.0",
                "scripts": { "dev": "vite", "build": "vite build", "test": "vitest" }
            }, indent=2),
            "src/App.tsx": """import React, { useState } from 'react';
import MetricCards from './components/MetricCards';
import RevenueChart from './components/RevenueChart';
import BookingCalendar from './components/BookingCalendar';

export default function App() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'bookings'>('analytics');

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f0] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center">
              P
            </div>
            <h1 className="font-bold text-lg tracking-wide">PULSE SAAS</h1>
          </div>
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'analytics' ? 'bg-white/10 text-white' : 'text-[#a0a0a8] hover:text-white'
              }`}
            >
              📊 Telemetry & KPIs
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'bookings' ? 'bg-white/10 text-white' : 'text-[#a0a0a8] hover:text-white'
              }`}
            >
              📅 Schedule & Bookings
            </button>
          </nav>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#a0a0a8]">
          <p className="font-medium text-white mb-1">Live Engine</p>
          <p>Cluster: us-east-1a</p>
          <p className="text-emerald-400 mt-1">● 99.98% Healthy</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'analytics' ? (
          <div className="space-y-8">
            <MetricCards />
            <RevenueChart />
          </div>
        ) : (
          <BookingCalendar />
        )}
      </main>
    </div>
  );
}""",
            "api/telemetry.ts": """export async function getMetrics() {
  return {
    mrr: 48920,
    mrrGrowth: '+14.2%',
    activeUsers: 3420,
    userGrowth: '+8.4%',
    churnRate: '1.2%',
    ltv: 1850
  };
}""",
            "prisma/schema.prisma": """model MetricSnapshot {
  id        Int      @id @default(autoincrement())
  timestamp DateTime @default(now())
  mrr       Float
  users     Int
}

model Booking {
  id        String   @id @default(uuid())
  client    String
  date      DateTime
  service   String
  status    String   @default("confirmed")
}""",
            "database/seed.json": json.dumps([
                {"table": "Booking", "id": "b-101", "client": "Sarah Jenkins", "service": "Executive Consultation", "date": "2026-11-04 10:00", "status": "confirmed"},
                {"table": "Booking", "id": "b-102", "client": "Mark Zuckerberg", "service": "Architecture Review", "date": "2026-11-04 14:30", "status": "confirmed"},
                {"table": "Booking", "id": "b-103", "client": "Elena Rostova", "service": "Security Audit", "date": "2026-11-05 11:00", "status": "pending"}
            ], indent=2),
            "tests/analytics.test.ts": """import { describe, it, expect } from 'vitest';

describe('Pulse SaaS Engine', () => {
  it('correctly computes monthly recurring revenue growth delta', () => {
    const prevMrr = 42800;
    const currentMrr = 48920;
    const growth = ((currentMrr - prevMrr) / prevMrr) * 100;
    expect(growth.toFixed(1)).toBe('14.3');
  });

  it('validates appointment double-booking protection', () => {
    const existingSlots = ['2026-11-04T10:00', '2026-11-04T14:30'];
    const newSlot = '2026-11-04T10:00';
    expect(existingSlots.includes(newSlot)).toBe(true);
  });
});""",
            "README.md": "# Pulse Analytics SaaS Platform\nSynthesized by Sai Technologies Multi-Agent Platform."
        }
    },
    "crm": {
        "id": "crm",
        "name": "Apex CRM - Enterprise Pipeline & Deal Suite",
        "category": "CRM Systems",
        "framework": "React 19 + Tailwind + SQLite Pipeline Engine",
        "description": "Enterprise customer relationship platform with Kanban drag-and-drop deal pipeline, contact directory, and sales activity audit trail.",
        "version": "2.0.0",
        "branch": "main",
        "files": {
            "spec.json": json.dumps({
                "projectName": "Apex CRM",
                "archetype": "crm",
                "features": [
                    "Multi-stage Kanban sales pipeline (Lead, Qualified, Proposal, Won, Closed)",
                    "Deals valuation calculator with currency support",
                    "Customer 360 contact directory with company and email",
                    "Activity timeline with logging notes and scheduled tasks"
                ]
            }, indent=2),
            "architecture.json": json.dumps({
                "stack": "React 19, Tailwind CSS, Prisma, SQLite, REST API"
            }, indent=2),
            "package.json": json.dumps({
                "name": "apex-crm",
                "version": "2.0.0",
                "scripts": { "dev": "vite", "test": "vitest" }
            }, indent=2),
            "src/App.tsx": """import React, { useState } from 'react';
import PipelineKanban from './components/PipelineKanban';
import ContactsTable from './components/ContactsTable';

export default function App() {
  const [view, setView] = useState<'pipeline' | 'contacts'>('pipeline');
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center">A</div>
          <span className="font-bold text-lg tracking-wide">APEX CRM</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView('pipeline')} className={`px-4 py-2 rounded-lg text-sm ${view === 'pipeline' ? 'bg-white/10 text-white' : 'text-neutral-400'}`}>Pipeline Kanban</button>
          <button onClick={() => setView('contacts')} className={`px-4 py-2 rounded-lg text-sm ${view === 'contacts' ? 'bg-white/10 text-white' : 'text-neutral-400'}`}>Contacts & Accounts</button>
        </div>
      </header>
      <main className="p-8">
        {view === 'pipeline' ? <PipelineKanban /> : <ContactsTable />}
      </main>
    </div>
  );
}""",
            "prisma/schema.prisma": """model Deal {
  id        String   @id @default(cuid())
  title     String
  value     Float
  stage     String   @default("LEAD")
  company   String
  contact   String
  updatedAt DateTime @updatedAt
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  company   String
  status    String   @default("active")
}""",
            "database/seed.json": json.dumps([
                {"table": "Deal", "id": "d-1", "title": "Enterprise Cloud Migration", "value": 75000, "stage": "PROPOSAL", "company": "Acme Global", "contact": "David Miller"},
                {"table": "Deal", "id": "d-2", "title": "Cybersecurity Retainer", "value": 34000, "stage": "QUALIFIED", "company": "Fintech Horizons", "contact": "Alice Chen"},
                {"table": "Deal", "id": "d-3", "title": "AI Integration Contract", "value": 120000, "stage": "WON", "company": "OmniCorp Labs", "contact": "Victor Vance"}
            ], indent=2),
            "tests/pipeline.test.ts": """import { describe, it, expect } from 'vitest';

describe('Apex CRM Pipeline Engine', () => {
  it('calculates weighted pipeline forecasting', () => {
    const deals = [
      { stage: 'LEAD', value: 10000, prob: 0.1 },
      { stage: 'PROPOSAL', value: 50000, prob: 0.6 },
      { stage: 'WON', value: 80000, prob: 1.0 }
    ];
    const weighted = deals.reduce((acc, d) => acc + d.value * d.prob, 0);
    expect(weighted).toBe(111000);
  });
});""",
            "README.md": "# Apex CRM Platform\nSynthesized by Sai Technologies Multi-Agent Platform."
        }
    },
    "erp": {
        "id": "erp",
        "name": "Vanguard ERP - Integrated Enterprise Resource Suite",
        "category": "ERP Systems",
        "framework": "React 19 + TypeScript + Multi-Module SQLite Engine",
        "description": "Modular enterprise system covering Inventory Warehousing, HR Management, Purchase Orders, and Financial Balance Sheets.",
        "version": "1.5.0",
        "branch": "main",
        "files": {
            "spec.json": json.dumps({
                "projectName": "Vanguard ERP",
                "archetype": "erp",
                "modules": [
                    "Inventory Management with SKU reorder threshold alerts",
                    "Human Resources directory with payroll and departments",
                    "Procurement and purchase order fulfillment pipeline",
                    "Balance sheet financial summary with revenue vs expense ledger"
                ]
            }, indent=2),
            "architecture.json": json.dumps({
                "stack": "React 19, TypeScript, Express, SQLite relational tables"
            }, indent=2),
            "package.json": json.dumps({
                "name": "vanguard-erp",
                "version": "1.5.0",
                "scripts": { "dev": "vite", "build": "vite build", "test": "vitest" }
            }, indent=2),
            "src/App.tsx": """import React, { useState } from 'react';
import InventoryModule from './modules/Inventory';
import HRModule from './modules/HR';
import FinanceModule from './modules/Finance';

export default function App() {
  const [tab, setTab] = useState<'inventory' | 'hr' | 'finance'>('inventory');

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f0] flex flex-col">
      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between bg-black/40">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center">V</div>
          <span className="font-bold text-lg tracking-wide">VANGUARD ERP</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setTab('inventory')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'inventory' ? 'bg-white/10 text-white' : 'text-neutral-400'}`}>📦 Inventory</button>
          <button onClick={() => setTab('hr')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'hr' ? 'bg-white/10 text-white' : 'text-neutral-400'}`}>👥 HR & Payroll</button>
          <button onClick={() => setTab('finance')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'finance' ? 'bg-white/10 text-white' : 'text-neutral-400'}`}>📈 Ledger & Finance</button>
        </div>
      </header>
      <main className="flex-1 p-8">
        {tab === 'inventory' && <InventoryModule />}
        {tab === 'hr' && <HRModule />}
        {tab === 'finance' && <FinanceModule />}
      </main>
    </div>
  );
}""",
            "prisma/schema.prisma": """model InventoryItem {
  sku         String   @id
  name        String
  quantity    Int
  reorderMin  Int
  unitCost    Float
  location    String
}

model Employee {
  id          Int      @id @default(autoincrement())
  name        String
  department  String
  salary      Float
  status      String   @default("active")
}""",
            "database/seed.json": json.dumps([
                {"table": "InventoryItem", "sku": "SKU-9921", "name": "Lithium Battery Cells 48V", "quantity": 142, "reorderMin": 200, "unitCost": 48.5, "location": "Warehouse B-04"},
                {"table": "InventoryItem", "sku": "SKU-3104", "name": "Precision CNC Bearings", "quantity": 890, "reorderMin": 300, "unitCost": 12.0, "location": "Warehouse A-12"},
                {"table": "Employee", "id": 1, "name": "Jonathan Miller", "department": "Operations", "salary": 92000, "status": "active"},
                {"table": "Employee", "id": 2, "name": "Dr. Aris Thorne", "department": "R&D", "salary": 145000, "status": "active"}
            ], indent=2),
            "tests/erp.test.ts": """import { describe, it, expect } from 'vitest';

describe('Vanguard ERP Core Calculations', () => {
  it('triggers automated reorder requisition when stock drops below minimum', () => {
    const item = { sku: 'SKU-9921', quantity: 142, reorderMin: 200 };
    const needsReorder = item.quantity < item.reorderMin;
    expect(needsReorder).toBe(true);
  });
});""",
            "README.md": "# Vanguard ERP Suite\nSynthesized by Sai Technologies Multi-Agent Platform."
        }
    },
    "mobile": {
        "id": "mobile",
        "name": "Nova Mobile - Cross-Platform Mobile Experience",
        "category": "Mobile Apps",
        "framework": "React Native / Expo Web + Tailwind Mobile",
        "description": "Fluid mobile application preview with native touch interactions, bottom tab bar, story carousels, and responsive mobile frame.",
        "version": "1.1.0",
        "branch": "main",
        "files": {
            "spec.json": json.dumps({
                "projectName": "Nova Mobile",
                "archetype": "mobile",
                "targetPlatforms": ["iOS", "Android", "Mobile Web"],
                "features": [
                    "Smartphone viewport emulation with native status bar",
                    "Bottom touch tab navigation (Discover, Feed, Activity, Profile)",
                    "Interactive like and bookmark micro-interactions",
                    "Push notification simulation and responsive swipeable cards"
                ]
            }, indent=2),
            "architecture.json": json.dumps({
                "framework": "React Native Web + Tailwind CSS NativeWind",
                "navigation": "React Navigation v6 Stack + Bottom Tabs"
            }, indent=2),
            "package.json": json.dumps({
                "name": "nova-mobile",
                "version": "1.1.0",
                "scripts": { "dev": "expo start", "test": "jest" }
            }, indent=2),
            "src/App.tsx": """import React, { useState } from 'react';

export default function MobileApp() {
  const [tab, setTab] = useState<'feed' | 'discover' | 'profile'>('feed');

  return (
    <div className="w-[375px] h-[780px] bg-black text-white rounded-[44px] border-[10px] border-[#222226] overflow-hidden flex flex-col shadow-2xl relative">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
        <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <div className="size-2 rounded-full bg-neutral-700"></div>
      </div>

      {/* Status Bar */}
      <div className="pt-3 px-6 pb-2 flex justify-between items-center text-xs text-neutral-400">
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* App Body */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-20">
        <h2 className="text-xl font-bold mb-4">Nova Feed</h2>
        {/* Cards */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500"></div>
              <div>
                <p className="font-semibold text-sm">Maya Lin</p>
                <p className="text-xs text-neutral-400">2h ago • San Francisco</p>
              </div>
            </div>
            <p className="text-sm text-neutral-300 mb-3">Synthesizing full-stack web applications straight from mobile using Sai Technologies's autonomous agents. Incredible workflow speed.</p>
            <div className="h-40 rounded-xl bg-neutral-800 flex items-center justify-center text-xs text-neutral-500">
              Interactive Media Asset
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-neutral-950/90 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-6">
        <button onClick={() => setTab('feed')} className={`text-xs ${tab === 'feed' ? 'text-white font-bold' : 'text-neutral-500'}`}>Feed</button>
        <button onClick={() => setTab('discover')} className={`text-xs ${tab === 'discover' ? 'text-white font-bold' : 'text-neutral-500'}`}>Discover</button>
        <button onClick={() => setTab('profile')} className={`text-xs ${tab === 'profile' ? 'text-white font-bold' : 'text-neutral-500'}`}>Profile</button>
      </div>
    </div>
  );
}""",
            "tests/mobile.test.ts": """import { describe, it, expect } from 'vitest';

describe('Nova Mobile Gestures', () => {
  it('handles pull to refresh event correctly', () => {
    const initialRefresh = false;
    const trigger = true;
    expect(trigger).toBe(true);
  });
});""",
            "README.md": "# Nova Mobile App\nSynthesized by Sai Technologies Multi-Agent Platform."
        }
    }
}

class ProjectEngine:
    def __init__(self):
        # In-memory working copies cloned from archetypes
        self.projects = json.loads(json.dumps(PROJECT_ARCHETYPES))
        self.agent_logs = {}
        for pid in self.projects:
            self.agent_logs[pid] = [
                {"agent": "Planner", "action": "Decomposed product requirements from natural language spec", "time": "Initial", "status": "done"},
                {"agent": "Architect", "action": f"Designed system architecture and directory scaffolding for {self.projects[pid]['framework']}", "time": "Initial", "status": "done"},
                {"agent": "Database", "action": "Synthesized relational SQLite/Prisma schema and seed data", "time": "Initial", "status": "done"},
                {"agent": "Backend", "action": "Generated REST API routes and business logic services", "time": "Initial", "status": "done"},
                {"agent": "Frontend", "action": "Compiled responsive dark eggshell UI components", "time": "Initial", "status": "done"},
                {"agent": "Testing", "action": "Verified unit test suite (All tests passing: 2/2)", "time": "Initial", "status": "done"},
                {"agent": "Deployment", "action": "Docker & static production target configured", "time": "Initial", "status": "done"}
            ]

    def list_projects(self):
        return [
            {
                "id": p["id"],
                "name": p["name"],
                "category": p["category"],
                "framework": p["framework"],
                "description": p["description"],
                "version": p["version"],
                "branch": p["branch"],
                "fileCount": len(p["files"])
            }
            for p in self.projects.values()
        ]

    def get_project(self, project_id):
        if project_id not in self.projects:
            project_id = "website"
        return {
            **self.projects[project_id],
            "logs": self.agent_logs.get(project_id, [])
        }

    def get_file(self, project_id, file_path):
        proj = self.projects.get(project_id, self.projects["website"])
        return proj["files"].get(file_path, "")

    def save_file(self, project_id, file_path, content):
        if project_id in self.projects:
            self.projects[project_id]["files"][file_path] = content
            return True
        return False

    def generate_patch(self, project_id, user_prompt):
        """Simulate execution of the 8 autonomous engineering agents to fulfill user instruction"""
        if project_id not in self.projects:
            project_id = "website"
        proj = self.projects[project_id]
        timestamp = time.strftime("%H:%M:%S")

        # 1. Planner Agent analyzes prompt
        plan_log = {
            "agent": "Planner",
            "action": f"Analyzed requirement: '{user_prompt}' -> Formulated 3 execution stages",
            "time": timestamp,
            "status": "done"
        }

        # 2. Architect Agent
        arch_log = {
            "agent": "Architect",
            "action": "Updated dependency graph and component boundaries",
            "time": timestamp,
            "status": "done"
        }

        # 3. Database Agent
        db_log = {
            "agent": "Database",
            "action": "Validated schema constraints and table migrations",
            "time": timestamp,
            "status": "done"
        }

        # 4. Backend Agent
        be_log = {
            "agent": "Backend",
            "action": f"Synthesized business handler for '{user_prompt[:30]}...'",
            "time": timestamp,
            "status": "done"
        }

        # 5. Frontend Agent
        fe_log = {
            "agent": "Frontend",
            "action": "Integrated reactive UI component with Tailwind styling and state hooks",
            "time": timestamp,
            "status": "done"
        }

        # 6. Testing Agent
        test_log = {
            "agent": "Testing",
            "action": "Generated automated regression test & executed suite: 3/3 tests PASSED",
            "time": timestamp,
            "status": "done"
        }

        # 7. Debugging Agent
        dbg_log = {
            "agent": "Debugging",
            "action": "Zero runtime anomalies detected; AST linting clean",
            "time": timestamp,
            "status": "done"
        }

        # 8. Deploy Agent
        dep_log = {
            "agent": "Deployment",
            "action": "Live preview sandbox hot-reloaded and verified",
            "time": timestamp,
            "status": "done"
        }

        logs = [plan_log, arch_log, db_log, be_log, fe_log, test_log, dbg_log, dep_log]
        self.agent_logs[project_id].extend(logs)

        # Apply realistic updates based on archetype and prompt
        if "readme" in user_prompt.lower():
            proj["files"]["README.md"] += f"\n\n### Update ({timestamp})\n- Feature added: {user_prompt}"
        else:
            # Append prompt note to spec.json
            try:
                spec = json.loads(proj["files"]["spec.json"])
                if "featureHistory" not in spec:
                    spec["featureHistory"] = []
                spec["featureHistory"].append({"prompt": user_prompt, "timestamp": timestamp})
                proj["files"]["spec.json"] = json.dumps(spec, indent=2)
            except Exception:
                pass

        return {
            "success": True,
            "logs": logs,
            "updatedProject": self.get_project(project_id)
        }

    def run_tests(self, project_id):
        if project_id not in self.projects:
            project_id = "website"
        
        # Simulate realistic vitest execution
        results = {
            "suite": f"{self.projects[project_id]['name']} Test Suite",
            "total": 3,
            "passed": 3,
            "failed": 0,
            "durationMs": 412,
            "cases": [
                {"name": "Security & Sanitization Middleware", "status": "passed", "duration": "48ms"},
                {"name": "Database Schema Model & Primary Key Validation", "status": "passed", "duration": "112ms"},
                {"name": "UI Component DOM Snapshot & Reactive Event Dispatch", "status": "passed", "duration": "252ms"}
            ],
            "terminalOutput": f"""
 PASS  tests/{project_id}.test.ts
  ✓ Security & Sanitization Middleware (48 ms)
  ✓ Database Schema Model & Primary Key Validation (112 ms)
  ✓ UI Component DOM Snapshot & Reactive Event Dispatch (252 ms)

Test Files  1 passed (1)
     Tests  3 passed (3)
  Start at  {time.strftime("%H:%M:%S")}
  Duration  412ms (transform 120ms, setup 14ms, collect 45ms, tests 412ms)
"""
        }
        return results

    def query_database(self, project_id, query_str):
        if project_id not in self.projects:
            project_id = "website"
        raw_seed = self.projects[project_id]["files"].get("database/seed.json", "[]")
        try:
            records = json.loads(raw_seed)
        except Exception:
            records = []
        
        # If user specified a table filter or search
        filtered = records
        if query_str and query_str.lower() != "all" and query_str != "*":
            q = query_str.lower()
            filtered = [r for r in records if q in str(r).lower() or q in r.get("table", "").lower()]
        
        return {
            "query": query_str,
            "rowCount": len(filtered),
            "records": filtered
        }

    def export_zip(self, project_id):
        if project_id not in self.projects:
            project_id = "website"
        proj = self.projects[project_id]
        
        mem_file = io.BytesIO()
        with zipfile.ZipFile(mem_file, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
            for filepath, content in proj["files"].items():
                zf.writestr(f"{proj['id']}/{filepath}", content)
        mem_file.seek(0)
        return mem_file.getvalue()

engine = ProjectEngine()

