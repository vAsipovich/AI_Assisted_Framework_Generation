// path: src/utils/logger.ts
/**
 * Provides lightweight structured logging for test execution.
 */
export class Logger {
  private readonly scope: string;

  /**
   * Creates a logger instance bound to a logical scope.
   *
   * @param scope The logical logger scope.
   */
  public constructor(scope: string) {
    this.scope = scope;
  }

  /**
   * Writes an informational log message.
   *
   * @param message The log message.
   */
  public info(message: string): void {
    this.write('INFO', message);
  }

  /**
   * Writes a debug log message.
   *
   * @param message The log message.
   */
  public debug(message: string): void {
    this.write('DEBUG', message);
  }

  /**
   * Writes a warning log message.
   *
   * @param message The log message.
   */
  public warn(message: string): void {
    this.write('WARN', message);
  }

  /**
   * Writes an error log message.
   *
   * @param message The log message.
   */
  public error(message: string): void {
    this.write('ERROR', message);
  }

  private write(level: string, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] [${this.scope}] ${message}`);
  }
}

/**
 * Creates a logger instance for the provided scope.
 *
 * @param scope The logical logger scope.
 */
export function createLogger(scope: string): Logger {
  return new Logger(scope);
}