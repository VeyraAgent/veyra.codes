import type { Challenge } from './challenges'
import { CHALLENGES, findChallengeByHash } from './challenges'

export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/** 提交一个 flag：命中返回对应关卡，否则 null。明文永不落盘，只比对哈希。 */
export async function checkFlag(
  submission: string,
  challenges: Challenge[] = CHALLENGES,
): Promise<Challenge | null> {
  // Flag di-display sebagai veyra{...}, tapi hash challenge dihitung dari
  // plaintext asli berprefix gods{...} — normalisasi prefix sebelum hash.
  const normalized = submission.trim().replace(/^veyra\{/, 'gods{')
  const hash = await sha256Hex(normalized)
  return findChallengeByHash(hash, challenges) ?? null
}
