declare module 'sweepdir' {
    /**
     * Performs a glob search and returns the matched files.
     *
     * @param patterns - A glob pattern or array of patterns to match.
     * @param options - Optional fast-glob options.
     * @returns A promise that resolves to an array of matched file paths.
     */
    export function glob(
        patterns: string | string[],
        options?: Record<string, any>,
    ): Promise<string[]>;

    /**
     * Performs a directory sweep, returning full file paths within the provided directory.
     *
     * @param dir - The base directory to scan.
     * @param patterns - A glob pattern or array of patterns.
     * @param options - Optional fast-glob options.
     * @returns A promise that resolves to an array of full file paths.
     */
    export function sweepDir(
        dir: string,
        patterns?: string | string[],
        options?: Record<string, any>,
    ): Promise<string[]>;

    const _default: typeof sweepDir;
    export default _default;
}
