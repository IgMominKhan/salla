import { NextResponse } from "next/server"
import categories from "@/assets/data/categories.json"

export const GET = async () => {
  return NextResponse.json(categories)
}
