import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : 'Check your email for a login link.');
  };
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">FRP SaaS Login</h1>
      <input className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={handleLogin}>Send Magic Link</button>
      <p>{message}</p>
    </div>
  );
}