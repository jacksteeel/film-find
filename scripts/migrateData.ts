/**
 * Data Migration Script
 * Run this once to migrate CSV data to Firestore
 * 
 * Usage: npx tsx scripts/migrateData.ts
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as fs from 'fs';
import * as path from 'path';
import Papa from 'papaparse';

// Initialize Firebase Admin
if (getApps().length === 0) {
  initializeApp({
    projectId: 'filmfind-a11f0',
  });
}

const db = getFirestore();

interface CSVRow {
  Name: string;
  Address: string;
  City: string;
  State: string;
  Website: string;
  Phone: string;
  Email: string;
  Services: string;
  Formats: string;
  Develop_Only_35mm: string;
  Develop_Scan_35mm: string;
  Develop_HiRes_35mm: string;
  Develop_Print_35mm: string;
  Express_Service: string;
  Turnaround: string;
  Special_Services: string;
  Mail_In: string;
  Notes: string;
}

async function migrateData() {
  console.log('🚀 Starting data migration...\n');

  // Read CSV file
  const csvPath = path.join(process.cwd(), '..', 'au-film-labs-directory.csv');
  console.log(`📄 Reading CSV from: ${csvPath}`);
  
  const fileContent = fs.readFileSync(csvPath, 'utf-8');
  
  const parseResult = Papa.parse<CSVRow>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  console.log(`✅ Found ${parseResult.data.length} labs in CSV\n`);

  // Process and upload each lab
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < parseResult.data.length; i++) {
    const row = parseResult.data[i];
    
    if (!row.Name || row.Name.trim() === '') {
      console.log(`⚠️  Skipping empty row ${i + 1}`);
      continue;
    }

    try {
      // Parse services and formats
      const services = row.Services
        ? row.Services.split(',').map(s => s.trim()).filter(Boolean)
        : [];
      
      const formats = row.Formats
        ? row.Formats.split(',').map(f => f.trim()).filter(Boolean)
        : [];

      // Create lab document
      const labData = {
        name: row.Name.trim(),
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
        createdAt: new Date().toISOString(),
        verified: true,
        featured: i < 3, // First 3 are featured
      };

      // Add to Firestore
      const docRef = await db.collection('labs').add(labData);
      
      console.log(`✅ [${i + 1}/${parseResult.data.length}] Uploaded: ${labData.name} (${docRef.id})`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error uploading ${row.Name}:`, error);
      errorCount++;
    }
  }

  console.log('\n🎉 Migration complete!');
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📊 Total: ${successCount + errorCount}`);
}

// Run migration
migrateData()
  .then(() => {
    console.log('\n✨ All done! Your data is now in Firestore.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });

