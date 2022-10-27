/**
 * @typedef {object} TransferredFile Represents a file that has been transferred to Objective Connect.
 * @property {string} uuid  The identifier of the file in Objective Connect.
 * @property {string} fileName  The name of the transferred file.
 * @property {string} descriptor  A unique identifier describing the content of the file.
 */
type TransferredFile = {
  uuid: string;
  fileName: string;
  descriptor: string;
};

export type {TransferredFile};
