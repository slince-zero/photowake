import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { clerkClient } from '@clerk/express';

@Injectable()
export class ClerkGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // 从请求头中获取 Authorization token
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No authorization token provided');
    }

    // 通常 token 格式为 "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Invalid authorization header format');
    }

    try {
      // 验证 token 并获取会话信息
      const session = await clerkClient.sessions.verifySession(token, token);

      // 如果需要，可以将用户信息附加到请求对象上
      if (session) {
        const user = await clerkClient.users.getUser(session.userId);
        request.user = user;
        return true;
      }

      return false;
    } catch (error) {
      throw new UnauthorizedException('Invalid session token', {
        cause: error,
      });
    }
  }
}
