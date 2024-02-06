import { IconsName } from "@/types/components";

interface Sidebar {
  name: string;
  link: string;
  icon: IconsName;
}

const SIDEBAR: Sidebar[] = [
  {
    icon: "heart-line",
    name: "Favorite Items",
    link: "/Favorites",
  },
  {
    icon: "timer-line",
    name: "Watch List",
    link: "/watch-list",
  },
  {
    icon: "folder-download-line",
    name: "Download List",
    link: "/download-list",
  },
];

export default SIDEBAR;
