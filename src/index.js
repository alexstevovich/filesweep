/* *******************************************************
 * sweepdir
 *
 * @license
 *
 * Apache-2.0
 *
 * Copyright 2016-2025 Alex Stevovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @meta
 *
 * package_name: sweepdir
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-15T02:00:34.327Z
 * certified_version: 1.0.0
 * file_uuid: b5117350-6317-4730-a01b-bd604126e859
 * file_size: 1626 bytes
 * file_hash: 82ddfa581810e9a9762d28e4ed551d01054d8df62b27194e67529fe6aea15ca3
 * mast_hash: 8d44d88b38be12f1d6afa0335a6bb15cec6cc5abb079034d7584307318db6120
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import path from 'path';
import fg from 'fast-glob';

export async function sweepDir(dir, patterns = '*', options = {}) {
    const { ...restOptions } = options;

    const files = await fg(patterns, {
        cwd: dir,
        absolute: false,
        ...restOptions,
    });

    return files.map((file) => path.join(dir, file));
}

export default sweepDir;
