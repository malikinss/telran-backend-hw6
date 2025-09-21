// src/utils/parseData.ts

import type http from "node:http";
import Validator from "./Validator.ts";
import { type CalculationData } from "../service/Calculator.ts";

/**
 * Parses and validates incoming request data.
 * @param req The HTTP request object.
 * @returns A promise that resolves to the validated calculation data.
 * @throws Will throw an error if the data is invalid or cannot be parsed.
 */
async function parseData(req: http.IncomingMessage): Promise<CalculationData> {
	let data = "";
	for await (let chunk of req) {
		data += chunk;
	}
	const parsed = JSON.parse(data);
	Validator.validate(parsed);
	return parsed as CalculationData;
}

export default parseData;
