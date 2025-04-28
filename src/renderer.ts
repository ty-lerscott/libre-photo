// This is where you can add your frontend logic
console.log('Renderer process started');

// Example: Add a click handler to the app div
document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    // inject react app here

    if (appDiv) {

        console.log('App div loaded');
        appDiv.addEventListener('click', () => {
            console.log('App div clicked');
        });
    }
}); 