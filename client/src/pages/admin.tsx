import { AdminDashboard } from '@/components/AdminDashboard';
import { usePageView } from '@/hooks/useAnalytics';

export default function Admin() {
  usePageView('/admin');

  return <AdminDashboard />;
}