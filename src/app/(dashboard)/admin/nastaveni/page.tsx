"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Database, Globe, Key, Mail, Server, Shield, Webhook } from "lucide-react";

export default function AdminNastaveniPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Nastavení systému</h1>
        <p className="text-muted-foreground">Konfigurace API, emailů a systémových parametrů</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Flexi API */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Abra Flexi API</CardTitle>
                <CardDescription>Připojení k účetnímu systému</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Stav připojení</span>
              <Badge className="bg-emerald-100 text-emerald-700">Připojeno</Badge>
            </div>
            <div className="space-y-2">
              <Label>URL instance</Label>
              <Input value="https://tomas-mertin.flexibee.eu/c/fiktivni_firma" readOnly className="text-xs" />
            </div>
            <div className="space-y-2">
              <Label>API uživatel</Label>
              <Input value="••••••••" type="password" readOnly />
            </div>
            <Button variant="outline" size="sm">Otestovat připojení</Button>
          </CardContent>
        </Card>

        {/* Email */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Emailový server</CardTitle>
                <CardDescription>SMTP pro odesílání faktur a notifikací</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Stav</span>
              <Badge variant="secondary">Nenakonfigurováno</Badge>
            </div>
            <div className="space-y-2">
              <Label>SMTP server</Label>
              <Input placeholder="smtp.gmail.com" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Port</Label>
                <Input placeholder="587" />
              </div>
              <div className="space-y-2">
                <Label>Šifrování</Label>
                <Input value="TLS" readOnly />
              </div>
            </div>
            <Button variant="outline" size="sm">Uložit nastavení</Button>
          </CardContent>
        </Card>

        {/* Webhooks */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <Webhook className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Webhooky</CardTitle>
                <CardDescription>Notifikace při změnách v systému</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Aktivní webhooky</span>
              <Badge>2</Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">Nová faktura → Slack</p>
                  <p className="text-xs text-muted-foreground">POST https://hooks.slack.com/...</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700">Aktivní</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">Úhrada přijata → Email</p>
                  <p className="text-xs text-muted-foreground">Notifikace účetní</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700">Aktivní</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Přidat webhook</Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Zabezpečení</CardTitle>
                <CardDescription>Bezpečnostní nastavení a audit</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Dvoufaktorová autentizace (2FA)</span>
                <Badge variant="secondary">Vypnuto</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Automatické odhlášení po nečinnosti</span>
                <Badge className="bg-emerald-100 text-emerald-700">30 min</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Šifrování dat v klidu</span>
                <Badge className="bg-emerald-100 text-emerald-700">AES-256</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Audit log</span>
                <Badge className="bg-emerald-100 text-emerald-700">Aktivní</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Bezpečnostní audit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
