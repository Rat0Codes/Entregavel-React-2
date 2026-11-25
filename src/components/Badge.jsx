
const variants = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
};

function Badge({ variant = "info", children }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${variants[variant] || variants.info}`}
    >
      {children}
    </span>
  );
}

export default Badge;
