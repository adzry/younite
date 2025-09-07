export default {
  name: "YOUNITE",
  slug: "younite",
  owner: "adzry",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.adzry.younite"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.adzry.younite"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      // 🚀 ProjectId will be injected by `eas init`
      projectId: null
    }
  }
};
