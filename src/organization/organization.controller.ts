import {
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Organization } from '@prisma/client';

import { OrganizationService } from './organization.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {
    this.organizationService = organizationService;
  }

  @Post()
  attemptUseTransaction() {
    return this.organizationService.testTransaction();
  }
}
