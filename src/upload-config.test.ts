import test from 'ava';
import {getDefaultUploadConfig} from './upload-config';

test('getDefaultUploadConfig loaded', (t) => {
  t.truthy(getDefaultUploadConfig);
});

test('getDefaultUploadConfig returns instance of UploadConfig', (t) => {
  const instance = getDefaultUploadConfig();
  t.is(typeof instance, 'object');
  t.is(typeof instance.serviceName, 'string');
  t.is(typeof instance.optionalUploads, 'boolean');
  t.is(typeof instance.files, 'object');
  t.is(typeof instance.backUrl, 'string');
  t.is(typeof instance.returnUrl, 'string');
});
