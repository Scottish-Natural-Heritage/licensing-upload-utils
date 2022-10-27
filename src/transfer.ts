/**
 * @typedef {object} TransferredFileInfo Represents information on a file that has been transferred to Objective Connect.
 * @property {string} uuid  The identifier of the file in Objective Connect.
 * @property {string} fileName  The name of the transferred file.
 * @property {Record<string, string>} appMetadata  Metadata fields stored with the file in S3.
 */
type TransferredFileInfo = {
  uuid: string;
  fileName: string;
  appMetadata?: Record<string, string>;
};

export type {TransferredFileInfo};
