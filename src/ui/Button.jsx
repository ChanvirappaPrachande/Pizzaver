import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
    "focus:fing text-sm inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-50 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  const base =
    "focus:fing inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-50 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "md:px-6 md:py-4 px-4 py-3",
    small: base + "py-2 md:px-5 md:py-2.5 px-4 text-xs",
    round: base + "py-1 md:px-3.5 md:py-2 px-2.5 text-sm ",
    secondary:
      "focus:fing text-sm inline-block rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:ring-stone-300 focus:ring-offset-2 active:bg-stone-800 focus:text-stone-800 disabled:cursor-not-allowed md:px-4 md:py-3.5 px-4 py-2.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
