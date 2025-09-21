# Homework 6: Calculator on `HTTP` Server

## Task Definition

```
Protocol:

* JSON request containing:

  * operation: "\*", "-", "+", "/" (string)
  * op1: first operand (number)
  * op2: second operand (number)

Controller (index.ts) responsibilities:

* Receive JSON request
* Validate data structure
* On invalid data: respond 400 with message
* On valid data: call service "calculate" with {operation, op1, op2}
* Send back appropriate response

Service responsibilities:

* Implement "calculate" method
* Perform requested operation
* Throw exception if operation invalid
```

## Description 📝

A TypeScript-based Node.js HTTP server that performs basic arithmetic operations via JSON requests.  
It validates incoming requests, executes calculations, and returns structured JSON responses.

Key characteristics:

-   Supports addition, subtraction, multiplication, and division
-   Validates request payloads for type correctness
-   Handles errors gracefully with appropriate HTTP status codes
-   Modular design with separate controller, service, and utility modules

## Purpose 🎯

-   Learn to build **HTTP servers** in Node.js without external frameworks
-   Practice **TypeScript typing** and interface design
-   Implement **robust input validation** and error handling
-   Explore **modular project structure** separating controller, service, and utils

## Features ✨

-   ✅ JSON request/response protocol
-   ✅ Supports operations: add, sub, mul, div
-   ✅ Detects and handles division by zero
-   ✅ Returns meaningful HTTP status codes:
    -   400 → invalid JSON or request structure
    -   422 → division by zero
    -   404 → unknown operation
    -   500 → unexpected errors
-   ✅ Modular and reusable code structure
-   ✅ TypeScript interfaces ensure compile-time safety

## How It Works 🔍

1. **Server** (`HttpServer.ts`) listens on a configurable port
2. Incoming request handled by **RequestHandler**:
    - Parses JSON body with `parseData`
    - Validates fields using `Validator`
    - Calls `Calculator.calculate(data)`
    - Maps errors to HTTP status via `ErrorMapper`
    - Sends response using `sendResponse`
3. **Calculator** performs the arithmetic operation:
    - Throws `WrongOperationError` if unknown operation
    - Throws `DivisionByZeroError` for division by zero
4. Response format: `{ result: number | string }`

## Output 📜

Example valid request:

```json
POST /calculate
{
  "operation": "add",
  "op1": 5,
  "op2": 3
}
```

Response:

```json
{
	"result": 8
}
```

Example error response (division by zero):

```json
{
	"result": "Division by zero"
}
```

## Usage 📦

```bash
git clone [repository url]
cd [project folder]
npm install
ts-node index.ts
```

Then send JSON requests to `http://localhost:3000` using `curl` or Postman.

## Usage Examples 🚀

```bash
# Addition
curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"operation":"add","op1":5,"op2":3}'

# Division by zero
curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"operation":"div","op1":5,"op2":0}'
```

## Project Structure 🗂

-   **index.ts** – Entry point, starts HTTP server
-   **src/server/HttpServer.ts** – HTTP server initialization
-   **src/controller/RequestHandler.ts** – Handles incoming requests
-   **src/service/Calculator.ts** – Performs arithmetic operations
-   **src/utils/parseData.ts** – Parses and validates request JSON
-   **src/utils/Validator.ts** – Validates operation and operands
-   **src/utils/ErrorMapper.ts** – Maps errors to HTTP status codes
-   **src/utils/sendResponse.ts** – Sends JSON responses
-   **package.json** – Node.js metadata and dependencies
-   **tsconfig.json** – TypeScript compiler configuration

## Dependencies ✅

-   **TypeScript** 5.x
-   **Node.js** 18+
-   Built-in modules: `http`

## License 📄

MIT

## Conclusion 🧮

This project allowed me to:

-   Build a **TypeScript HTTP server** from scratch
-   Implement **robust input validation** and error handling
-   Separate concerns with **controller, service, and utility modules**
-   Understand proper **error-to-status code mapping** in HTTP APIs

---

Made with ❤️ and `TypeScript` by Sam-Shepsl Malikin
