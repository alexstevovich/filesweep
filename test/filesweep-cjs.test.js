import { describe, it, expect } from 'vitest';
const { sweep } = require('../gen/index.cjs');
const path = require('path');

describe('Core functionality test', async () => {
    it('Should return the expected files', async () => {
        const files = await sweep('./test-dir/');

        // Normalize paths in both expected and actual values
        const expectedFiles = [
            'test-dir/file1',
            'test-dir/file2.more.extensions',
        ].map((p) => path.normalize(p)); // Converts to OS-specific format

        expect(files.map((p) => path.normalize(p))).toEqual(expectedFiles);
    });

    it('Should return the expected recursive files', async () => {
        const files = await sweep('./test-dir/', '**/*');

        // Normalize paths in both expected and actual values
        const expectedFiles = [
            'test-dir/file1',
            'test-dir/file2.more.extensions',
            'test-dir/nested/file.file',
            'test-dir/nested/file4.js',
        ].map((p) => path.normalize(p)); // Converts to OS-specific format

        expect(files.map((p) => path.normalize(p))).toEqual(expectedFiles);
    });

    it('Should return the expected filtered recursive files', async () => {
        const files = await sweep('./test-dir/', '**/*.file');

        // Normalize paths in both expected and actual values
        const expectedFiles = ['test-dir/nested/file.file'].map((p) =>
            path.normalize(p),
        ); // Converts to OS-specific format

        expect(files.map((p) => path.normalize(p))).toEqual(expectedFiles);
    });
});
