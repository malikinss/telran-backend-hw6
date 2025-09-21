// src/utils/sendResponse.ts

import type http from "node:http";

/**
 * Sends a JSON response.
 * @param res The HTTP response object.
 * @param statusCode The HTTP status code to send.
 * @param result The result data to include in the response.
 */
function sendResponse(
	res: http.ServerResponse,
	statusCode: number,
	result: number | string
) {
	res.statusCode = statusCode;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ result }));
}

export { sendResponse };
