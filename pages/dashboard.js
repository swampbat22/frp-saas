import '../styles/globals.css'
import { supabase } from '../lib/supabaseClient'
export default function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);
  if (!user) return <p>Loading...</p>;
  return (
    <div className="p-10">
      <h1 className="text-xl">Welcome, {user.email}</h1>
      <a className="text-blue-500 underline block" href="/frp-request">Request FRP Removal</a>
      <a className="text-blue-500 underline block mt-2" href="/billing">Billing Portal</a>
    </div>
  );
}