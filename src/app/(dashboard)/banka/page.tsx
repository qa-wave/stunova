"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { Badge } from "@/components/ui/badge";
import type { FlexiBanka } from "@/lib/flexi-types";
import { mockBanka, formatCZK, formatDate } from "@/lib/mock-data";

const columns: ColumnDef<FlexiBanka>[] = [
  { accessorKey: "kod", header: "Číslo" },
  {
    accessorKey: "datVyst",
    header: "Datum",
    cell: ({ row }) => formatDate(row.original.datVyst),
  },
  {
    accessorKey: "popis",
    header: "Popis",
    cell: ({ row }) => <span className="text-muted-foreground">{row.original.popis}</span>,
  },
  { accessorKey: "sparpiSym", header: "VS" },
  {
    accessorKey: "typPohybuK",
    header: "Typ",
    cell: ({ row }) => (
      <Badge variant={row.original.typPohybuK === "typPohybu.prijem" ? "default" : "secondary"}>
        {row.original.typPohybuK === "typPohybu.prijem" ? "Příjem" : "Výdej"}
      </Badge>
    ),
  },
  {
    accessorKey: "sumCelkem",
    header: "Částka",
    cell: ({ row }) => {
      const amount = row.original.sumCelkem;
      return (
        <span className={`font-semibold ${amount > 0 ? "text-emerald-600" : "text-red-500"}`}>
          {amount > 0 ? "+" : ""}{formatCZK(amount)}
        </span>
      );
    },
  },
];

export default function BankaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bankovní pohyby</h1>
        <p className="text-muted-foreground">Přehled bankovních transakcí</p>
      </div>
      <DataTable
        columns={columns}
        data={mockBanka}
        searchKey="popis"
        searchPlaceholder="Hledat pohyb..."
      />
    </div>
  );
}
