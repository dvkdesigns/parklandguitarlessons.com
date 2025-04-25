import Link from 'next/link';

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'outline';
  size?: 'base' | 'sm' | 'lg' | 'xl';
};

export default function ButtonLink({
  href,
  label,
  variant = 'primary',
  size = 'base',
}: ButtonLinkProps) {
  const base = 'inline-block font-semibold rounded transition text-center';

  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700',
    outline: 'border border-orange-600 text-orange-600 hover:bg-orange-50',
  };

  const sizes = {
    base: 'px-5 py-2 text-base',
    sm: 'px-1 py-1 ml-5',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-15 py-6 text-2xl',
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {label}
    </Link>
  );
}
