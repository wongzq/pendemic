import { NodeEnv } from "$types/server.type";

const EnvConfig = {
  ENV: new NodeEnv(process.env.APP_ENV ?? ""),
  ORIGIN_URL: process.env.ORIGIN_URL ?? "",

  DB_URI: process.env.DB_URI ?? "",
  DB_PORT: parseInt(process.env.DB_PORT ?? ""),
  DB_HOST: process.env.DB_HOST ?? "",
  DB_USER: process.env.DB_USER ?? "",
  DB_PSWD: process.env.DB_PSWD ?? "",
  DB_NAME: process.env.DB_NAME ?? "",

  FIREBASE_ADMIN_SDK: {
    type: process.env.FIREBASE_type ?? "",
    project_id: process.env.FIREBASE_project_id ?? "",
    private_key_id: process.env.FIREBASE_private_key_id ?? "",
    private_key: (process.env.FIREBASE_private_key ?? "").replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_client_email ?? "",
    client_id: process.env.FIREBASE_client_id ?? "",
    auth_uri: process.env.FIREBASE_auth_uri ?? "",
    token_uri: process.env.FIREBASE_token_uri ?? "",
    auth_provider_x509_cert_url:
      process.env.FIREBASE_auth_provider_x509_cert_url ?? "",
    client_x509_cert_url: process.env.FIREBASE_client_x509_cert_url ?? "",
  },

  LOG_FILE: "pendemic-backend.log",
};

export default EnvConfig;
