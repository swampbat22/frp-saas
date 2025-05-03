export default async function handler(req, res) {
  const { model, imei } = req.body;
  await fetch('https://your-agent-endpoint.com/unlock', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, imei })
  });
  res.status(200).json({ message: 'Request submitted. You will be notified via email.' });
}