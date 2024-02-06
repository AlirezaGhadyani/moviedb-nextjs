import { Icon } from "@/components/shared";

interface Props {
  open: boolean;
}

export default function Sidebar({ open }: Props) {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 h-full border-r-1 border-r-foreground-300 ${
        open ? "w-sidebarOpen" : "w-sidebarClose"
      }`}
    >
      <div className="w-full flex justify-center items-center h-headerHeight">
        <Icon name="netflix-fill" className="text-5xl text-primary" />
      </div>
      <ul className=""></ul>
    </div>
  );
}
