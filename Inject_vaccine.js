import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function VaccinationForm  (){
  const navigate = useNavigate();
  const [RefNo, setRefNo] = useState('');
  const [CHDRID, setCHDRID] = useState('');
  const [vaccinePerpose, setVaccinePerpose] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleRefNoChange = (e) => {
    setRefNo(e.target.value);
  };
  const handleCHDRIDChange = (e) => {
    setCHDRID(e.target.value);
  };
  const handleSCAN = () => {
    alert('Scan now');
    navigate("/ScanForm");
  };


  const handleVaccinePerposeChange = (e) => {
    setVaccinePerpose(e.target.value);
  };

  const handleAddPrescription = () => {
    alert(' Add Prescription');
    navigate("/Prescription");
  };

  const handleEditPrescription = () => {
    alert('Edit Prescription ');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
        Injected Vaccination Form
      </h1>

      {}
      <div style={{ border: '1px solid black', padding: '20px', marginBottom: '20px' }}>
        <div>
          <label htmlFor="RefNo">RefNo: </label>
          <input
            type="text"
            id="RefNo"
            value={RefNo}
            onChange={handleRefNoChange}
            placeholder="Enter RefNo "
            style={{ marginLeft: '10px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="CHDRID">CHDR ID: </label>
          <input
            type="text"
            id="CHDRID"
            value={CHDRID}
            onChange={handleCHDRIDChange}
            placeholder="Enter CHDRID "
            style={{ marginLeft: '10px', marginBottom: '10px' }}
          />
        </div>

        {}
        <div style={{ border: '1px solid grey', padding: '20px', marginTop: '10px' }}>
          <label htmlFor="vaccinePerpose">Vaccine Perpose: </label>
          <select id="vaccinePerpose" value={vaccinePerpose} onChange={handleVaccinePerposeChange}>
            <option value="" disabled>Select a Perpose</option>
            <option value="vaccinePerpose1">Vaccination </option>
            <option value="vaccinePerpose2">Out side Vaccination</option>
            <option value="vaccinePerpose3">Nomal Channeling</option>
            
          </select>
          <br></br>
          <button onClick={handleSCAN} style={{ marginRight: '10px' }}>
          SCAN
        </button>
        </div>
      </div>

      {}
      <div style={{ border: '4px solid black', padding: '20px' }}>
        <h3>Prescription</h3>
        
        <button onClick={handleAddPrescription} style={{ marginRight: '20px' }}>
          ADD PRESCRIPTION
        </button>
        <button onClick={handleEditPrescription}>EDIT</button>
      </div>
    </div>
  );
};

export default VaccinationForm;
