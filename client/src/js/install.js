const btnInstall = document.getElementById('buttonInstall');
let installPrompt = null;

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    console.log(`Before Install Prompt Event: ${e}`);
    installPrompt = e;
    console.log(`***Before Install prompt is: ${installPrompt}***`)
    btnInstall.style.visibility = 'visible';
    return installPrompt;
});

// // TODO: Implement a click event handler on the `butInstall` element
btnInstall.addEventListener('click', async (e) => {

    console.log(`Install prompt is: ${installPrompt}`)

    if (installPrompt) {
        try {
            const result = await installPrompt.prompt();
            console.log(`Install prompt was: ${result.outcome}`)
            installPrompt = null;
            btnInstall.setAttribute('disabled', true);
            btnInstall.textContent = 'Installed';
        } catch (error) {
            console.error('Error during installation:', error);
        }
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (e) => {
    console.log('The application has successfully been installed on your Desktop!', 'appInstalled', e);
});



