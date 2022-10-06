const express = require("express");
const chai = require("chai");
const request = require("supertest");

const app = express();

describe("POST Create User Wallet", () => {
	it("should create wallet for the user", () => {
		request(app)
			.post("http://localhost:9000/.netlify/functions/api/test")
			.expect({
				hello: "hi!"
			});
	});
});
