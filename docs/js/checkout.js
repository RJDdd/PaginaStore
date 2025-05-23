export async function simulatePayment(orderData) {
    console.log("Simulando envío de datos de pago:", orderData);
    return new Promise(resolve => {
        setTimeout(() => resolve({ success: true }), 500);
    });
}
