"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { formatCZK } from "@/lib/mock-data";

const monthlyData = [
  { name: "Říj", pohledavky: 450000, zavazky: 120000, cashflow: 330000 },
  { name: "Lis", pohledavky: 380000, zavazky: 180000, cashflow: 200000 },
  { name: "Pro", pohledavky: 520000, zavazky: 95000, cashflow: 425000 },
  { name: "Led", pohledavky: 320000, zavazky: 85000, cashflow: 235000 },
  { name: "Úno", pohledavky: 280000, zavazky: 92000, cashflow: 188000 },
  { name: "Bře", pohledavky: 758800, zavazky: 55250, cashflow: 703550 },
];

const klientiData = [
  { name: "ABC Systems", vydane: 125000, prijate: 0 },
  { name: "GHI Manufacturing", vydane: 234500, prijate: 0 },
  { name: "PQR Logistics", vydane: 156200, prijate: 0 },
  { name: "DEF Consulting", vydane: 78900, prijate: 0 },
  { name: "MNO Digital", vydane: 67800, prijate: 0 },
];

const cumCashflow = monthlyData.reduce<{ name: string; total: number }[]>((acc, m) => {
  const prev = acc.length > 0 ? acc[acc.length - 1].total : 0;
  acc.push({ name: m.name, total: prev + m.cashflow });
  return acc;
}, []);

export default function PrehledPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finanční přehledy</h1>
        <p className="text-muted-foreground">Grafy a analýzy finančních dat</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pohledávky vs Závazky */}
        <Card>
          <CardHeader>
            <CardTitle>Pohledávky vs Závazky</CardTitle>
            <CardDescription>Měsíční porovnání</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 250)" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip formatter={(value) => formatCZK(Number(value))} />
                  <Bar dataKey="pohledavky" name="Pohledávky" fill="oklch(0.30 0.06 260)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="zavazky" name="Závazky" fill="oklch(0.65 0.12 30)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Kumulativní cashflow */}
        <Card>
          <CardHeader>
            <CardTitle>Kumulativní Cash Flow</CardTitle>
            <CardDescription>Narostlý cash flow za 6 měsíců</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cumCashflow}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 250)" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} tickFormatter={(v) => `${v / 1000000}M`} />
                  <Tooltip formatter={(value) => formatCZK(Number(value))} />
                  <Area
                    type="monotone"
                    dataKey="total"
                    name="Cash Flow"
                    stroke="oklch(0.55 0.10 160)"
                    fill="oklch(0.55 0.10 160 / 20%)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cashflow trend */}
        <Card>
          <CardHeader>
            <CardTitle>Měsíční Cash Flow</CardTitle>
            <CardDescription>Čistý cash flow za měsíc</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 250)" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip formatter={(value) => formatCZK(Number(value))} />
                  <Line
                    type="monotone"
                    dataKey="cashflow"
                    name="Cash Flow"
                    stroke="oklch(0.75 0.15 75)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top klienti */}
        <Card>
          <CardHeader>
            <CardTitle>Top klienti</CardTitle>
            <CardDescription>Dle objemu vydaných faktur</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={klientiData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 250)" />
                  <XAxis type="number" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                  <YAxis type="category" dataKey="name" fontSize={11} width={120} />
                  <Tooltip formatter={(value) => formatCZK(Number(value))} />
                  <Bar dataKey="vydane" name="Objem" fill="oklch(0.30 0.06 260)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
