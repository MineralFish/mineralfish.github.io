import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
		version: "1.2.5"
	}
});

export default app;
