import { MenuName } from "@/lib/hashLinks";
import { atom } from "recoil";

export const menuState = atom<MenuName>({
  key: "selectedMenu",
  default: "Home",
});
