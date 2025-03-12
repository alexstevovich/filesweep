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
 * file_name: gen/index.cjs
 * purpose: Core functionality and exports combined.
 *  
 * @system
 *
 * generated_on: 2025-03-12T19:57:45.577Z
 * certified_version: 1.0.0
 * file_uuid: b5117350-6317-4730-a01b-bd604126e859
 * file_size: 3457 bytes
 * file_hash: 87e8f6935a530a32682751142ac0b1c543b64ae3bc3392a7637fc7743bc21e82
 * mast_hash: 7b56f03bafa02594c806b48a3114faee05abf5e48ebc0e39f56f1331625b8fee
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  glob: () => glob,
  sweep: () => sweep
});
module.exports = __toCommonJS(index_exports);
var import_path = __toESM(require("path"), 1);
var import_fast_glob = __toESM(require("fast-glob"), 1);

async function glob(patterns, options = {}) {
  return (0, import_fast_glob.default)(patterns, options);
}
async function sweep(dir, patterns = "**/*", options = {}) {
  const { ...restOptions } = options;
  const files = await (0, import_fast_glob.default)(patterns, {
    cwd: dir,
    absolute: false,
    ...restOptions
  });
  return files.map((file) => import_path.default.join(dir, file));
}
var index_default = sweep;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  glob,
  sweep
});
