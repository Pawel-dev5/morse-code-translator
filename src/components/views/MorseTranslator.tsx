// HOOKS
import { useMorseTranslator } from 'components/hooks/useMorseTranslator';

// STYLES
import {
	StyledMorseTranslator,
	StyledButton,
	StyledGitHubButton,
	StyledInstrunctionWrapper,
	StyledAlphabetWrapper,
} from 'components/Styles';

// CONSTANS
import { morseTable } from 'components/constans/morseTable';

export const MorseTranslator = () => {
	const { morseText, translatedText, onButtonMouseDown, onButtonMouseUp, resetAll } = useMorseTranslator();
	const buttonTitle = `Kliknij aby napisać .
Przytrzymaj aby napisać -`;

	return (
		<StyledMorseTranslator>
			<h1>Morse code translator</h1>
			<StyledGitHubButton href="https://github.com/Pawel-dev5/morse-code-translator">Github</StyledGitHubButton>

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

			<StyledInstrunctionWrapper>
				<h3>Instrukcja:</h3>
				<span>
					Kliknij przycisk aby napisać . <br />
					Przytrzymaj przycisk aby napisać -
				</span>

				<h3>Alfabet</h3>
				{Object.entries(morseTable).map(([key, value]) => (
					<StyledAlphabetWrapper key={key}>
						<span>{value}</span>
						<span>{key}</span>
					</StyledAlphabetWrapper>
				))}
			</StyledInstrunctionWrapper>
		</StyledMorseTranslator>
	);
};
