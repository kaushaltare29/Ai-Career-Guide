import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";

export const { GET, POST } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
  live: true,
});
