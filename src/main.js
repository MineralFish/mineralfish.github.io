import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        version: "1.3.0"
    }
});

export default app;