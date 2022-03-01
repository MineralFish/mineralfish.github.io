import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
		version: "1.1.8"
	}
});

export default app;
