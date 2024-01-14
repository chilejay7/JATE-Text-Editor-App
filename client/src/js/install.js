const btnInstall = document.getElementById('buttonInstall');
let installPrompt = null;

// // Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    console.log(`Before Install Prompt Event: ${e}`);
    installPrompt = e;
    console.log(`***Before Install prompt is: ${installPrompt}***`)
    btnInstall.classList.toggle('hidden', false);
    return installPrompt;

    // window.deferredPrompt = e;
    // btnInstall.classList.toggle('hidden', false);
});

// // TODO: Implement a click event handler on the `butInstall` element
btnInstall.addEventListener('click', async (e) => {

    // const installPrompt = window.deferredPrompt;
    // console.log(`Install prompt is: ${window.deferredPrompt}`)

    if (installPrompt) {
        try {
            const result = await installPrompt.prompt();
            console.log(`Install prompt was: ${result.outcome}`)
            installPrompt = null;
            btnInstall.classList.toggle('hidden', true);
            btnInstall.textContent = 'Installed';
        } catch (error) {
            console.error('Error during installation:', error);
        }
    }

    // if (!installPrompt) {
    //     return;
    //    }
     
    //   installPrompt.prompt();
       
    //    window.deferredPrompt = null;
       
    //    btnInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (e) => {
    console.log('The application has successfully been installed on your Desktop!', 'appInstalled', e);
    window.deferredPrompt = null;
});
