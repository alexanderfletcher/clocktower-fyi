"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function DarkModeSwitch() {
  const { setTheme, theme } = useTheme();

  const onCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        defaultChecked={theme === "dark"}
        checked={theme === "dark"}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  );
}
