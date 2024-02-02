"use server";

import { cookies } from "next/headers";

export async function getCurTheme() {
  const curTheme = cookies().get("theme")?.value === "dark" ? "dark" : "light";
  return curTheme;
}
