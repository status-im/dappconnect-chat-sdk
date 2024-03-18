// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file enums.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from '@bufbuild/protobuf'

/**
 * @generated from enum MessageType
 */
export enum MessageType {
  /**
   * @generated from enum value: UNKNOWN_MESSAGE_TYPE = 0;
   */
  UNKNOWN_MESSAGE_TYPE = 0,

  /**
   * @generated from enum value: ONE_TO_ONE = 1;
   */
  ONE_TO_ONE = 1,

  /**
   * @generated from enum value: PUBLIC_GROUP = 2;
   */
  PUBLIC_GROUP = 2,

  /**
   * @generated from enum value: PRIVATE_GROUP = 3;
   */
  PRIVATE_GROUP = 3,

  /**
   * Only local
   *
   * @generated from enum value: SYSTEM_MESSAGE_PRIVATE_GROUP = 4;
   */
  SYSTEM_MESSAGE_PRIVATE_GROUP = 4,

  /**
   * @generated from enum value: COMMUNITY_CHAT = 5;
   */
  COMMUNITY_CHAT = 5,

  /**
   * Only local
   *
   * @generated from enum value: SYSTEM_MESSAGE_GAP = 6;
   */
  SYSTEM_MESSAGE_GAP = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(MessageType)
proto3.util.setEnumType(MessageType, 'MessageType', [
  { no: 0, name: 'UNKNOWN_MESSAGE_TYPE' },
  { no: 1, name: 'ONE_TO_ONE' },
  { no: 2, name: 'PUBLIC_GROUP' },
  { no: 3, name: 'PRIVATE_GROUP' },
  { no: 4, name: 'SYSTEM_MESSAGE_PRIVATE_GROUP' },
  { no: 5, name: 'COMMUNITY_CHAT' },
  { no: 6, name: 'SYSTEM_MESSAGE_GAP' },
])

/**
 * @generated from enum ImageFormat
 */
export enum ImageFormat {
  /**
   * @generated from enum value: UNKNOWN_IMAGE_FORMAT = 0;
   */
  UNKNOWN_IMAGE_FORMAT = 0,

  /**
   * Raster image files is payload data that can be read as a raster image
   *
   * @generated from enum value: PNG = 1;
   */
  PNG = 1,

  /**
   * @generated from enum value: JPEG = 2;
   */
  JPEG = 2,

  /**
   * @generated from enum value: WEBP = 3;
   */
  WEBP = 3,

  /**
   * @generated from enum value: GIF = 4;
   */
  GIF = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ImageFormat)
proto3.util.setEnumType(ImageFormat, 'ImageFormat', [
  { no: 0, name: 'UNKNOWN_IMAGE_FORMAT' },
  { no: 1, name: 'PNG' },
  { no: 2, name: 'JPEG' },
  { no: 3, name: 'WEBP' },
  { no: 4, name: 'GIF' },
])

/**
 * @generated from enum CommunityTokenType
 */
export enum CommunityTokenType {
  /**
   * @generated from enum value: UNKNOWN_TOKEN_TYPE = 0;
   */
  UNKNOWN_TOKEN_TYPE = 0,

  /**
   * @generated from enum value: ERC20 = 1;
   */
  ERC20 = 1,

  /**
   * @generated from enum value: ERC721 = 2;
   */
  ERC721 = 2,

  /**
   * @generated from enum value: ENS = 3;
   */
  ENS = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(CommunityTokenType)
proto3.util.setEnumType(CommunityTokenType, 'CommunityTokenType', [
  { no: 0, name: 'UNKNOWN_TOKEN_TYPE' },
  { no: 1, name: 'ERC20' },
  { no: 2, name: 'ERC721' },
  { no: 3, name: 'ENS' },
])
