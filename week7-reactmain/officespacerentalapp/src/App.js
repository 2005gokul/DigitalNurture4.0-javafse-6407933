import React from 'react';
import officeImg from './office.jpg'; 
import './App.css';

function App() {
  const element = "Office space";

  const jsxatt = <img src={officeImg} width="25%" height="25%" alt="Office space" />;

  const itemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  const officeList = [
    
    { Name: "Tidel Park", Rent: 80000, Address: "Chennai" },
    { Name: "SP Infocity", Rent: 55000, Address: "Hyderabad" },
    { Name: "WeWork", Rent: 95000, Address: "Bangalore" }
  ];

  return (
    <div className="center-content">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {itemName.Name}</h1>
      <h3 style={{ color: itemName.Rent <= 60000 ? 'red' : 'green' }}>
        Rent: Rs.{itemName.Rent}
      </h3>
      <h3>Address: {itemName.Address}</h3>

      <hr />

      <h2>Other Available Office Spaces:</h2>
      {officeList.map((office, index) => (
        <div key={index}>
          <h1>Name: {office.Name}</h1>
          <h3 style={{ color: office.Rent <= 60000 ? 'red' : 'green' }}>
            Rent: Rs.{office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
