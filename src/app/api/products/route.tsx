import { NextResponse } from "next/server";
import products from "@/assets/data/products.json";

export const GET = () => {
  return NextResponse.json(products);
};
