/* *******************************************************
 * filesweep
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
 * package_name: filesweep
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-12T20:09:58.203Z
 * certified_version: 1.0.0
 * file_uuid: b5117350-6317-4730-a01b-bd604126e859
 * file_size: 1709 bytes
 * file_hash: c4ef159475b72c71705ee64451b325e04fcd751e51d8135246c149e08c3ecf03
 * mast_hash: da4ba2bb160a1db02516c13707144c0098648cfc9cb3777259f7ef2ec773a6ca
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import path from 'path';
import fg from 'fast-glob';

export async function glob(patterns, options = {}) {
    return fg(patterns, options);
}

export async function sweep(dir, patterns = '*', options = {}) {
    const { ...restOptions } = options;

    const files = await fg(patterns, {
        cwd: dir,
        absolute: false,
        ...restOptions,
    });

    return files.map((file) => path.join(dir, file));
}

export default sweep;
