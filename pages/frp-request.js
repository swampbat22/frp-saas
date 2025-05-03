import { useState } from 'react';
export default function FRPRequest() {
  const [model, setModel] = useState('');
  const [imei, setImei] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async () => {
    const res = await fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, imei })
    });
    const data = await res.json();
    setMessage(data.message);
  };
  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Submit FRP Unlock Request</h1>
      <input className="border p-2 block mb-2" placeholder="Device Model" value={model} onChange={(e) => setModel(e.target.value)} />
      <input className="border p-2 block mb-2" placeholder="IMEI or Serial" value={imei} onChange={(e) => setImei(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2" onClick={handleSubmit}>Submit</button>
      <p className="mt-2">{message}</p>
    </div>
  );
}