import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", 
        "CATEGORY:PREVIEW",
        "CATEGORY:API", // Allow API testing tools
        "CATEGORY:DEVELOPMENT", // Allow development tools
      ],
    }),
    // Rate limiting is handled dynamically in security.middleware.js
  ],
});

export default aj;
