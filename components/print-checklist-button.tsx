'use client';

export function PrintChecklistButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="button button-quiet no-print text-sm"
    >
      Print this checklist
    </button>
  );
}
