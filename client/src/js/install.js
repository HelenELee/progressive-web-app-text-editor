const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    //butInstall.style.visibility = 'visible';
    // Store the triggered events
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    // event.prompt();
    // butInstall.setAttribute('disabled', true);
    // butInstall.textContent = 'Installed!';
    
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  //butInstall.classList.toggle('hidden', true);
  butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //textHeader.textContent = 'Successfully installed!';
    // Clear prompt
  window.deferredPrompt = null;
    console.log('👍', 'appinstalled', event);
});
