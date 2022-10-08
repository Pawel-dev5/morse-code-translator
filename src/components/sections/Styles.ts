import styled, { css } from 'styled-components';

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

export const StyledButton = styled.button<{ customPadding?: string }>`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.25rem;
	user-select: none;

	${({ customPadding }) =>
		customPadding &&
		css`
			margin-top: ${customPadding};
		`}

	:hover, :active {
		background: grey;
	}
`;
