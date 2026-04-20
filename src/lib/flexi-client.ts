export interface FlexiConfig {
  url: string;
  username: string;
  password: string;
}

export interface FlexiListResponse<T> {
  winstrom: {
    "@version": string;
    [key: string]: T[] | string;
  };
}

export interface FlexiQueryParams {
  start?: number;
  limit?: number;
  detail?: "full" | "summary" | `custom:${string}`;
  order?: string;
  filter?: string;
  relations?: string;
}

function getConfig(): FlexiConfig {
  return {
    url: process.env.FLEXI_URL || "",
    username: process.env.FLEXI_USERNAME || "",
    password: process.env.FLEXI_PASSWORD || "",
  };
}

function buildAuth(config: FlexiConfig): string {
  return "Basic " + Buffer.from(`${config.username}:${config.password}`).toString("base64");
}

function buildUrl(evidence: string, params?: FlexiQueryParams): string {
  const config = getConfig();
  const url = new URL(`${config.url}/${evidence}.json`);

  if (params?.start !== undefined) url.searchParams.set("start", String(params.start));
  if (params?.limit !== undefined) url.searchParams.set("limit", String(params.limit));
  if (params?.detail) url.searchParams.set("detail", params.detail);
  if (params?.order) url.searchParams.set("order", params.order);
  if (params?.filter) url.searchParams.set("filter", params.filter);
  if (params?.relations) url.searchParams.set("relations", params.relations);

  return url.toString();
}

export async function flexiGet<T = Record<string, unknown>>(
  evidence: string,
  params?: FlexiQueryParams
): Promise<{ rows: T[]; total?: number }> {
  const config = getConfig();
  const url = buildUrl(evidence, params);

  const res = await fetch(url, {
    headers: {
      Authorization: buildAuth(config),
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Flexi API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const winstrom = data.winstrom;
  const rows = (winstrom[evidence] || []) as T[];

  return { rows, total: winstrom["@rowCount"] ? Number(winstrom["@rowCount"]) : undefined };
}

export async function flexiGetById<T = Record<string, unknown>>(
  evidence: string,
  id: string | number
): Promise<T | null> {
  const config = getConfig();
  const url = `${config.url}/${evidence}/${id}.json`;

  const res = await fetch(url, {
    headers: {
      Authorization: buildAuth(config),
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Flexi API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const rows = data.winstrom?.[evidence] as T[];
  return rows?.[0] ?? null;
}

export async function flexiPost<T = Record<string, unknown>>(
  evidence: string,
  body: Record<string, unknown>
): Promise<T> {
  const config = getConfig();
  const url = `${config.url}/${evidence}.json`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: buildAuth(config),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ winstrom: { [evidence]: [body] } }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Flexi API error: ${res.status} ${text}`);
  }

  return res.json();
}

export async function flexiDelete(evidence: string, id: string | number): Promise<void> {
  const config = getConfig();
  const url = `${config.url}/${evidence}/${id}.json`;

  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: buildAuth(config),
    },
  });

  if (!res.ok) {
    throw new Error(`Flexi API error: ${res.status} ${res.statusText}`);
  }
}
