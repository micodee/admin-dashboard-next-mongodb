export default function Button({ text, onclick, loading = false }) {
  return (
    <button
      disabled={loading}
      type="button"
      onClick={onclick}
      className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium uppercase tracking-wide"
    >
      {text}
    </button>
  );
}
