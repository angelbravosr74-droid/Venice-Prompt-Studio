export type AspectRatioOption =
  | '1:1'
    | '3:4'
      | '4:3'
        | '16:9'
          | '9:16'
            | '2:3'
              | '3:2';

              export interface VeniceModelProfile {
                id: string;
                  label: string;
                    bestFor: string;
                      defaultAspectRatio: AspectRatioOption;
                        promptHint: string;
                        }

                        export const VENICE_IMAGE_MODELS: VeniceModelProfile[] = [
                          {
                              id: 'z-image-turbo',
                                  label: 'Z-Image Turbo',
                                      bestFor: 'Fast, crisp photorealism',
                                          defaultAspectRatio: '3:4',
                                              promptHint:
                                                    'Prioritize real camera lenses (35mm, 85mm), natural skin/surface texture, and directional lighting.',
                                                      },
                                                        {
                                                            id: 'chroma',
                                                                label: 'Chroma',
                                                                    bestFor: 'Versatile styles, characters & illustration',
                                                                        defaultAspectRatio: '2:3',
                                                                            promptHint:
                                                                                  'Describe subject anatomy, pose mechanics, color palette, and medium clearly without bloated tag spam.',
                                                                                    },
                                                                                      {
                                                                                          id: 'lustify-sdxl',
                                                                                              label: 'Lustify',
                                                                                                  bestFor: 'Photorealistic portraits & lighting',
                                                                                                      defaultAspectRatio: '3:4',
                                                                                                          promptHint:
                                                                                                                'Focus on natural lighting, candid framing, realistic environment details, and clear subject posture.',
                                                                                                                  },
                                                                                                                    {
                                                                                                                        id: 'wai-ani',
                                                                                                                            label: 'Anime (WAI)',
                                                                                                                                bestFor: 'Anime & stylized illustration',
                                                                                                                                    defaultAspectRatio: '2:3',
                                                                                                                                        promptHint:
                                                                                                                                              'Lead with character design, expression, outfit details, and clean scene composition.',
                                                                                                                                                },
                                                                                                                                                ];

                                                                                                                                                export const FRAMING_OPTIONS = [
                                                                                                                                                  'Extreme Close-Up',
                                                                                                                                                    'Close-Up Portrait (85mm)',
                                                                                                                                                      'Medium Shot (50mm)',
                                                                                                                                                        'Wide Environmental (24mm)',
                                                                                                                                                          'Low Angle',
                                                                                                                                                            'Over-the-Shoulder',
                                                                                                                                                            ] as const;

                                                                                                                                                            export const LIGHTING_OPTIONS = [
                                                                                                                                                              'Soft Overcast Daylight',
                                                                                                                                                                'Golden Hour Side Light',
                                                                                                                                                                  'Moody Window Light',
                                                                                                                                                                    'Harsh Noon Sun',
                                                                                                                                                                      'Warm Practical Indoor Bulbs',
                                                                                                                                                                        'Neon Street Reflections',
                                                                                                                                                                        ] as const;

                                                                                                                                                                        export const STYLE_TAGS = [
                                                                                                                                                                          'Photorealistic',
                                                                                                                                                                            'Editorial Portrait',
                                                                                                                                                                              'Documentary Candid',
                                                                                                                                                                                'Concept Art',
                                                                                                                                                                                  'Clean Studio',
                                                                                                                                                                                    'Moody Contrast',
                                                                                                                                                                                      'Minimalist',
                                                                                                                                                                                        'Rich Textures',
                                                                                                                                                                                        ] as const;
                                                                                                                                                                                        