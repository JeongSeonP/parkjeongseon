import { MenuName } from "@/lib/hashLinks";
import { menuState } from "@/recoil/menuAtom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

export default function useSetMenuInView(
  menuInView: MenuName,
  threshold: number
) {
  const setSelectedMenu = useSetRecoilState(menuState);
  const [observeTarget, inView] = useInView({ threshold: threshold });

  useEffect(() => {
    if (inView) {
      setSelectedMenu(menuInView);
    }
  }, [menuInView, inView, setSelectedMenu]);

  return observeTarget;
}
