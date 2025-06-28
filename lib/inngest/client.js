import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "CarrerIQ", // Unique app ID
  name: "CareerIQ",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
