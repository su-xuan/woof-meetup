import Link from "next/link";

interface IButton {
  link?: string;
  onClick?: () => void;
  ariaLabel?: string;
  children: JSX.Element | string;
}

const Button: React.FC<IButton> = ({ link, onClick, ariaLabel, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  }
  return (
    <button
      className="bg-teal-500 text-white inline-flex items-center justify-center px-4 py-2 font-semibold rounded-2xl"
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
export default Button;
