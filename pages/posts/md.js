import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function Md() {
	return (
		<>
			<Layout>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<h1>❤️</h1>
			</Layout>
		</>
	);
}
