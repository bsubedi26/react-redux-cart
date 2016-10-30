export function showMessage(message) {
    console.log('show message action triggered');
    return {
        type: 'SHOW',
        message
    }
}