"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail, Send, MessageSquare, Globe, FileText, Smartphone, Calendar,
  Clock, CheckCircle2, Bell, Settings,
} from "lucide-react";

const deliveryChannels = [
  {
    id: "email",
    name: "Email",
    desc: "Pravidelné reporty a přehledy na váš email jako PDF příloha.",
    icon: Mail,
    enabled: true,
    target: "tomas.mertin@gmail.com",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "datovka",
    name: "Datová schránka",
    desc: "Odesílání výkazů a přiznání přes ISDS. Právně závazné doručení.",
    icon: Send,
    enabled: false,
    target: "—",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "slack",
    name: "Slack",
    desc: "Notifikace o nových reportech a upozornění na důležité termíny.",
    icon: MessageSquare,
    enabled: true,
    target: "#účetnictví",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "sms",
    name: "SMS",
    desc: "Upozornění na důležité daňové termíny a splatnosti.",
    icon: Smartphone,
    enabled: true,
    target: "+420 *** *** 789",
    color: "from-cyan-500 to-sky-600",
  },
  {
    id: "portal",
    name: "Klientský portál",
    desc: "Vše automaticky dostupné ke stažení přímo zde v portálu.",
    icon: Globe,
    enabled: true,
    target: "Vždy aktivní",
    color: "from-amber-500 to-orange-600",
  },
];

const schedules = [
  { report: "Měsíční přehled účetnictví", frequency: "Měsíčně", day: "5. den v měsíci", channel: "Email + Portál", enabled: true },
  { report: "Přehled pohledávek a závazků", frequency: "Týdně", day: "Pondělí", channel: "Slack", enabled: true },
  { report: "DPH přiznání", frequency: "Čtvrtletně", day: "20. den po konci Q", channel: "Email + Datovka", enabled: true },
  { report: "Cash Flow report", frequency: "Měsíčně", day: "10. den v měsíci", channel: "Email", enabled: true },
  { report: "Upozornění na splatnosti", frequency: "Průběžně", day: "3 dny před splatností", channel: "SMS + Slack", enabled: true },
  { report: "Roční závěrka", frequency: "Ročně", day: "Březen", channel: "Email + Datovka + Portál", enabled: false },
];

export default function PortalNastaveniPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Nastavení zasílání</h1>
        <p className="text-muted-foreground">
          Nastavte si, jakými kanály a jak často chcete dostávat přehledy o vašem účetnictví
        </p>
      </div>

      {/* Delivery channels */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Doručovací kanály</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryChannels.map((ch) => (
            <Card key={ch.id} className="transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${ch.color} text-white shadow`}>
                    <ch.icon className="h-5 w-5" />
                  </div>
                  <Badge variant={ch.enabled ? "default" : "secondary"}>
                    {ch.enabled ? "Aktivní" : "Vypnuto"}
                  </Badge>
                </div>
                <h3 className="mt-3 font-semibold">{ch.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ch.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{ch.target}</span>
                  <Button variant="ghost" size="sm"><Settings className="mr-1 h-3 w-3" /> Upravit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scheduled reports */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Pravidelné reporty</h2>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Přidat report
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {schedules.map((sched, i) => (
                <div key={i} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {sched.frequency === "Průběžně" ? <Bell className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium">{sched.report}</p>
                      <p className="text-sm text-muted-foreground">
                        <Clock className="mr-1 inline h-3 w-3" />
                        {sched.frequency} &middot; {sched.day}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-wrap gap-1">
                      {sched.channel.split(" + ").map((ch) => (
                        <Badge key={ch} variant="outline" className="text-[10px]">{ch}</Badge>
                      ))}
                    </div>
                    <Badge variant={sched.enabled ? "default" : "secondary"} className="shrink-0">
                      {sched.enabled ? "Aktivní" : "Neaktivní"}
                    </Badge>
                    <Button variant="ghost" size="sm">Upravit</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload channels info */}
      <Card>
        <CardHeader>
          <CardTitle>Jak nám dodat doklady</CardTitle>
          <CardDescription>Způsoby, kterými můžete nahrávat faktury a další podklady ke zpracování</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, name: "Drag & Drop", desc: "Přetáhněte soubory přímo na stránku Přehled" },
              { icon: Mail, name: "Email", desc: "Pošlete na doklady@fedicfinance.com" },
              { icon: Smartphone, name: "Mobilní foto", desc: "Vyfoťte doklad a nahrajte přes portál" },
              { icon: MessageSquare, name: "Slack", desc: "Pošlete do kanálu #doklady" },
              { icon: Globe, name: "Cloud storage", desc: "Sdílená složka Google Drive / OneDrive (brzy)" },
              { icon: Send, name: "Datová schránka", desc: "Automatický příjem (brzy)" },
            ].map((ch) => (
              <div key={ch.name} className="flex items-center gap-3 rounded-xl border p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <ch.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">{ch.name}</p>
                  <p className="text-[11px] text-muted-foreground">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
