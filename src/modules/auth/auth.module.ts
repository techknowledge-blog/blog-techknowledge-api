import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),  // ✅ registers 'jwt'
    JwtModule.register({
      secret: 'secretKey',  // replace with process.env.JWT_SECRET in production
      signOptions: { expiresIn: '1h' },  // token expiry time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],  // ✅ provide JwtStrategy
  exports: [AuthService],
})
export class AuthModule {}
