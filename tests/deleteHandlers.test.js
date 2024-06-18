// eslint-disable-next-line no-undef
const config = require('../config');

test('Kit 7 should be deleted - Status Code Check', async () => {
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        const actualStatusCode = deleteresponse.status;
        expect(actualStatusCode).toBe(200);
    } catch (error) {
        console.error(error);
    }
    
    const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
    expect(fetchDeletedResponse.status).toBe(404);
});

test('Kit 7 should be deleted - Response Body Check', async () => {
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        const actualStatusCode = deleteresponse.status;
        const actualResponseBody = await deleteresponse.json(); // Parse the response body
        expect(actualStatusCode).toBe(200);
        // Assuming the response body should contain a success message or similar structure
        expect(actualResponseBody).toEqual({ message: 'Kit successfully deleted' });
    } catch (error) {
        console.error(error);
    }

    const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
    expect(fetchDeletedResponse.status).toBe(404);
});