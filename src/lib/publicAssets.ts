import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-side check for whether a file exists under /public.
 *
 * Used to gracefully fall back to editorial mock visuals when real
 * iPhone screenshots haven't been dropped into /public/previews/ yet.
 *
 * - Returns false on any error so a missing/unreadable file is
 *   indistinguishable from absence (we render the mock either way).
 * - Server-only: do not import from a "use client" file. The showcase
 *   and the hero page are both server components, so this is fine.
 * - Cached implicitly per-build because static pages are evaluated at
 *   `next build` time.
 */
export function hasPublicAsset(relativePath: string): boolean {
  if (!relativePath || typeof relativePath !== "string") return false;
  // Reject any path that tries to escape /public.
  if (relativePath.includes("..")) return false;
  const normalized = relativePath.startsWith("/")
    ? relativePath.slice(1)
    : relativePath;
  try {
    const fullPath = join(process.cwd(), "public", normalized);
    return existsSync(fullPath);
  } catch {
    return false;
  }
}
