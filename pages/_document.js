import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{process.env.NODE_ENV === 'production' && (
						<script async data-api="/_hive" src="/bee.js"></script>
					)}
				</body>
			</Html>
		)
	}
}
