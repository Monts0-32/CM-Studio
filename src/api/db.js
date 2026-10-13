// In-memory stand-in for the app's data layer: auth, entities, integrations.
// Every method resolves safely so the UI renders without a live backend.
// Replace the bodies here when wiring up a real API.
export const db = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
    loginViaEmailPassword: async (...args) => {
      throw new Error("Authentication is not configured.");
    },
    loginWithProvider: (...args) => {},
    register: async (...args) => {
      throw new Error("Authentication is not configured.");
    },
    verifyOtp: async (...args) => {
      throw new Error("Authentication is not configured.");
    },
    resendOtp: async (...args) => {},
    setToken: (...args) => {},
    logout: async (...args) => {},
    redirectToLogin: (...args) => {},
    resetPassword: async (...args) => {},
    resetPasswordRequest: async (...args) => {},
  },
  app: {
    getPublicSettings: async () => null,
  },
  entities: new Proxy(
    {},
    {
      get: () => ({
        filter: async () => [],
        get: async () => null,
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
      }),
    }
  ),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: "" }),
    },
  },
};

export default db;