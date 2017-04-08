export function showMessage(message) {
    // console.log('show message action triggered');
    return {
        type: 'FLASH_MESSAGE_SHOW',
        message
    }
}

export function removeMessages() {
    // console.log('remove message action triggered');
    return {
        type: 'FLASH_MESSAGE_REMOVE'
    }
}