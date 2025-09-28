
import React, { useEffect, useRef } from 'react';
import { useAppContext, APP_STATE, APP_REDUCER_ACTION } from '../hooks/useAppContext';
import './Intro.css'

const Intro: React.FC = () => {
	const { state, dispatch } = useAppContext();
	const introRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (state.value === APP_STATE.INTRO) {
			introRef.current?.classList.add('on-show');

			setTimeout(() => {
				document.addEventListener('keydown', (e) => {
					if (e.key === 'Enter') {
						dispatch({ type: APP_REDUCER_ACTION.GO_TO_TRANSITION });

						setTimeout(() => {
							dispatch({
								type: APP_REDUCER_ACTION.GO_TO_SLIDE,
								payload: {
									slideIndex: 1
								}
							});
						}, 1000);
					}
				});
			}, 3000);
		}
	}, [state.value, dispatch]);

	const handleClick = () => {
		dispatch({ type: APP_REDUCER_ACTION.GO_TO_TRANSITION });

		setTimeout(() => {
			dispatch({
				type: APP_REDUCER_ACTION.GO_TO_SLIDE,
				payload: {
					slideIndex: 1
				}
			});
		}, 1000);
	}

	return (
		<div
			ref={introRef}
			className='intro'
			>
			<div className='intro__background'>
				<img src='src/assets/images/intro-bg.png' />
			</div>

			<div className='intro__content'>
				<div>
					<div className='intro__title slide-in-on-show'>Finde die Abweichung.<br/>Korrigiere die Bücher.</div>

					<div className='intro__slogan'>
						<span className='intro__line--1 slide-in-on-show'>Das Modell schlägt vor; </span>
						<span className='intro__line--2 slide-in-on-show'>der Mensch entscheidet. </span>
						<div className='intro__line--3 slide-in-on-show'>Vollständig auditierbar.</div>
					</div>
				</div>

				<div className='intro__subtitle slide-in-on-show'>Übereinstimmungen mit gleichem Datum und gleichem Betrag in SAP-Exports — nachvollziehbare Vorschläge, Verarbeitung ausschließlich in der EU.</div>

				<div className='intro__button-wrapper slide-in-on-show'>
					<div
						onClick={handleClick}
						className='intro__button'
						>
						Jetzt starten
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
