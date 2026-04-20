"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const result = await signIn("credentials", {
      username,
      password: formData.get("password"),
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Nesprávné přihlašovací údaje");
    } else {
      // Redirect based on who logged in
      // Radek (admin) → dashboard, Tomáš (client) → portal
      if (username === "Radek") {
        router.push("/dashboard");
      } else {
        router.push("/portal");
      }
      router.refresh();
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[oklch(0.18_0.04_255)] to-[oklch(0.25_0.06_260)] p-4">
      <Card className="w-full max-w-md border-0 shadow-2xl">
        <CardHeader className="space-y-3 text-center">
          <Image src="/logo.jpg" alt="Fedic Finance" width={64} height={64} className="mx-auto rounded-xl shadow-md" />
          <CardTitle className="text-2xl">Klientská zóna</CardTitle>
          <CardDescription>Přihlaste se do účetního portálu Fedic Finance</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Uživatel</Label>
              <Input
                id="username"
                name="username"
                placeholder="Jméno"
                required
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Heslo</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Heslo"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Přihlašuji..." : "Přihlásit se"}
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">Demo přístupy</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const form = document.querySelector("form") as HTMLFormElement;
                  (form.querySelector("#username") as HTMLInputElement).value = "Tomáš";
                  (form.querySelector("#password") as HTMLInputElement).value = "Mertin";
                }}
                className="flex items-center gap-2 rounded-lg border p-3 text-left text-xs transition-colors hover:bg-muted"
              >
                <User className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold">Klient</p>
                  <p className="text-muted-foreground">Tomáš / Mertin</p>
                </div>
              </button>
              <button
                onClick={() => {
                  const form = document.querySelector("form") as HTMLFormElement;
                  (form.querySelector("#username") as HTMLInputElement).value = "Radek";
                  (form.querySelector("#password") as HTMLInputElement).value = "Fedič";
                }}
                className="flex items-center gap-2 rounded-lg border p-3 text-left text-xs transition-colors hover:bg-muted"
              >
                <Shield className="h-4 w-4 text-accent" />
                <div>
                  <p className="font-semibold">Administrátor</p>
                  <p className="text-muted-foreground">Radek / Fedič</p>
                </div>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
