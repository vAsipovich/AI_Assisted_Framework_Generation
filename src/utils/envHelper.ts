// path: src/utils/envHelper.ts
import dotenv from 'dotenv';

let isEnvLoaded = false;

/**
 * Describes the environment values used by the test framework.
 */
export interface EnvConfig {
  baseUrl: string;
  headless: boolean;
  defaultTimeoutMs: number;
  actionTimeoutMs: number;
}

/**
 * Loads environment variables from the local .env file once per process.
 */
export function loadEnv(): void {
  if (isEnvLoaded) {
    return;
  }

  dotenv.config();
  isEnvLoaded = true;
}

/**
 * Returns a required environment variable and throws when it is missing.
 *
 * @param name The environment variable name.
 */
export function getRequiredEnv(name: string): string {
  loadEnv();

  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

/**
 * Returns a boolean environment variable or a default value.
 *
 * @param name The environment variable name.
 * @param defaultValue The fallback value when the variable is not defined.
 */
export function getBooleanEnv(name: string, defaultValue: boolean): boolean {
  loadEnv();

  const value = process.env[name]?.trim().toLowerCase();

  if (!value) {
    return defaultValue;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  throw new Error(`Invalid boolean value for ${name}: ${value}`);
}

/**
 * Returns a numeric environment variable or a default value.
 *
 * @param name The environment variable name.
 * @param defaultValue The fallback value when the variable is not defined.
 */
export function getNumberEnv(name: string, defaultValue: number): number {
  loadEnv();

  const value = process.env[name]?.trim();

  if (!value) {
    return defaultValue;
  }

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`Invalid numeric value for ${name}: ${value}`);
  }

  return parsedValue;
}

/**
 * Returns the resolved framework environment configuration.
 */
export function getEnvConfig(): EnvConfig {
  return {
    baseUrl: getRequiredEnv('BASE_URL'),
    headless: getBooleanEnv('HEADLESS', true),
    defaultTimeoutMs: getNumberEnv('DEFAULT_TIMEOUT_MS', 30000),
    actionTimeoutMs: getNumberEnv('ACTION_TIMEOUT_MS', 10000)
  };
}