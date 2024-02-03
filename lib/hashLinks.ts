export const hashLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
] as const;

export type MenuName = (typeof hashLinks)[number]["name"];
