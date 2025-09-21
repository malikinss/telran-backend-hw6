// src/controller/RequestHandler.ts

import type http from "node:http";
import { Calculator } from "../service/Calculator.ts";
import { sendResponse } from "../utils/sendResponse.ts";
import { mapErrorToStatus } from "../utils/ErrorMapper.ts";
import parseData from "../utils/parseData.ts";

/** Handles incoming HTTP requests.
 * @param req The HTTP request object.
 * @param res The HTTP response object.
 * @returns A promise that resolves when the response is sent.
 * @throws Will throw an error if request handling fails.
 */
export async function handleRequest(
	req: http.IncomingMessage,
	res: http.ServerResponse
) {
	let result: number | string;
	let statusCode: number = 200;

	try {
		const data = await parseData(req);
		result = Calculator.calculate(data);
	} catch (error) {
		statusCode = mapErrorToStatus(error);
		result = error instanceof Error ? error.message : "Unknown error";
	}

	sendResponse(res, statusCode, result);
}
