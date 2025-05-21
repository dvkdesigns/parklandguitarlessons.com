declare module 'tone' {
  export const MetalSynth: any;
  export const Synth: any;
  export const Sampler: any;
  export const Transport: any;
  export const start: () => Promise<void>;
  export const context: any;
  export const now: () => number;
}
