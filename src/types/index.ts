

export type Item = {
  id: string
  order: number
  title: string
  url?: string
  icon?: string
  thumbnail?: string
  type: "Link" | "Photo" | "Map" | "Note" | "Chart"
  size: "1x1" | "1x2" | "2x1" | "2x2"
}
