type ClassValue = string | boolean | undefined | null | Record<string, boolean | undefined | null> | ClassValue[]

export function cn(...classes: ClassValue[]): string {
  const result: string[] = []
  for (const cls of classes) {
    if (typeof cls === "string") {
      result.push(cls)
    } else if (cls && typeof cls === "object") {
      if (Array.isArray(cls)) {
        result.push(cn(...cls))
      } else {
        for (const [key, value] of Object.entries(cls)) {
          if (value) result.push(key)
        }
      }
    }
  }
  return result.join(" ")
}
