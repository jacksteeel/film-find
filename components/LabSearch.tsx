'use client';

import { useState, useMemo } from 'react';
import LabCard from './LabCard';
import { Lab } from '@/lib/types';

interface LabSearchProps {
  labs: Lab[];
}

export default function LabSearch({ labs }: LabSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'city' | 'state'>('name');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique services and states
  const allServices = useMemo(() => {
    const services = new Set<string>();
    labs.forEach(lab => {
      lab.services.forEach(service => services.add(service));
    });
    return Array.from(services).sort();
  }, [labs]);

  const allStates = useMemo(() => {
    const states = new Set(labs.map(lab => lab.state));
    return Array.from(states).sort();
  }, [labs]);

  // Filter and sort labs
  const filteredLabs = useMemo(() => {
    let filtered = labs;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(lab =>
        lab.name.toLowerCase().includes(term) ||
        lab.city.toLowerCase().includes(term) ||
        lab.state.toLowerCase().includes(term)
      );
    }

    // Service filter
    if (selectedServices.length > 0) {
      filtered = filtered.filter(lab =>
        selectedServices.some(service =>
          lab.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
        )
      );
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter(lab => lab.state === selectedState);
    }

    // Sort
    return [...filtered].sort((a, b) => {
      const aVal = a[sortBy].toLowerCase();
      const bVal = b[sortBy].toLowerCase();
      return aVal.localeCompare(bVal);
    });
  }, [labs, searchTerm, selectedServices, selectedState, sortBy]);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="bg-white border-2 border-black p-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Search by lab name, city, or state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field w-full"
          />
          
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-ghost"
            >
              {showFilters ? '− Hide' : '+ Show'} Filters
            </button>
            
            <div className="flex items-center gap-4">
              <label className="text-sm font-sans font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'city' | 'state')}
                className="input-field text-sm py-2"
              >
                <option value="name">Name</option>
                <option value="city">City</option>
                <option value="state">State</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-gray-50 border-2 border-black p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Services Filter */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {allServices.map(service => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`service-badge transition-all ${
                      selectedServices.includes(service)
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* State Filter */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-3">State</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedState('')}
                  className={`service-badge transition-all ${
                    selectedState === ''
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  All States
                </button>
                {allStates.map(state => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className={`service-badge transition-all ${
                      selectedState === state
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedServices.length > 0 || selectedState) && (
              <button
                onClick={() => {
                  setSelectedServices([]);
                  setSelectedState('');
                }}
                className="btn-secondary text-sm"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Showing <span className="font-bold">{filteredLabs.length}</span> of{' '}
          <span className="font-bold">{labs.length}</span> labs
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Labs Grid */}
      {filteredLabs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLabs.map(lab => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-black bg-gray-50">
          <h3 className="text-2xl font-serif font-semibold mb-2">No labs found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filters
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedServices([]);
              setSelectedState('');
            }}
            className="btn-secondary"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
}

