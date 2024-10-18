// src/components/ModeToggle.js

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300 dark:border-gray-600 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-700 transition-all shadow-md dark:shadow-lg focus:ring focus:ring-cyan-300 dark:focus:ring-cyan-600"
        >
          {/* Sun Icon */}
          <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
          {/* Moon Icon */}
          <Moon className="absolute h-[1.5rem] w-[1.5rem] text-gray-900 dark:text-gray-100 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl transition-all"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="py-2 px-4 hover:bg-cyan-50 dark:hover:bg-cyan-700 rounded-t-xl transition-colors"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="py-2 px-4 hover:bg-cyan-50 dark:hover:bg-cyan-700 transition-colors"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="py-2 px-4 hover:bg-cyan-50 dark:hover:bg-cyan-700 rounded-b-xl transition-colors"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}