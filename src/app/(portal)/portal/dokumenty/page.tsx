"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

export default function DokumentyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dokumenty</h1>
        <p className="text-muted-foreground">Sdílené dokumenty a přílohy</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Sdílené dokumenty
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dokumenty budou načteny z příloh v Abra Flexi.
            Po připojení k API se zde zobrazí vaše smlouvy, podklady a další dokumenty.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
