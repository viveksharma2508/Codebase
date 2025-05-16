import fs from 'fs';
import path from 'path';
import config from '../config/config.js';

// Use import.meta.url to get the correct path of the current module
const packageJsonPath = path.resolve(new URL('../../package.json', import.meta.url).pathname.slice(1));

// Read and parse the package.json file
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const swaggerDef = {
	openapi: '3.0.0',
	info: {
		title: 'EdTech API documentation',
		version: packageJson.version,
		license: {
			name: 'MIT',
			url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
		},
	},
	servers: [
		{
			url: `http://localhost:${config.port}/v1`,
		},
	],
};

export default swaggerDef;
