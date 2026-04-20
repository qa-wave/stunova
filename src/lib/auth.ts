import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Přihlášení",
      credentials: {
        username: { label: "Uživatel", type: "text" },
        password: { label: "Heslo", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username as string;
        const password = credentials?.password as string;

        if (!username || !password) return null;

        // Try authenticating against Flexi API
        const flexiUrl = process.env.FLEXI_URL;
        if (flexiUrl) {
          try {
            const res = await fetch(`${flexiUrl}/evidence-list.json`, {
              headers: {
                Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
              },
            });

            if (res.ok) {
              return {
                id: username,
                name: username,
                email: `${username}@fedicfinance.com`,
                role: "admin" as const,
              };
            }
          } catch {
            // Fall through to demo login
          }
        }

        // Demo login for development
        if (username === "Radek" && password === "Fedič") {
          return { id: "radek", name: "Radek Fedič", email: "radek@fedicfinance.com", role: "admin" as const };
        }
        if (username === "Tomáš" && password === "Mertin") {
          return { id: "tomas", name: "Tomáš Mertin", email: "tomas.mertin@gmail.com", role: "client" as const };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as unknown as { role: string }).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
