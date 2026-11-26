import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.VENICE_API_KEY!,
    baseURL: 'https://api.venice.ai/api/v1',
    });

    // Use .chat() so requests hit Venice's /chat/completions endpoint
    export const venice = (modelId: string) => openai.chat(modelId);
    