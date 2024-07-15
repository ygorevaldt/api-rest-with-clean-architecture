import { server } from '@/server';
import { UserRoute } from '@/presentation/routes/user.route';
import { JwtAdapter } from './infra/adapters/jwt.adapter';
import { AuthRoute } from './presentation/routes/auth.route';

const tokenProvider = new JwtAdapter(process.env.TOKEN_SECRET!);

new AuthRoute(server, tokenProvider);
new UserRoute(server);