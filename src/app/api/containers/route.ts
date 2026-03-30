import { NextRequest, NextResponse } from "next/server";

// Container inventory API — for freight AI services and external integrations
// GET /api/containers — list all containers with pricing
// GET /api/containers?size=20ft — filter by size
// GET /api/containers?type=hire — filter by type (sale/hire)

const containers = [
  { id: "10ft-std-new", size: "10ft", type: "sale", condition: "new", variant: "Standard", priceMin: 6400, priceMax: 7400, currency: "AUD", available: true },
  { id: "20ft-std-new", size: "20ft", type: "sale", condition: "new", variant: "Standard", priceMin: 3200, priceMax: 3600, currency: "AUD", available: true },
  { id: "20ft-std-used", size: "20ft", type: "sale", condition: "used", variant: "Standard", priceMin: 2100, priceMax: 2500, currency: "AUD", available: true },
  { id: "20ft-hc-new", size: "20ft", type: "sale", condition: "new", variant: "High Cube", priceMin: 3800, priceMax: 4350, currency: "AUD", available: true },
  { id: "40ft-hc-new", size: "40ft", type: "sale", condition: "new", variant: "High Cube", priceMin: 6200, priceMax: 6700, currency: "AUD", available: true },
  { id: "40ft-hc-used", size: "40ft", type: "sale", condition: "used", variant: "High Cube", priceMin: 3100, priceMax: 3600, currency: "AUD", available: true },
  { id: "20ft-side-new", size: "20ft", type: "sale", condition: "new", variant: "Side Opening", priceMin: 9000, priceMax: 10000, currency: "AUD", available: true },
  { id: "40ft-side-2d", size: "40ft", type: "sale", condition: "new", variant: "2-Door Side Opening", priceMin: 9500, priceMax: 10500, currency: "AUD", available: true },
  { id: "40ft-side-4d", size: "40ft", type: "sale", condition: "new", variant: "4-Door Side Opening", priceMin: 12200, priceMax: 13200, currency: "AUD", available: true },
  { id: "20ft-reefer", size: "20ft", type: "sale", condition: "used", variant: "Refrigerated", priceMin: 12200, priceMax: 13100, currency: "AUD", available: true },
  { id: "20ft-dg", size: "20ft", type: "sale", condition: "new", variant: "Dangerous Goods", priceMin: 19250, priceMax: 21500, currency: "AUD", available: true },
  // Hire
  { id: "10ft-hire", size: "10ft", type: "hire", condition: "used", variant: "Standard", dailyRate: 7, weeklyRate: 40, monthlyRate: 140, currency: "AUD", available: true },
  { id: "20ft-hire", size: "20ft", type: "hire", condition: "used", variant: "Standard", dailyRate: 5, weeklyRate: 30, monthlyRate: 110, currency: "AUD", available: true },
  { id: "40ft-hire", size: "40ft", type: "hire", condition: "used", variant: "Standard", dailyRate: 8, weeklyRate: 50, monthlyRate: 180, currency: "AUD", available: true },
];

const freightZones = [
  { zone: "Perth Metro", description: "Henderson, Fremantle, Rockingham, Joondalup, Midland, Armadale", estimatedCost: { min: 250, max: 450 }, deliveryDays: "2-3" },
  { zone: "Perth Extended", description: "Mandurah, Mundijong, Bullsbrook, Toodyay", estimatedCost: { min: 400, max: 650 }, deliveryDays: "3-5" },
  { zone: "Regional WA South", description: "Bunbury, Albany, Esperance, Kalgoorlie", estimatedCost: { min: 800, max: 1500 }, deliveryDays: "5-10" },
  { zone: "Regional WA North", description: "Geraldton, Carnarvon, Karratha, Port Hedland", estimatedCost: { min: 1500, max: 3500 }, deliveryDays: "7-14" },
  { zone: "Remote", description: "Broome, Kununurra, Newman, Tom Price", estimatedCost: { min: 3000, max: 6000 }, deliveryDays: "10-21" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get("size");
  const type = searchParams.get("type");
  const includeFreight = searchParams.get("freight") === "true";

  let results = [...containers];

  if (size) results = results.filter((c) => c.size.toLowerCase() === size.toLowerCase());
  if (type) results = results.filter((c) => c.type.toLowerCase() === type.toLowerCase());

  const response: Record<string, unknown> = {
    success: true,
    provider: "U-Move Australia",
    location: "836 Cockburn Road, Henderson WA 6166",
    phone: "(08) 9459 8888",
    email: "sales@u-move.com.au",
    website: "https://u-move.com.au",
    note: "All prices exclude GST and delivery. Contact us for exact pricing.",
    containers: results,
    totalResults: results.length,
  };

  if (includeFreight) {
    response.freightZones = freightZones;
  }

  return NextResponse.json(response, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
