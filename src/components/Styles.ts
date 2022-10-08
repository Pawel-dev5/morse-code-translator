import styled from 'styled-components';

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
