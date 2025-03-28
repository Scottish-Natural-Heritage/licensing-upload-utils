/**
 * @typedef {object} UploadedFileMetadata Metadata for an uploaded file.
 * @property {string} fileName  The name of the uploaded file.
 * @property {number} fileSize  The size of the uploaded file.
 * @property {string} key  The S3 bucket item key of the uploaded file.
 * @property {string} displaySize  The size of the uploaded file in human-readable format.
 */
type UploadedFileMetadata = {
  fileName: string;
  fileSize: number;
  key: string;
  displaySize: string;
};

/**
 * @typedef {object} UploadFileConfig Configuration for a file to be uploaded.
 * @property {string} instruction  Text to display instructing the user what to upload.
 * @property {string} hint  Text to display with more detail on what to upload.
 * @property {string} descriptor  Text to display describing content of file.
 * @property {UploadedFileMetadata} metadata  The metadata of the file once it has been uploaded.
 * @property {Record<string, string>} appMetadata  Metadata fields to be stored with the file in S3.
 */
type UploadFileConfig = {
  instruction: string;
  hint: string;
  hintHtml: string;
  descriptor: string;
  metadata?: UploadedFileMetadata;
  appMetadata?: Record<string, string>;
};

/**
 * @typedef {object} UploadConfig Configuration specifying files to be uploaded.
 * @property {string} serviceName  The name of the calling application.
 * @property {boolean} optionalUploads  Whether the user is able to upload an arbitrary number of additional files.
 * @property {UploadFileConfig[]} files  An array of configurations for each file that is required to be uploaded.
 * @property {string} backUrl  The URL to send the user back to if the user clicks "back" link.
 * @property {string} returnUrl  The URL to send the user back to upon completion of the file uploads.
 * @property {string} sessionKey  The session ID that identifies the uploaded files in S3.
 * @property {string} isNewApplication  Whether we want to treat this as a new application.
 * @property {string} multiple  Whether we want to accept multiple files (default false).
 */
type UploadConfig = {
  serviceName: string;
  optionalUploads?: boolean;
  files: UploadFileConfig[];
  backUrl: string;
  returnUrl: string;
  sessionKey?: string;
  isNewApplication?: boolean;
  multiple?: boolean;
};

/**
 * Creates and returns a default instance of an UploadConfig.
 *
 * @returns {UploadConfig} A default instance of an UploadConfig.
 */
const getDefaultUploadConfig = (): UploadConfig => ({
  serviceName: 'NatureScot Licensing',
  optionalUploads: false,
  files: [],
  backUrl: '/error',
  returnUrl: '/error',
});

export type {UploadedFileMetadata, UploadFileConfig, UploadConfig};
export {getDefaultUploadConfig};
