"use client";
import { usePathname, useRouter } from "next/navigation";
// import { usePathname, useRouter } from "../../../i18n/navigation";

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLocale(e.target.value)}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
