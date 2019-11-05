const dev = {
  STRIPE_KEY: "pk_test_osvGJ0GjqeWpfeiPmObM5Bmj00Yw8H7jAE",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1e0loxy4kdgqh"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ty2b4vsuqb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xm93v1CI3",
    APP_CLIENT_ID: "6pk0fo0egfrgrkuh8i9samiabh",
    IDENTITY_POOL_ID: "us-east-1:3cd31bf0-35ed-421b-a389-7afb3d79a42c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_osvGJ0GjqeWpfeiPmObM5Bmj00Yw8H7jAE",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1i03sythuyior"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2i483ie035.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_D1T6xOqzn",
    APP_CLIENT_ID: "1ejbmiqgl4s0po1jbdke5a5voc",
    IDENTITY_POOL_ID: "us-east-1:abe8ca62-45f6-41f9-a38d-8d2e858d92b4"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
