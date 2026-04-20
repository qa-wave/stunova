"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, LogIn, Send, UserPlus, Settings, Download, Eye, Trash2 } from "lucide-react";

const logs = [
  { id: 1, time: "17.04.2026 08:30", user: "Radek Fedič", action: "Přihlášení do systému", icon: LogIn, type: "auth" },
  { id: 2, time: "17.04.2026 08:25", user: "Systém", action: "Odeslána faktura FV-2024/009 → Tomáš Mertin (email)", icon: Send, type: "invoice" },
  { id: 3, time: "17.04.2026 08:20", user: "Systém", action: "Odeslána faktura FV-2024/009 → Tomáš Mertin (portál)", icon: Send, type: "invoice" },
  { id: 4, time: "17.04.2026 07:55", user: "Marie Nováková", action: "Přihlášení do systému", icon: LogIn, type: "auth" },
  { id: 5, time: "17.04.2026 07:50", user: "Marie Nováková", action: "Vytvořena faktura FV-2024/009 pro TM Solutions", icon: FileText, type: "invoice" },
  { id: 6, time: "16.04.2026 16:10", user: "Systém", action: "Automatická SMS upomínka → DEF Consulting (FV-2024/003)", icon: Send, type: "notification" },
  { id: 7, time: "16.04.2026 14:22", user: "Tomáš Mertin", action: "Přihlášení do klientského portálu", icon: LogIn, type: "auth" },
  { id: 8, time: "16.04.2026 14:23", user: "Tomáš Mertin", action: "Stažení faktury FV-2024/008 (PDF)", icon: Download, type: "document" },
  { id: 9, time: "16.04.2026 11:00", user: "Radek Fedič", action: "Aktivován kanál QR platba", icon: Settings, type: "config" },
  { id: 10, time: "16.04.2026 10:45", user: "Radek Fedič", action: "Přidán nový klient: Eva Procházková", icon: UserPlus, type: "client" },
  { id: 11, time: "15.04.2026 09:10", user: "Jana Svobodová", action: "Zobrazení faktury FV-2024/005 v portálu", icon: Eye, type: "document" },
  { id: 12, time: "15.04.2026 08:00", user: "Systém", action: "Odeslány měsíční reporty (6 klientů, datová schránka)", icon: Send, type: "invoice" },
];

const typeColors: Record<string, string> = {
  auth: "bg-blue-50 text-blue-700 border-blue-200",
  invoice: "bg-emerald-50 text-emerald-700 border-emerald-200",
  notification: "bg-amber-50 text-amber-700 border-amber-200",
  document: "bg-violet-50 text-violet-700 border-violet-200",
  config: "bg-gray-50 text-gray-700 border-gray-200",
  client: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

const typeLabels: Record<string, string> = {
  auth: "Přihlášení",
  invoice: "Fakturace",
  notification: "Notifikace",
  document: "Dokument",
  config: "Nastavení",
  client: "Klient",
};

export default function AdminLogyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Aktivita & logy</h1>
        <p className="text-muted-foreground">Přehled veškeré aktivity v systému</p>
      </div>

      {/* Activity stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Dnes</p><p className="text-2xl font-bold">5</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Tento týden</p><p className="text-2xl font-bold">34</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Odeslaných faktur</p><p className="text-2xl font-bold text-emerald-600">12</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Přihlášení</p><p className="text-2xl font-bold">18</p></CardContent></Card>
      </div>

      {/* Log entries */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {logs.map((log) => (
              <div key={log.id} className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/50">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <log.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{log.action}</p>
                  <p className="text-xs text-muted-foreground">{log.user} &middot; {log.time}</p>
                </div>
                <Badge variant="outline" className={`shrink-0 text-[10px] ${typeColors[log.type]}`}>
                  {typeLabels[log.type]}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
