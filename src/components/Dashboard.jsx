import React, { useState, useMemo } from 'react';
import FraudTypeChart from './FraudTypeChart';
import SeverityChart from './SeverityChart';
import CallTreatmentChart from './CallTreatmentChart';
import ThreatInfoPanel from './ThreatInfoPanel';
import CarrierChart from './CarrierChart';
import ThreatsListChart from './ThreatsListChart';
import ThreatMap from './ThreatMap';
import {
  fraudTypeData,
  severityLevelData,
  callTreatmentData,
  threatInfoData,
  carrierData,
  threatsByPhoneNumber,
  geographicThreats
} from '../data/dummyData';

const Dashboard = () => {
  const [threatInfoFilter, setThreatInfoFilter] = useState('All');
  const [carrierFilter, setCarrierFilter] = useState('All');

  // Filter data based on severity level
  const filteredThreatInfo = useMemo(() => {
    if (threatInfoFilter === 'All') return threatInfoData;
    return threatInfoData.map(item => ({
      ...item,
      value: Math.floor(item.value * (threatInfoFilter === 'Critical Risk' ? 0.8 : 0.6))
    }));
  }, [threatInfoFilter]);

  const filteredCarrierData = useMemo(() => {
    if (carrierFilter === 'All') return carrierData;
    return carrierData.map(item => ({
      ...item,
      value: Math.floor(item.value * (carrierFilter === 'Critical Risk' ? 0.7 : 0.5))
    }));
  }, [carrierFilter]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <img
            src="https://teraquant.com/wp-content/uploads/2019/08/terraquant-logos.png"
            alt="Teraquant Logo"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              TQ_Rating Server Dashboard
            </h1>
            <p className="text-gray-600">
              TQ_Trust Platform - Telecommunications Fraud Detection System
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="space-y-6">
        {/* Top Row - 3 Donut Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FraudTypeChart data={fraudTypeData} />
          <SeverityChart data={severityLevelData} />
          <CallTreatmentChart data={callTreatmentData} />
        </div>

        {/* Middle Row - 3 Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ThreatInfoPanel
            data={filteredThreatInfo}
            filter={threatInfoFilter}
            onFilterChange={setThreatInfoFilter}
          />
          <CarrierChart
            data={filteredCarrierData}
            filter={carrierFilter}
            onFilterChange={setCarrierFilter}
          />
          <ThreatsListChart data={threatsByPhoneNumber} />
        </div>

        {/* Bottom Row - Map */}
        <div>
          <ThreatMap data={geographicThreats} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 Teraquant Corporation - TQ_Trust Platform</p>
        <p className="mt-1">Boulder, Colorado | Proof of Concept Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
