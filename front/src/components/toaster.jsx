import { useEffect } from "react";

export default function Toaster({
  message,
  type = "success",
  duration = 3000,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const alertClass =
    type === "success"
      ? "alert-success bg-green-100 text-green-800"
      : "alert-error bg-red-100 text-red-800";

  const iconPath =
    type === "success"
      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";

  return (
    <div
      role="alert"
      className={`alert ${alertClass} fixed top-5 right-5 shadow-lg z-50`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={iconPath}
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
