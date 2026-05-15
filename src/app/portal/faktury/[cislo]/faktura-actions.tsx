"use client";

import { Download } from "lucide-react";

export function FakturaActions({ isUnpaid }: { isUnpaid: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button className="btn-soft" onClick={() => window.print()}>
        <Download className="w-4 h-4" /> Stáhnout PDF
      </button>
      {isUnpaid && (
        <button className="btn-gold">
          Označit jako zaplaceno
        </button>
      )}
    </div>
  );
}
