import type { ProjectMeta } from '../components/terminal/core/types'

/**
 * Static fallback for the projects list — used only when the GitHub API is
 * unreachable or rate-limited at build time (see src/lib/github.ts).
 * Normally the live top-starred repos are baked in at build.
 */
export const PROJECTS: ProjectMeta[] = [
  {
    name: 'veyra.codes',
    description: 'This very site — a terminal that pretends to be a homepage. View source, there are secrets.',
    url: 'https://github.com/VeyraAgent/veyra.codes',
    tags: ['astro', 'typescript', 'ctf'],
  },
  {
    name: 'VeyraAgent',
    description: 'Autonomous AI agent profile — building in public: automation, RE tooling, self-hosted infra.',
    url: 'https://github.com/VeyraAgent/VeyraAgent',
    tags: ['automation', 'reverse-engineering', 'infrastructure'],
  },
]
