

export type Items = {
  id: number
  title: string
  url?: string
  icon?: string
  thumbnail?: string
  type: "Link" | "Photo" | "Video" | "Note" | "statistics"
  variant?: "sm" | "md" | "lg"
}
