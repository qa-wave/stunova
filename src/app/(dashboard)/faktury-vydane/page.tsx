"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { Badge } from "@/components/ui/badge";
import type { FlexiFakturaVydana } from "@/lib/flexi-types";
import {
  mockFakturyVydane,
  formatCZK,
  formatDate,
  getStatusLabel,
  getStatusVariant,
} from "@/lib/mock-data";

const columns: ColumnDef<FlexiFakturaVydana>[] = [
  { accessorKey: "kod", header: "Číslo" },
  {
    accessorKey: "firmaObj.nazev",
    header: "Odběratel",
    cell: ({ row }) => row.original.firmaObj?.nazev ?? row.original.firma,
  },
  {
    accessorKey: "datVyst",
    header: "Vystaveno",
    cell: ({ row }) => formatDate(row.original.datVyst),
  },
  {
    accessorKey: "datSplat",
    header: "Splatnost",
    cell: ({ row }) => formatDate(row.original.datSplat),
  },
  {
    accessorKey: "sumCelkem",
    header: "Částka",
    cell: ({ row }) => (
      <span className="font-semibold">{formatCZK(row.original.sumCelkem)}</span>
    ),
  },
  {
    accessorKey: "varSym",
    header: "VS",
  },
  {
    accessorKey: "stavUhrK",
    header: "Stav",
    cell: ({ row }) => (
      <Badge variant={getStatusVariant(row.original.stavUhrK)}>
        {getStatusLabel(row.original.stavUhrK)}
      </Badge>
    ),
  },
  {
    accessorKey: "popis",
    header: "Popis",
    cell: ({ row }) => (
      <span className="max-w-[200px] truncate block text-muted-foreground">
        {row.original.popis}
      </span>
    ),
  },
];

export default function FakturyVydanePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Faktury vydané</h1>
        <p className="text-muted-foreground">Přehled všech vydaných faktur</p>
      </div>
      <DataTable
        columns={columns}
        data={mockFakturyVydane}
        searchKey="firma"
        searchPlaceholder="Hledat faktury..."
      />
    </div>
  );
}
