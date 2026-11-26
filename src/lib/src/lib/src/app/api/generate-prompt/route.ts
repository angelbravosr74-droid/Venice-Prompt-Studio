import { generateObject } from 'ai';
import { z } from 'zod';
import { venice } from '@/lib/venice';

const PromptOutputSchema = z.object({
  positivePrompt: z
      .string()
          .describe('Concise, visually concrete image prompt under 85 words'),
            negativePrompt: z
                .string()
                    .describe('Comma-separated elements to exclude'),
                      aspectRatio: z.enum(['1:1', '3:4', '4:3', '16:9', '9:16', '2:3', '3:2']),
                      });

                      export async function POST(req: Request) {
                        try {
                            const body = await req.json();
                                const { idea, targetModel, styleTags, framing, lighting, aspectRatio } =
                                      body;

                                          if (!idea || typeof idea !== 'string' || !idea.trim()) {
                                                return Response.json(
                                                        { error: 'Please provide a scene or subject idea.' },
                                                                { status: 400 }
                                                                      );
                                                                          }

                                                                              const systemPrompt = `You are an expert image prompt engineer for Venice AI.
                                                                              Convert the user's concept into an optimized prompt tailored for the target Venice model: "${targetModel || 'z-image-turbo'}".
                                                                              Rules:
                                                                              - Put the primary subject, action, and framing in the first sentence.
                                                                              - Use concrete visual details (textures, lens focal length, directional lighting, physical posture).
                                                                              - Avoid abstract filler buzzwords ("masterpiece", "ultra detailed", "cinematic") unless specifically requested.
                                                                              - Keep the positive prompt under 85 words as one tight paragraph.
                                                                              - Keep the negative prompt focused on actual artifacts or unwanted elements.`;

                                                                                  const { object } = await generateObject({
                                                                                        model: venice('z-ai-glm-5-3-flash'),
                                                                                              schema: PromptOutputSchema,
                                                                                                    system: systemPrompt,
                                                                                                          prompt: `Concept: ${idea.trim()}
                                                                                                          Target Image Model: ${targetModel || 'z-image-turbo'}
                                                                                                          Framing/Camera: ${framing || 'Auto'}
                                                                                                          Lighting: ${lighting || 'Auto'}
                                                                                                          Preferred Aspect Ratio: ${aspectRatio || 'Auto'}
                                                                                                          Style Tags: ${Array.isArray(styleTags) && styleTags.length > 0 ? styleTags.join(', ') : 'None'}`,
                                                                                                              });

                                                                                                                  return Response.json(object);
                                                                                                                    } catch (error) {
                                                                                                                        console.error('Prompt generation error:', error);
                                                                                                                            return Response.json(
                                                                                                                                  { error: 'Failed to generate prompt. Check VENICE_API_KEY and model availability.' },
                                                                                                                                        { status: 500 }
                                                                                                                                            );
                                                                                                                                              }
                                                                                                                                              }
                                                                                                                                              