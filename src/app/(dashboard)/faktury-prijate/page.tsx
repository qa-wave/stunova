"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/data-table";
import { Badge } from "@/components/ui/badge";
import type { FlexiFakturaPrijata } from "@/lib/flexi-types";
import {
  mockFakturyPrijate,
  formatCZK,
  formatDate,
  getStatusLabel,
  getStatusVariant,
} from "@/lib/mock-data";

const columns: ColumnDef<FlexiFakturaPrijata>[] = [
  { accessorKey: "kod", header: "Číslo" },
  {
    accessorKey: "firmaObj.nazev",
    header: "Dodavatel",
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

export default function FakturyPrijatePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Faktury přijaté</h1>
        <p className="text-muted-foreground">Přehled všech přijatých faktur</p>
      </div>
      <DataTable
        columns={columns}
        data={mockFakturyPrijate}
        searchKey="firma"
        searchPlaceholder="Hledat faktury..."
      />
    </div>
  );
}
