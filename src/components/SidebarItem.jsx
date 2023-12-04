function SidebarItem({ children, title, onClick }) {
  return (
    <button
      type="button"
      alt={title}
      onClick={onClick}
      className="text-neutral-500 dark:text-zinc-600 font-mono relative after:absolute after:top-1/2 after:right-7 after:translate-y-neg50 after:content-[attr(alt)] after:w-max after:text-sm after:tracking-wide after:hidden hover:opacity-50 sm:hover:opacity-50 md:hover:opacity-50 lg:hover:opacity-100 xl:hover:opacity-100 2xl:hover:opacity-100 lg:hover:after:block xl:hover:after:block 2xl:hover:after:block"
    >
      {children}
    </button>
  );
}

export default SidebarItem;
