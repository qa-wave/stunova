"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal, Mail, Send, FileText, Building2 } from "lucide-react";
import { useState } from "react";

const clients = [
  { id: 1, name: "Tomáš Mertin", company: "TM Solutions s.r.o.", ic: "12345678", email: "tomas.mertin@gmail.com", status: "active", invoiceChannel: "email", invoiceCount: 24, balance: 45600 },
  { id: 2, name: "Jana Svobodová", company: "XYZ Trading a.s.", ic: "87654321", email: "jana@xyz.cz", status: "active", invoiceChannel: "datovka", invoiceCount: 18, balance: 0 },
  { id: 3, name: "Petr Dvořák", company: "DEF Consulting s.r.o.", ic: "11223344", email: "petr@def.cz", status: "active", invoiceChannel: "portal", invoiceCount: 12, balance: 78900 },
  { id: 4, name: "Martin Kovář", company: "GHI Manufacturing s.r.o.", ic: "55667788", email: "martin@ghi.cz", status: "active", invoiceChannel: "email", invoiceCount: 36, balance: 0 },
  { id: 5, name: "Eva Procházková", company: "JKL Services s.r.o.", ic: "99887766", email: "eva@jkl.cz", status: "paused", invoiceChannel: "posta", invoiceCount: 6, balance: 18700 },
  { id: 6, name: "David Černý", company: "MNO Digital a.s.", ic: "33445566", email: "david@mno.cz", status: "active", invoiceChannel: "isdoc", invoiceCount: 42, balance: 0 },
];

const channelLabels: Record<string, { label: string; icon: typeof Mail }> = {
  email: { label: "Email", icon: Mail },
  datovka: { label: "Datová schránka", icon: Send },
  portal: { label: "Klientský portál", icon: FileText },
  posta: { label: "Pošta", icon: Send },
  isdoc: { label: "ISDOC", icon: FileText },
};

function formatCZK(amount: number) {
  return new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", minimumFractionDigits: 0 }).format(amount);
}

export default function AdminKlientiPage() {
  const [search, setSearch] = useState("");
  const filtered = clients.filter((c) =>
    `${c.name} ${c.company} ${c.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Správa klientů</h1>
          <p className="text-muted-foreground">Přehled a správa klientského portfolia</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nový klient
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Celkem klientů</p>
            <p className="text-2xl font-bold">{clients.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Aktivních</p>
            <p className="text-2xl font-bold text-emerald-600">{clients.filter((c) => c.status === "active").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Neuhrazené pohledávky</p>
            <p className="text-2xl font-bold text-amber-600">{formatCZK(clients.reduce((s, c) => s + c.balance, 0))}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Celkem faktur</p>
            <p className="text-2xl font-bold">{clients.reduce((s, c) => s + c.invoiceCount, 0)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Hledat klienta..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {/* Client list */}
      <div className="space-y-3">
        {filtered.map((client) => {
          const channel = channelLabels[client.invoiceChannel];
          return (
            <Card key={client.id} className="transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                    {client.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{client.name}</p>
                      <Badge variant={client.status === "active" ? "default" : "secondary"}>
                        {client.status === "active" ? "Aktivní" : "Pozastaven"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="h-3 w-3" />{client.company}</span>
                      <span>IČ: {client.ic}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground">Kanál</p>
                    <p className="flex items-center gap-1 font-medium">
                      <channel.icon className="h-3.5 w-3.5" />
                      {channel.label}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Faktur</p>
                    <p className="font-medium">{client.invoiceCount}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Dluh</p>
                    <p className={`font-medium ${client.balance > 0 ? "text-amber-600" : "text-emerald-600"}`}>
                      {client.balance > 0 ? formatCZK(client.balance) : "—"}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
