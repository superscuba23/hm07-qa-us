// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productList": [
		{
			"id": 5,
			"quantity": 2
		}
	]
};

// Test to check the response status code
test('Should return 200 status code when updating the product', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// Test to check the response body contains the expected data
test('Response body should reflect the updated product', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Assuming the response body should reflect the updated product details
	const expectedResponseBody = {
		message: 'Product updated successfully',
		product: {
			id: 5,
			quantity: 2
		}
	};
	expect(actualResponseBody).toEqual(expectedResponseBody);
});
