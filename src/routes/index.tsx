import AuthRoutes from '@routes/auth.routes';
import HubRoutes from '@routes/hub.routes';

export default function Routes() {
  const isAuthenticated = false;

  return isAuthenticated ? <HubRoutes /> : <AuthRoutes />;
}
