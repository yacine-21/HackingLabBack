const { expect } = require("chai");
const chai = require("chai");
const request = require("supertest");
const app = require("../index");

describe("POST Create User Wallet", () => {
	it("should create wallet for the user", async () => {
		await request(app)
			.get("/get")
			.expect(200)
			.then(res => {
				expect(res.body).to.length.greaterThan(4).instanceof(Array);
			});
	});
});
