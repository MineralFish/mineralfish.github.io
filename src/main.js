import "./app.css"
import App from "./App.svelte"

const app = new App({
	target: document.getElementById("app"),
	props: {
		version: "1.4.1"
	}
})

export default app
