"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail, Send, FileText, Upload, MessageSquare, Camera,
  Cloud, Globe, Smartphone, Settings, ArrowDown, ArrowUp,
} from "lucide-react";

const inboundChannels = [
  {
    id: "upload", name: "Drag & Drop upload", desc: "Klient nahraje doklady přímo v portálu přetažením souborů. Nejčastější způsob.",
    icon: Upload, enabled: true, stats: { received: 890 }, color: "from-blue-500 to-indigo-600",
  },
  {
    id: "email", name: "Email příjem", desc: "Klient pošle doklady na doklady@fedicfinance.com. Automatické přiřazení ke klientovi.",
    icon: Mail, enabled: true, stats: { received: 1240 }, color: "from-emerald-500 to-teal-600",
  },
  {
    id: "photo", name: "Foto dokladu", desc: "Klient vyfotí účtenku/fakturu mobilem a nahraje přes portál. OCR rozpoznání.",
    icon: Camera, enabled: true, stats: { received: 340 }, color: "from-violet-500 to-purple-600",
  },
  {
    id: "slack", name: "Slack kanál", desc: "Klient pošle doklad do sdíleného Slack kanálu #doklady. Bot automaticky zpracuje.",
    icon: MessageSquare, enabled: true, stats: { received: 120 }, color: "from-pink-500 to-rose-600",
  },
  {
    id: "cloud", name: "Cloud storage", desc: "Sdílená složka Google Drive nebo OneDrive. Automatický import nových souborů.",
    icon: Cloud, enabled: false, stats: { received: 0 }, color: "from-cyan-500 to-sky-600",
  },
  {
    id: "datovka", name: "Datová schránka", desc: "Automatický příjem dokladů z datové schránky klienta. ISDS integrace.",
    icon: Send, enabled: false, stats: { received: 0 }, color: "from-gray-500 to-gray-600",
  },
];

const outboundChannels = [
  {
    id: "email-out", name: "Email (PDF)", desc: "Pravidelné zasílání reportů, výkazů a přehledů klientům emailem.",
    icon: Mail, enabled: true, stats: { sent: 560 }, color: "from-blue-500 to-indigo-600",
  },
  {
    id: "portal", name: "Klientský portál", desc: "Reporty automaticky dostupné ke stažení v klientské zóně.",
    icon: Globe, enabled: true, stats: { sent: 890 }, color: "from-amber-500 to-orange-600",
  },
  {
    id: "datovka-out", name: "Datová schránka", desc: "Odesílání daňových přiznání a výkazů přes ISDS.",
    icon: Send, enabled: true, stats: { sent: 340 }, color: "from-emerald-500 to-teal-600",
  },
  {
    id: "sms", name: "SMS notifikace", desc: "Upozornění na termíny, splatnosti a nové reporty.",
    icon: Smartphone, enabled: true, stats: { sent: 2100 }, color: "from-cyan-500 to-sky-600",
  },
  {
    id: "slack-out", name: "Slack notifikace", desc: "Automatické notifikace do Slack kanálu klienta.",
    icon: MessageSquare, enabled: true, stats: { sent: 420 }, color: "from-pink-500 to-rose-600",
  },
  {
    id: "isdoc", name: "ISDOC / XML export", desc: "Elektronické faktury v ISDOC formátu pro automatické zpracování.",
    icon: FileText, enabled: true, stats: { sent: 560 }, color: "from-violet-500 to-purple-600",
  },
];

function ChannelGrid({ channels, direction }: { channels: { id: string; name: string; desc: string; icon: React.ComponentType<{ className?: string }>; enabled: boolean; stats: { received?: number; sent?: number }; color: string }[]; direction: "in" | "out" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map((ch) => (
        <Card key={ch.id} className="group transition-shadow hover:shadow-lg">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${ch.color} text-white shadow`}>
                <ch.icon className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={ch.enabled ? "default" : "secondary"}>
                  {ch.enabled ? "Aktivní" : "Brzy"}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8"><Settings className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
            <h3 className="mt-3 font-semibold">{ch.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{ch.desc}</p>
            <div className="mt-3 text-sm">
              <span className="text-muted-foreground">{direction === "in" ? "Přijato" : "Odesláno"}: </span>
              <span className="font-semibold">{(direction === "in" ? ch.stats.received ?? 0 : ch.stats.sent ?? 0).toLocaleString("cs-CZ")}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function AdminKanalyPage() {
  const totalIn = inboundChannels.reduce((s, c) => s + c.stats.received, 0);
  const totalOut = outboundChannels.reduce((s, c) => s + (c.stats as { sent: number }).sent, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Doručovací kanály</h1>
        <p className="text-muted-foreground">
          Kanály pro příjem dokladů od klientů a zasílání reportů zpět
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Příjem dokladů</p><p className="text-2xl font-bold">{totalIn.toLocaleString("cs-CZ")}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Aktivní vstupní kanály</p><p className="text-2xl font-bold text-emerald-600">{inboundChannels.filter((c) => c.enabled).length}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Odesláno reportů</p><p className="text-2xl font-bold">{totalOut.toLocaleString("cs-CZ")}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-muted-foreground">Aktivní výstupní kanály</p><p className="text-2xl font-bold text-emerald-600">{outboundChannels.filter((c) => c.enabled).length}</p></CardContent></Card>
      </div>

      {/* Inbound */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowDown className="h-5 w-5 text-emerald-500" />
          Příjem dokladů od klientů
        </h2>
        <ChannelGrid channels={inboundChannels} direction="in" />
      </div>

      {/* Outbound */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowUp className="h-5 w-5 text-blue-500" />
          Zasílání reportů klientům
        </h2>
        <ChannelGrid channels={outboundChannels} direction="out" />
      </div>
    </div>
  );
}
