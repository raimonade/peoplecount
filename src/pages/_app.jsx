import '../styles/globals.scss';
import AppWrapper from 'components/AppWrapper/AppWrapper'

function MyApp({ Component, pageProps }) {
	return (
		<div>
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
			<style jsx global>{`
				@font-face {
					font-family: system;
					font-style: normal;
					font-weight: 100;
					src: url('/fonts/Poppins-Thin.ttf') format('truetype');
				}

				@font-face {
					font-family: system;
					font-style: normal;
					font-weight: 300;
					src: url('/fonts/Poppins-Regular.ttf') format('truetype');
				}

				@font-face {
					font-family: system;
					font-style: normal;
					font-weight: 600;
					src: url('/fonts/Poppins-Bold.ttf') format('truetype');
				}
			`}</style>
		</div>
	);
}

export default MyApp;
