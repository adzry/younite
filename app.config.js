export default ({ config }) => ({
  expo: {
    name: "YOUNITE",
    slug: "younite",
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
      bundleIdentifier: "com.adzry.younite",
      buildNumber: "1"
    },
    android: {
      package: "com.adzry.younite",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3001",
      eas: {
        projectId: "<your-eas-project-id>"
      }
    }
  }
});
