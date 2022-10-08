import GitHubButton from 'react-github-btn';

// HOOKS
import { useMorseTranslator } from 'components/hooks/useMorseTranslator';

// STYLES
import { StyledMorseTranslator, StyledButton } from 'components/Styles';

export const MorseTranslator = () => {
	const { morseText, translatedText, onButtonMouseDown, onButtonMouseUp, resetAll } = useMorseTranslator();
	const buttonTitle = `Kliknij aby napisać .
Przytrzymaj aby napisać -`;

	return (
		<StyledMorseTranslator>
			<h1>Morse code translator</h1>
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
			>
				Kliknij lub przytrzymaj
			</StyledButton>

			<StyledButton type="button" title="Reset" aria-label="Reset" onClick={() => resetAll()}>
				Reset
			</StyledButton>

			<span>Morse: {morseText}</span>
			<span>Text: {translatedText}</span>
		</StyledMorseTranslator>
	);
};
