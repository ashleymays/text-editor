function Option({ children, icon }) {
  return (
    <button type="button" alt={children} className="relative hover:after:absolute hover:after:top-1/2 hover:after:right-8 hover:after:translate-y-negative50 hover:after:content-[attr(alt)] hover:after:text-base">
      {icon}
    </button>
  );
}

export default Option;

/**
 * empty:before:content-[attr(placeholder)]
 */
