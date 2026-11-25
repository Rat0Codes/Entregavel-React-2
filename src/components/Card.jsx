
function Card({ title, description, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {title && (
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          {title}
        </h2>
      )}

      {description && (
        <p className="mb-4 text-gray-600">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}

export default Card;
