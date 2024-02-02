import { getCurTheme } from "@/utils/getCurTheme";
import ThemeSwitch from "./themeSwitch";
import TopBtn from "./topBtn";

export default async function SettingView() {
  const curTheme = await getCurTheme();
  return (
    <div className="fixed bottom-10 right-5 flex w-24 gap-2">
      <TopBtn />
      <ThemeSwitch curTheme={curTheme} />
    </div>
  );
}
