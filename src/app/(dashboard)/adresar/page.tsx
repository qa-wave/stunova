"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import type { FlexiAdresar } from "@/lib/flexi-types";
import { mockAdresar } from "@/lib/mock-data";

const columns: ColumnDef<FlexiAdresar>[] = [
  {
    accessorKey: "nazev",
    header: "Název",
    cell: ({ row }) => <span className="font-medium">{row.original.nazev}</span>,
  },
  { accessorKey: "ic", header: "IČ" },
  { accessorKey: "dic", header: "DIČ" },
  {
    accessorKey: "mesto",
    header: "Adresa",
    cell: ({ row }) => {
      const a = row.original;
      return (
        <span className="text-muted-foreground">
          {[a.ulice, a.mesto, a.psc].filter(Boolean).join(", ")}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a href={`mailto:${row.original.email}`} className="text-primary hover:underline">
        {row.original.email}
      </a>
    ),
  },
  { accessorKey: "tel", header: "Telefon" },
];

export default function AdresarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Adresář</h1>
        <p className="text-muted-foreground">Firmy a kontakty</p>
      </div>
      <DataTable
        columns={columns}
        data={mockAdresar}
        searchKey="nazev"
        searchPlaceholder="Hledat firmu..."
      />
    </div>
  );
}
