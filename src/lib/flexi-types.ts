export interface FlexiFakturaVydana {
  id: number;
  kod: string;
  datVyst: string;
  datSplat: string;
  firma: string;
  firmaObj?: { nazev: string; ic?: string };
  sumCelkem: number;
  sumCelkemMen?: number;
  mpiMena?: string;
  zbpiStav: string;
  stavUhrK: string;
  typDokl: string;
  popis?: string;
  varSym?: string;
}

export interface FlexiFakturaPrijata {
  id: number;
  kod: string;
  datVyst: string;
  datSplat: string;
  firma: string;
  firmaObj?: { nazev: string; ic?: string };
  sumCelkem: number;
  sumCelkemMen?: number;
  mpiMena?: string;
  zbpiStav: string;
  stavUhrK: string;
  typDokl: string;
  popis?: string;
  varSym?: string;
}

export interface FlexiAdresar {
  id: number;
  kod: string;
  nazev: string;
  ic?: string;
  dic?: string;
  ulice?: string;
  mesto?: string;
  psc?: string;
  stat?: string;
  email?: string;
  tel?: string;
  www?: string;
  poznam?: string;
}

export interface FlexiBanka {
  id: number;
  kod: string;
  datVyst: string;
  sumCelkem: number;
  firma?: string;
  popis?: string;
  typPohybuK: string;
  sparpiSym?: string;
}

export interface FlexiPokladniPohyb {
  id: number;
  kod: string;
  datVyst: string;
  sumCelkem: number;
  firma?: string;
  popis?: string;
  typPohybuK: string;
}

export type FlexiStavUhr = "stavUhr.uhrazeno" | "stavUhr.castUhr" | "stavUhr.neuhrazeno";
