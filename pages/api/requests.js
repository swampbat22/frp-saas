
export default function handler(req, res) {
  res.status(200).json([
    { model: 'SM-T727V', imei: '123456789012345' },
    { model: 'G781V', imei: '987654321098765' }
  ]);
}