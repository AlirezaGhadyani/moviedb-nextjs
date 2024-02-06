interface Props {
  open: boolean;
}

export default function Header({ open }: Props) {
  return (
    <header
      className="fixed top-0 right-0 h-headerHeight bg-background"
      style={{
        width: open
          ? `calc(100% - var(--sidebar-open-width))`
          : `calc(100% - var(--sidebar-close-width))`,
      }}
    ></header>
  );
}
