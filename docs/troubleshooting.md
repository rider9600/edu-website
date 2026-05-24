# Troubleshooting

Common issues and fixes

- MDX components not rendering: Ensure the component is exported and added to the `components` mapping in `src/app/(pages)/probability/[id]/page.tsx`.
- Hydration warnings: Verify client components used in MDX are wrapped with `"use client"` and that server-rendered content matches initial markup.
- Build failures: Run `npm run type-check` to locate TypeScript errors, then `npm run build` to see Next.js build errors.
- Charts not appearing: Confirm Recharts components are inside client components and `ResponsiveContainer` has a defined height.
- Static content not found: Ensure files exist under `content/{category}` and `src/lib/content.ts`'s `listTopicSlugs` and `getTopicContent` can read them.

If you hit an issue not listed here, open an issue with logs and reproduction steps.
