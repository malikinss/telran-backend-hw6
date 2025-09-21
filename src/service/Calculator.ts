// src/service/Calculator.ts

/** Supported arithmetic operations. */
type Operation = "add" | "sub" | "mul" | "div";

/** Interface representing the structure of calculation data. */
interface CalculationData {
	operation: Operation;
	op1: number;
	op2: number;
}

/** Error thrown when an invalid operation is requested. */
class WrongOperationError extends Error {
	constructor(operation: string) {
		super(`Invalid operation: "${operation}"`);
		this.name = "WrongOperationError";
	}
}

/** Error thrown when attempting to divide by zero. */
class DivisionByZeroError extends Error {
	constructor() {
		super("Division by zero");
		this.name = "DivisionByZeroError";
	}
}

class Calculator {
	/** Mapping of operations to their corresponding functions. */
	private static readonly operations: Record<
		Operation,
		(a: number, b: number) => number
	> = {
		add: (a, b) => a + b,
		sub: (a, b) => a - b,
		mul: (a, b) => a * b,
		div: (a, b) => {
			if (b === 0) throw new DivisionByZeroError();
			return a / b;
		},
	};

	/**
	 * Executes a calculation based on the given data.
	 * @param data The calculation data containing the operation and operands.
	 * @returns The result of the calculation.
	 * @throws {WrongOperationError} If the operation is not supported.
	 * @throws {DivisionByZeroError} If division by zero is attempted.
	 * @throws {Error} For any other errors.
	 * @example
	 * const result = Calculator.calculate({ operation: "add", op1: 5, op2: 3 });
	 * console.log(result); // Outputs: 8
	 */
	static calculate(data: CalculationData): number {
		if (!(data.operation in this.operations)) {
			throw new WrongOperationError(data.operation);
		}
		return this.operations[data.operation](data.op1, data.op2);
	}
}

export {
	WrongOperationError,
	DivisionByZeroError,
	Calculator,
	CalculationData,
};
