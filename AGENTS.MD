# AI AGENT PROJECT CONTEXT & RULES

## STACK ARCHITECTURE

- **Framework**: Next.js 15 (App Router).
- **CMS**: Payload 3.0 (Integrato, via Local API).
- **Database**: Turso (libSQL/SQLite) via `@payloadcms/db-sqlite`.
- **Styling**: Tailwind CSS (Strictly Utility-first).
- **Deployment**: Netlify (Serverless Environment).

## PROJECT STRATEGY (MANDATORY)

1. **Hybrid Content Model**:
   - **STATIC**: Home, About, Services, Contacts, and UI Shell are **HARDCODED**. Do NOT create CMS collections or blocks for these.
   - **DYNAMIC**: Only `Posts` (Blog) and `Jobs` (Annunci di lavoro) collections are managed via Payload CMS.
2. **Database Persistence**: The DB is remote (Turso). Never assume local file persistence for SQLite.
3. **Media Handling**: Assets are managed via the `Media` collection. Files must be stored on external cloud storage (e.g., Cloudinary/S3). Do NOT use the local filesystem for uploads.

## CODING STANDARDS

- **Server Components**: Use React Server Components (RSC) by default for data fetching.
- **Payload Access**: Access data using the `getPayload` local API:

  ```typescript
  import { getPayload } from 'payload'
  import config from '@payload-config'
  const payload = await getPayload({ config })
  ```

- **Type Safety**: Always reference types from `payload-types.ts`.
- **No Page Builders**: Do not implement dynamic layout builders. Keep UI logic inside React components in `src/app/` or `src/components/`.

## WORKFLOW & DATABASE

- **Schema Changes**: If you modify files in `src/collections/`, you MUST notify the user to run `npx payload db:push` or `npx payload migrate:create`.
- **Environment Variables**: Use `DATABASE_URI`, `DATABASE_AUTH_TOKEN`, and `PAYLOAD_SECRET`.
- **Netlify Compatibility**: Ensure all server-side logic is compatible with Serverless Functions. Avoid local FS write operations.

## AGENT DIRECTIVES

- When asked to build/edit a page, verify if the content belongs to `Posts` or `Jobs`.
- If it does: Fetch data from Payload CMS.
- If it doesn't: Code the UI directly into the Next.js page/component.
- Always prioritize clean, high-performance Tailwind-based design.
