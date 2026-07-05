'use client';
import { useCallback, useEffect, useState } from "react";

/**
 * Small localStorage-backed hook for keeping a set of product ids
 * (used for both the wishlist and the compare tray). Safe for SSR —
 * it only touches `window` after mount.
 */
export function useStoredIds(storageKey: string, max?: number) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setIds(JSON.parse(raw) as string[]);
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(ids));
  }, [ids, hydrated, storageKey]);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback(
    (id: string) => {
      setIds((prev) => {
        if (prev.includes(id)) return prev.filter((existing) => existing !== id);
        if (max && prev.length >= max) return prev; // respect a max size (e.g. compare tray)
        return [...prev, id];
      });
    },
    [max]
  );

  const remove = useCallback((id: string) => {
    setIds((prev) => prev.filter((existing) => existing !== id));
  }, []);

  const clear = useCallback(() => setIds([]), []);

  return { ids, has, toggle, remove, clear, hydrated };
}
