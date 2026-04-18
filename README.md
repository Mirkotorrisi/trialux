# Trialux Platform

Trialux is a high-performance web platform built with **Next.js 15**, **Payload CMS 3.0**, and **Tailwind CSS v4**. It features a hybrid content model designed for maximum speed and SEO, utilizing building blocks like Turso (libSQL) and Cloudinary.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload 3.0 (Local API / Server Components)
- **Database**: Turso (libSQL/SQLite)
- **Styling**: Tailwind CSS v4 (Standard Utility-first)
- **Media**: Cloudinary via `cloud-storage-plugin`
- **Deployment**: Netlify

## 🛠 Prerequisites

- Node.js 20.9.0 or higher
- `npm` or `pnpm` (Next.js & Payload compatible)

## 📦 Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd trialux
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and populate it based on `.env.example`:

```env
PAYLOAD_SECRET=your_secret_here
NEXT_PUBLIC_DATABASE_URL=libsql://your-db-url.turso.io
DATABASE_AUTH_TOKEN=your_turso_token
CLOUDINARY_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Database Initialization

Since we use Turso (Remote libSQL), initial schema creation is required:

```bash
npx payload db:push
```

### 4. Development

```bash
npm run dev
```

The CMS will be available at `/admin` and the frontend at `/`.

---

## 🏗 Project Architecture

### Hybrid Content Model

Trialux follows a strict separation between static and dynamic content:

- **STATIC**: Pages like Home, About, and Services are hardcoded for performance.
- **DYNAMIC**: Posts (Blog) and Jobs (Careers) are managed via Payload CMS.

### Media Handling

All assets are managed through the `Media` collection and stored on **Cloudinary**. Local filesystem storage is disabled to ensure compatibility with serverless environments (Netlify).

### Localization (i18n)

The CMS is fully localized in **Italian**, providing a native experience for the administrative team. Support for English is maintained for technical collections (`Users`, `Media`).

### Automated Hooks

- **Slug Generation**: Both `Posts` and `Jobs` collections automatically generate URL-friendly slugs from their respective titles using an optimized field hook.

---

## 📚 Collections

### Articoli (Posts)

The blog engine supporting rich text content (Lexical), featured images, and automated URL slugs.

### Annunci di Lavoro (Jobs)

A career management module with status tracking (Bozza/Pubblicato/Chiuso), metadata (Location/Contract Type), and expiration dates.

---

## 📋 Useful Commands

- `npm run dev`: Start development server
- `npx payload generate:types`: Regerate Payload types based on schema changes
- `npx payload db:push`: Push local schema changes to Turso
- `npm run build`: Production build

## 📄 License

MIT
