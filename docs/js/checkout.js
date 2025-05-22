async function simulatePayment(orderData) {
const response = await fetch('https://TU_ID_MOCKAPI.mockapi.io/process-payment', {
    method: 'POST',
    headers: {
'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
});

return await response.json();
}