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
			<StyledButton
				type="button"
				title={buttonTitle}
				aria-label={buttonTitle}
				onMouseDown={onButtonMouseDown}
				onMouseUp={onButtonMouseUp}
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
