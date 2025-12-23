/**
 * Simple hello world function
 * Returns a greeting message
 */
export function helloWorld(name?: string): string {
  return name ? `Hello, ${name}!` : 'Hello, World!';
}
