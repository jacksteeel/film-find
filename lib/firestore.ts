import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy,
  QueryConstraint 
} from 'firebase/firestore';
import { db } from './firebase';
import { Lab } from './types';

// Collection reference
const labsCollection = collection(db, 'labs');

// Get all labs
export async function getAllLabs(): Promise<Lab[]> {
  try {
    const snapshot = await getDocs(labsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Lab));
  } catch (error) {
    console.error('Error fetching labs:', error);
    return [];
  }
}

// Get featured labs (first 3)
export async function getFeaturedLabsFromFirestore(): Promise<Lab[]> {
  try {
    const labs = await getAllLabs();
    return labs.slice(0, 3);
  } catch (error) {
    console.error('Error fetching featured labs:', error);
    return [];
  }
}

// Get single lab by ID
export async function getLabById(id: string): Promise<Lab | null> {
  try {
    const docRef = doc(db, 'labs', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Lab;
    }
    return null;
  } catch (error) {
    console.error('Error fetching lab:', error);
    return null;
  }
}

// Search labs by location (city or state)
export async function searchLabsByLocation(searchTerm: string): Promise<Lab[]> {
  try {
    const allLabs = await getAllLabs();
    const lowerSearch = searchTerm.toLowerCase();
    
    return allLabs.filter(lab => 
      lab.city.toLowerCase().includes(lowerSearch) ||
      lab.state.toLowerCase().includes(lowerSearch)
    );
  } catch (error) {
    console.error('Error searching labs:', error);
    return [];
  }
}

// Filter labs by service
export async function filterLabsByService(service: string): Promise<Lab[]> {
  try {
    const allLabs = await getAllLabs();
    return allLabs.filter(lab => 
      lab.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
    );
  } catch (error) {
    console.error('Error filtering labs:', error);
    return [];
  }
}

// Filter labs by multiple criteria
export async function filterLabs(filters: {
  services?: string[];
  state?: string;
  mailIn?: boolean;
}): Promise<Lab[]> {
  try {
    let labs = await getAllLabs();
    
    // Filter by services
    if (filters.services && filters.services.length > 0) {
      labs = labs.filter(lab =>
        filters.services!.some(service =>
          lab.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
        )
      );
    }
    
    // Filter by state
    if (filters.state) {
      labs = labs.filter(lab => 
        lab.state.toLowerCase() === filters.state!.toLowerCase()
      );
    }
    
    // Filter by mail-in
    if (filters.mailIn !== undefined) {
      labs = labs.filter(lab => 
        lab.mailIn.toLowerCase() === (filters.mailIn ? 'yes' : 'no')
      );
    }
    
    return labs;
  } catch (error) {
    console.error('Error filtering labs:', error);
    return [];
  }
}

// Sort labs
export function sortLabs(labs: Lab[], sortBy: 'name' | 'city' | 'state'): Lab[] {
  return [...labs].sort((a, b) => {
    const aVal = a[sortBy].toLowerCase();
    const bVal = b[sortBy].toLowerCase();
    return aVal.localeCompare(bVal);
  });
}


