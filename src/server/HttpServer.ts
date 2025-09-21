// src/server/HttpServer.ts

import http from "node:http";
import { handleRequest } from "../controller/RequestHandler.ts";

/**
 * Starts the HTTP server on the specified port.
 * @param port The port number to listen on.
 */
export function startServer(port: number) {
	const server = http.createServer(handleRequest);

	server.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}
