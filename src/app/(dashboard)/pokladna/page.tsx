"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export default function PokladnaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pokladna</h1>
        <p className="text-muted-foreground">Pokladní pohyby</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Pokladní pohyby
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Data budou načtena z Abra Flexi API (evidence: pokladni-pohyb).
            Vyplňte přihlašovací údaje v .env.local pro připojení k API.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
