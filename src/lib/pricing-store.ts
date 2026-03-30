// Simple client-side pricing visibility store using localStorage
// In production this would be backed by a database

const STORAGE_KEY = "umove-pricing-visibility";

export interface PricingVisibility {
  [containerId: string]: boolean;
}

export function getPricingVisibility(): PricingVisibility {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setPricingVisibility(visibility: PricingVisibility): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(visibility));
  // Dispatch event so other components can react
  window.dispatchEvent(new Event("pricing-updated"));
}

export function isContainerVisible(id: string): boolean {
  const vis = getPricingVisibility();
  // Default to visible if not set
  return vis[id] !== false;
}
