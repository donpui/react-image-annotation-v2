import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const sourceTypes = resolve(projectRoot, 'package.d.ts');
const distTypes = resolve(projectRoot, 'dist', 'index.d.ts');

await mkdir(dirname(distTypes), { recursive: true });
await copyFile(sourceTypes, distTypes);
