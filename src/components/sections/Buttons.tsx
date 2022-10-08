import { useContext } from 'react';
import GitHubButton from 'react-github-btn';

// CONTEXT
import { ContextData } from 'components/hooks/useMorseTranslator';

// STYLES
import { StyledButton } from 'components/sections/Styles';

export const Buttons = () => {
	const { onButtonMouseDown, onButtonMouseUp, resetAll } = useContext(ContextData);

	const buttonTitle = `Kliknij aby napisać .
Przytrzymaj aby napisać -`;

	return (
		<>
			<GitHubButton href="https://github.com/Pawel-dev5/morse-code-translator">Github</GitHubButton>

			<StyledButton
				type="button"
				autoFocus
				title={buttonTitle}
				aria-label={buttonTitle}
				onMouseDown={onButtonMouseDown}
				onMouseUp={onButtonMouseUp}
				onKeyDown={(e) => e.code === 'Space' && onButtonMouseDown(e)}
				onKeyUp={(e) => e.code === 'Space' && onButtonMouseUp(e)}
				tabIndex={0}
				customPadding="3rem"
			>
				Kliknij lub przytrzymaj
			</StyledButton>

			<StyledButton type="button" title="Reset" aria-label="Reset" onClick={() => resetAll()}>
				Reset
			</StyledButton>
		</>
	);
};
