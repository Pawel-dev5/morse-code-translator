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

	span {
		width: 100%;
	}
`;

export const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.25rem;
`;
