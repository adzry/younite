const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) return 'com.younite.dev';
  if (IS_PREVIEW) return 'com.younite.preview';
  return 'com.younite';
};

export default {
  name: IS_PREVIEW ? 'Younite (Preview)' : 'Younite',
  slug: 'younite',
  version: '1.0.0',
  android: {
    package: getUniqueIdentifier(),
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON ?? './android/app/google-services.json'
  },
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL
  }
};
