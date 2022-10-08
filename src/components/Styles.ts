import styled from 'styled-components';
import GitHubButton from 'react-github-btn';

export const StyledMorseTranslator = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	text-align: left;

	span:nth-child(n + 3) {
		width: 100%;
	}
`;

export const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.25rem;
	user-select: none;
`;

export const StyledGitHubButton = styled(GitHubButton)`
	margin-bottom: 3rem;
`;

export const StyledInstrunctionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	width: 100%;
	padding: 1rem;
`;

export const StyledAlphabetWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 0.5rem;
	padding: 0.5rem 0;
	text-align: left;
`;
