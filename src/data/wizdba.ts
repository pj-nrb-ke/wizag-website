/**
 * WizDBA product page content.
 *
 * Source: the feature doc (WizDBA_Features.md). ONLY features listed there
 * appear here — no invented capabilities, benchmarks, pricing or trial terms.
 *
 * Product-specific decisions (client-confirmed 2026-08-04):
 *  · WizDBA is a PAID, downloadable Windows desktop app (a SQL client) — the
 *    first directly-sold product on the site. Model: free trial, then buy.
 *    CTAs are "Start free trial" + "Buy" — BOTH placeholders until the
 *    e-commerce gateway is wired (see the page's #get section).
 *  · AI is powered by the Anthropic Claude API using the CUSTOMER'S OWN key,
 *    stored locally — marketed named ("Claude") + bring-your-own-key. Never
 *    implied as bundled or free.
 *  · Trial terms (length/limits), the price, and the download + checkout URLs
 *    are NOT yet supplied — do NOT fabricate them. Placeholders only.
 *  · Screenshots are client-supplied and still pending — the page uses
 *    ImageSlot until they land (see docs/wizdba-image-prompts.md).
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizdba = {
  name: 'WizDBA',
  hook: 'A fast SQL client, with AI built in',
  positioning:
    'WizDBA is a lightweight Windows desktop client for querying and managing SQL Server, PostgreSQL, MySQL and SQLite — one app for every database, with an AI assistant that writes, explains and fixes your SQL.',
  tagline: 'Speed, simplicity, and a little AI.',
  audience:
    'Built for database administrators, developers and analysts who live in SQL and want speed, not ceremony.',
};

/* Four engines, one app — the connectivity strip. */
export const engines: { name: string; note: string }[] = [
  { name: 'SQL Server', note: 'Windows or SQL authentication' },
  { name: 'PostgreSQL', note: 'via Npgsql' },
  { name: 'MySQL', note: 'via MySqlConnector' },
  { name: 'SQLite', note: 'open a file and query' },
];

/* The AI assistant — the standout. Powered by Anthropic's Claude, using the
   user's OWN API key, stored locally. */
export const aiFeatures: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'AI Query Builder',
    hook: 'Describe what you need in plain English; get SQL you can run.',
    points: [
      'Aware of your engine, database and full schema — tables, columns, views and procedures',
      'Teach it your business terms with a custom glossary ("active customer" = ordered in the last 90 days)',
      'Answers come back as ready-to-run SQL in a dedicated chat window',
    ],
    icon: 'sparkle',
  },
  {
    name: 'Explain this error',
    hook: 'Turn a cryptic engine error into a plain-English cause.',
    points: [
      'One click on a failed query sends the error and the SQL to the AI',
      'Get back a clear explanation of what went wrong — no forum searching',
    ],
    icon: 'ai-automation',
  },
  {
    name: 'Fix This',
    hook: 'Let the AI rewrite the SQL to fix the problem.',
    points: [
      'Rewrites the failing statement and drops it straight into the editor',
      'An Undo Fix button appears at once, so a one-tap revert is always there',
    ],
    icon: 'check',
  },
];

/* Core capabilities — the feature card grid. */
export const capabilities: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'A fast, focused editor',
    hook: 'Write SQL with the help you expect and none of the weight.',
    points: [
      'Syntax highlighting in a clean monospace face (Cascadia Code)',
      'Schema-aware autocomplete for tables, columns and keywords',
      'Run only the highlighted SQL with F5; Check Syntax without executing',
      'Failed lines are marked; open and save .sql files; cancel a long query mid-run',
    ],
    icon: 'code',
  },
  {
    name: 'Results the way you work',
    hook: 'Every result set, clearly, with a clean read.',
    points: [
      'Each result set opens in its own labelled tab; pop any out to full screen',
      'Background row counts on tables, and unmistakable success / error messages',
      'Error text shows the engine message and the line number',
    ],
    icon: 'data-analytics',
  },
  {
    name: 'Export in three formats',
    hook: 'Get results into a report in seconds.',
    points: [
      'Excel (.xlsx) — a formatted workbook with bold headers and auto-fit columns',
      'CSV — properly quoted, handling commas, quotes and newlines inside cells',
      'Markdown — a GitHub-flavoured table to paste straight into docs or a wiki',
    ],
    icon: 'document',
  },
  {
    name: 'Explore every object',
    hook: 'Tables, views and procedures, a right-click away.',
    points: [
      'Searchable lists of tables, views and stored procedures, grouped by schema',
      'Right-click for Select Top 20, copy name, open a definition, EXEC or drop',
      'One-click CREATE templates for new tables, views and procedures',
    ],
    icon: 'database',
  },
  {
    name: 'Many connections, one window',
    hook: 'Keep every database a click away.',
    points: [
      'Saved connection profiles — double-click to connect, with provider badges',
      'Several live connections at once (SAGE, CommonDB, KENS…) — switch without losing work',
      'A status bar with the live server, database, and table and view counts',
    ],
    icon: 'migrate',
  },
  {
    name: 'Backup & restore, built in',
    hook: 'Routine maintenance without leaving the app.',
    points: [
      'Back up the current database to a clean, standalone .bak file',
      'Restore from .bak, .db or .sqlite — the single-user / REPLACE / multi-user steps handled for you',
      'Reconnects to the restored database automatically when done',
    ],
    icon: 'download',
  },
];

/* Privacy / trust — matters for a tool that holds DB credentials + an AI key.
   The bring-your-own-key point is both honest and a genuine selling point. */
export const trust: string[] = [
  'Your connection details and AI key are stored locally, on your machine',
  'Connect to SQL Server with Windows / domain authentication or a SQL login',
  'The AI uses your own Anthropic Claude API key — nothing is routed through us',
  'A single-file, self-contained executable — no installer, no background service',
];

/* Technical specs strip. */
export const specs: { label: string; value: string }[] = [
  { label: 'Platform', value: 'Windows 10 / 11 (x64)' },
  { label: 'Framework', value: '.NET 10 · Avalonia' },
  { label: 'Packaging', value: 'Single-file executable — no installer' },
  { label: 'Databases', value: 'SQL Server · PostgreSQL · MySQL · SQLite' },
  { label: 'AI', value: 'Anthropic Claude (your own API key)' },
  { label: 'Settings', value: 'Stored locally, per Windows user' },
];
