import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { Lab } from './types';

export async function getLabsData(): Promise<Lab[]> {
  const csvPath = path.join(process.cwd(), '..', 'au-film-labs-directory.csv');
  const fileContent = fs.readFileSync(csvPath, 'utf-8');
  
  const parseResult = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  const labs: Lab[] = parseResult.data.map((row: any, index: number) => {
    // Parse services from the Services field
    const servicesString = row.Services || '';
    const services = servicesString.split(',').map((s: string) => s.trim()).filter(Boolean);
    
    // Parse formats
    const formatsString = row.Formats || '';
    const formats = formatsString.split(',').map((f: string) => f.trim()).filter(Boolean);

    return {
      id: `lab-${index + 1}`,
      name: row.Name || 'Unnamed Lab',
      address: row.Address || '',
      city: row.City || '',
      state: row.State || '',
      website: row.Website || '',
      phone: row.Phone || '',
      email: row.Email || '',
      services,
      formats,
      developOnly35mm: row.Develop_Only_35mm || '',
      developScan35mm: row.Develop_Scan_35mm || '',
      developHiRes35mm: row.Develop_HiRes_35mm || '',
      developPrint35mm: row.Develop_Print_35mm || '',
      expressService: row.Express_Service || '',
      turnaround: row.Turnaround || '',
      specialServices: row.Special_Services || '',
      mailIn: row.Mail_In || '',
      notes: row.Notes || '',
    };
  }).filter((lab: Lab) => lab.name !== 'Unnamed Lab');

  return labs;
}

// Helper function to get featured labs (first 3)
export async function getFeaturedLabs(): Promise<Lab[]> {
  const allLabs = await getLabsData();
  return allLabs.slice(0, 3);
}

// Helper function to determine price range based on pricing
export function getPriceRange(lab: Lab): string {
  const prices = [
    lab.developOnly35mm,
    lab.developScan35mm,
    lab.developHiRes35mm,
  ].filter(Boolean);

  if (prices.length === 0) return '$$';

  // Extract numeric values and calculate average
  const numericPrices = prices
    .map(p => {
      const match = p.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
    })
    .filter(n => n > 0);

  if (numericPrices.length === 0) return '$$';

  const avgPrice = numericPrices.reduce((a, b) => a + b, 0) / numericPrices.length;

  if (avgPrice < 15) return '$';
  if (avgPrice < 25) return '$$';
  return '$$$';
}

