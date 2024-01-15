const btnInstall = document.getElementById('buttonInstall');

// This variable is defined and initially set to null.  It will be used to capture the before install prompt event when the window loads the application.
let installPrompt = null;

// Logic for installing the PWA
// When browser loads the application in the window it will detect if it can be installed.
// This event is captured in the installPrompt variable and will be stored for the time when the Install button is clicked to prompt for installation.
// The event's default of allowing the browser to immediately prompt for installation is prevented.
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    console.log(`Before Install Prompt Event: ${e}`);
    installPrompt = e;
    console.log(`***Before Install prompt is: ${installPrompt}***`)
    btnInstall.classList.toggle('hidden', false);
    return installPrompt;
});

// When the install button is clicked the prompt captured previously in the event is presented to the end-user to confirm installation.
// A try catch is used to handle any potential errors during installation.
btnInstall.addEventListener('click', async (e) => {

    if (installPrompt) {
        try {
            const result = await installPrompt.prompt();
            console.log(`Install prompt was: ${result.outcome}`)
            btnInstall.textContent = 'Installed';
        } catch (error) {
            console.error('Error during installation:', error);
        }
    }
});

// Confirmation of the installation is written to the console.
// The installPrompt variable is reset to null.
window.addEventListener('appinstalled', (e) => {
    console.log('The application has successfully been installed on your Desktop!', 'appInstalled', e);
    installPrompt = null;
});

