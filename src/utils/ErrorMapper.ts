// src/utils/ErrorMapper.ts

import {
	WrongOperationError,
	DivisionByZeroError,
} from "../service/Calculator.ts";

/**
 * Maps specific error types to corresponding HTTP status codes.
 * @param error The error to map.
 * @returns The corresponding HTTP status code.
 */
export function mapErrorToStatus(error: unknown): number {
	if (error instanceof WrongOperationError) return 404;
	if (error instanceof DivisionByZeroError) return 422;
	if (error instanceof SyntaxError) return 400; // invalid JSON
	return 500; // unexpected error
}
