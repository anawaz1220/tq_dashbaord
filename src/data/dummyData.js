// Dummy data for TQ_Rating Server Dashboard

// Fraud Types - Total ~100 incidents
export const fraudTypeData = [
  { name: 'Fraud/Scam Risk', value: 45, color: '#E85D75' },
  { name: 'Robocall', value: 35, color: '#FFA15C' },
  { name: 'Spoofed', value: 25, color: '#5DC1C5' }
];

// Severity Levels - Total ~100 incidents
export const severityLevelData = [
  { name: 'Critical Risk', value: 50, color: '#E85D75' },
  { name: 'Significant Risk', value: 30, color: '#FFA15C' },
  { name: 'Suspicious', value: 20, color: '#FFD15C' }
];

// Call Treatment - 50/50 split
export const callTreatmentData = [
  { name: 'Allowed', value: 50, color: '#5DC5A8' },
  { name: 'Blocked', value: 50, color: '#E85D75' }
];

// Threat Info - Horizontal bar data
export const threatInfoData = [
  { name: 'High Risk Score', value: 30, color: '#E85D75', category: 'high-risk' },
  { name: 'Suspicious Behavior', value: 25, color: '#5DC1C5', category: 'suspicious' }
];

// Carrier Data
export const carrierData = [
  { name: 'Level 3 Communications, LLC', value: 18, color: '#9B7EDE' },
  { name: 'USA Mobility', value: 13, color: '#FFA15C' },
  { name: 'Onvoy, LLC', value: 8, color: '#5DC1C5' }
];

// Threats by Phone Number - 15 random phone numbers
export const threatsByPhoneNumber = [
  { phoneNumber: '8506125875', threats: 24 },
  { phoneNumber: '7234545761', threats: 21 },
  { phoneNumber: '6777644321', threats: 18 },
  { phoneNumber: '6567788884', threats: 16 },
  { phoneNumber: '6060125901', threats: 14 },
  { phoneNumber: '7285413345', threats: 12 },
  { phoneNumber: '6389412458', threats: 10 },
  { phoneNumber: '8769412349', threats: 8 },
  { phoneNumber: '8194124597', threats: 7 },
  { phoneNumber: '9564146673', threats: 6 },
  { phoneNumber: '7654739602', threats: 5 },
  { phoneNumber: '4567920705', threats: 4 },
  { phoneNumber: '6679882029', threats: 3 },
  { phoneNumber: '3444587768', threats: 2 },
  { phoneNumber: '3544586798', threats: 1 }
];

// Geographic Threat Origins
export const geographicThreats = [
  {
    id: 1,
    city: 'New York',
    country: 'USA',
    lat: 40.7128,
    lng: -74.0060,
    threats: 42,
    severity: 'critical'
  },
  {
    id: 2,
    city: 'London',
    country: 'UK',
    lat: 51.5074,
    lng: -0.1278,
    threats: 28,
    severity: 'significant'
  },
  {
    id: 3,
    city: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lng: 139.6503,
    threats: 35,
    severity: 'critical'
  },
  {
    id: 4,
    city: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lng: 72.8777,
    threats: 31,
    severity: 'significant'
  },
  {
    id: 5,
    city: 'São Paulo',
    country: 'Brazil',
    lat: -23.5505,
    lng: -46.6333,
    threats: 18,
    severity: 'suspicious'
  },
  {
    id: 6,
    city: 'Sydney',
    country: 'Australia',
    lat: -33.8688,
    lng: 151.2093,
    threats: 22,
    severity: 'significant'
  },
  {
    id: 7,
    city: 'Los Angeles',
    country: 'USA',
    lat: 34.0522,
    lng: -118.2437,
    threats: 26,
    severity: 'significant'
  },
  {
    id: 8,
    city: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lng: 55.2708,
    threats: 15,
    severity: 'suspicious'
  }
];

// Helper function to get total threats
export const getTotalThreats = () => {
  return fraudTypeData.reduce((sum, item) => sum + item.value, 0);
};

// Helper function to get total by severity
export const getTotalBySeverity = () => {
  return severityLevelData.reduce((sum, item) => sum + item.value, 0);
};

// Helper function to get total call treatment
export const getTotalCallTreatment = () => {
  return callTreatmentData.reduce((sum, item) => sum + item.value, 0);
};

// Filter options
export const filterOptions = ['All', 'Critical Risk', 'Significant Risk', 'Suspicious'];
