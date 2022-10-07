// HOOKS
import { useMorseTranslator } from 'components/hooks/useMorseTranslator';

// STYLES
import { StyledMorseTranslator } from 'components/Styles';

export const MorseTranslator = () => {
	const { morseText, translatedText, onButtonMouseDown, onButtonMouseUp, resetAll } = useMorseTranslator();
	const buttonTitle = `Kliknij aby napisać .
Przytrzymaj aby napisać -`;

	return (
		<StyledMorseTranslator>
			<button
				type="button"
				title={buttonTitle}
				aria-label={buttonTitle}
				onMouseDown={onButtonMouseDown}
				onMouseUp={onButtonMouseUp}
			>
				Kliknij lub przytrzymaj
			</button>
			<button type="button" title="Reset" aria-label="Reset" onClick={() => resetAll()}>
				Reset
			</button>

			<span>Morse: {morseText}</span>
			<span>Text: {translatedText}</span>
		</StyledMorseTranslator>
	);
};
