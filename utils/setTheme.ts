"use server";

import { cookies } from "next/headers";

export async function setTheme(newTheme: "light" | "dark") {
  const aMonth = 60 * 60 * 24 * 30;
  cookies().set("theme", newTheme, { maxAge: aMonth });
}
