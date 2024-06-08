

export type Item = {
  id: string
  order: number
  title: string
  url?: string
  icon?: string
  thumbnail?: string
  type: "Link" | "Photo" | "Video" | "Note" | "statistics"
  variant?: "sm" | "md" | "lg"
}
