import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prismaService: PrismaService) {}

  async testTransaction() {
    const transaction = this.prismaService.$transaction;
    return await transaction(async () => {});
  }
}
