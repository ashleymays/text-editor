function Option({ children, icon }) {
  return (
    <button type="button" alt={children} className="relative after:absolute after:top-1/2 after:right-9 after:translate-y-neg50 after:content-[attr(alt)] after:text-base after:hidden hover:opacity-50 sm:hover:opacity-50 md:hover:opacity-50 lg:hover:opacity-100 xl:hover:opacity-100 2xl:hover:opacity-100 lg:hover:after:block xl:hover:after:block 2xl:hover:after:block">
      {icon}
    </button>
  );
}

export default Option;

/**
 * empty:before:content-[attr(placeholder)]
 */
