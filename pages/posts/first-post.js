import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function FirstPost() {
	return (
		<>
			<Layout >
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<h1>First Post</h1>
				<h2>
					<Link href="/">Back to Home</Link>
				</h2>
			</Layout>
		</>
	);
}
