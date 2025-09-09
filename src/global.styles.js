import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Open Sans Condensed', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		overflow-x: hidden;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: black;
		-webkit-tap-highlight-color: transparent;
	}

	* {
		box-sizing: border-box;
	}

	/* iOS and mobile specific fixes */
	input, select, textarea, button {
		-webkit-appearance: none;
		-webkit-tap-highlight-color: transparent;
		touch-action: manipulation;
		font-family: inherit;
	}

	/* Prevent iOS zoom on input focus */
	@media screen and (max-width: 768px) {
		input, select, textarea {
			font-size: 16px !important;
		}
	}

	/* Fix iOS button styling */
	button {
		-webkit-appearance: none;
		border-radius: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	/* Prevent horizontal scroll on mobile */
	html, body {
		overflow-x: hidden;
		width: 100%;
	}

	/* iOS Safari specific fixes */
	@supports (-webkit-touch-callout: none) {
		/* iOS Safari */
		body {
			-webkit-overflow-scrolling: touch;
		}
		
		input {
			-webkit-appearance: none;
			border-radius: 0;
		}
	}
`;
