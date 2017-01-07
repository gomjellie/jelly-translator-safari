safari.application.addEventListener('message', handleMessage, false);

function handleMessage(msg) {
    if (msg.name === 'getSetting') {
        var setting = safari.extension.settings(msg.message);
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('returnSetting', setting);
    }
}