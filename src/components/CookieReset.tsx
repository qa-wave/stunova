"use client";

export function CookieReset() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("cookie-consent");
        window.location.reload();
      }}
      className="py-2 text-[var(--sand)] hover:text-[var(--cream)] transition"
    >
      Nastavení cookies
    </button>
  );
}
