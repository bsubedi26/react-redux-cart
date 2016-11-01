export function showMessage(message) {
    // console.log('show message action triggered');
    return {
        type: 'SHOW',
        message
    }
}

export function removeMessages() {
    // console.log('remove message action triggered');
    return {
        type: 'REMOVE'
    }
}