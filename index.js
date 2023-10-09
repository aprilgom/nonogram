import { Application, autoDetectRenderer } from './pixi.js';

const app = new Application();

(async () => {
    await app.init({
        background: '#1099bb',
        resizeTo: window,
    });
})

document.body.appendChild(app.view);