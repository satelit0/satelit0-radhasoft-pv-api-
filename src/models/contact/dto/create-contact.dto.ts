import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { ContactDto } from './contact-dto';
import { Address, GeoLocation, Phone, SocialNetworks } from '../../entitys/entity';
import { IsOptional } from 'class-validator';

export class CreateContactDto extends OmitType(ContactDto, ['id', 'createdAt', 'updatedAt', 'deletedAt', 'contactId']) {
  
  // @ApiProperty({ name: 'id', type: 'integer' })
  // id: number;
  // @ApiProperty({ name: 'contactId', type: 'integer' })
  // contactId: string;
  
  @ApiProperty({ name: 'provinceId', type: 'integer', required: false })
  provinceId: number;

  @ApiProperty({ name: 'municipalityId', type: 'integer', required: false })
  municipalityId: number;

  @ApiProperty({ name: 'email', type: 'string', required: false })
  email: string;
  
  @ApiProperty({ name: 'phones', type: Phone, required: false })
  phones: Phone;
  
  @ApiProperty({ name: 'socialNetworks', type: SocialNetworks, required: false })
  socialNetworks: SocialNetworks;

  @ApiProperty({ name: 'geoLocation', type: GeoLocation, required: false })
  geoLocation: GeoLocation;

  @ApiProperty({ name: 'address', type: Address, required: false })
  address: Address;

}

