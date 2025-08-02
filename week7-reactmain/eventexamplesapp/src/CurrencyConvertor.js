import React, { useState } from 'react';

function CurrencyConvertor() {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    const handleConvert = () => {
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount)) {
            alert('Please enter a valid number for amount.');
            return;
        }

        if (currency.toLowerCase().trim() === 'euro') {
            const euroAmount = numericAmount * 80;
            alert(`Converting to Euro Amount is ${euroAmount}`);
        } else {
            alert('Only Euro conversion is supported.');
        }
    };

    return (
        <div>
            <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ width: '80px' }}> Amount: </label>
                <input 
                    type="text" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ width: '80px' }}> Currency: </label>
                <input 
                    type="text" 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
            </div>

            <button style={{ marginLeft: '120px' }} onClick={handleConvert}>Submit</button>
        </div>
    );
}

export default CurrencyConvertor;
