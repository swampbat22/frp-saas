import { useEffect, useState } from 'react';
export default function AdminPanel() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch('/api/requests').then(res => res.json()).then(data => setRequests(data));
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Admin Panel</h1>
      <table className="table-auto border">
        <thead>
          <tr><th className="border px-2">Model</th><th className="border px-2">IMEI</th></tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx}>
              <td className="border px-2">{req.model}</td>
              <td className="border px-2">{req.imei}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}