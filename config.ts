export interface ConfigArgs {
  typescript: boolean;
  eslint: boolean;
  tailwind: boolean;
  srcDir: boolean;
  importAlias: string;
  sass: boolean;
  mui: boolean;
  swr: boolean;
  prettier: boolean;
  [key: string]: any;
}

export const DEFAULT_CONFIG: ConfigArgs = {
  typescript: true,
  eslint: true,
  tailwind: false,
  srcDir: false,
  importAlias: "@/*",
  sass: true,
  mui: true,
  swr: true,
  prettier: true,
};
