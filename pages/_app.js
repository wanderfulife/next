// `pages/_app.js`
import "../styles/global.css";

export function reportWebVitals(metric) {
	console.log(metric);
}

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
