
import React, { useEffect, useRef } from 'react'
import type { SlideProps } from '../../assets/utils/types'
import MiniSlider from './MiniSlider';

const Slide1: React.FC<SlideProps> = ({ isActive }) => {
	const slideRef = useRef<HTMLDivElement>(null);
	const isShown = useRef(false);

	useEffect(() => {
		const slideElement = slideRef.current;
		if (!slideElement) {
			return;
		}
		if (isActive && !isShown.current) {
			isShown.current = true;
			slideElement.classList.add('on-show');
		}
	}, [isActive]);

	return (
		<div
			ref={slideRef}
			className={`slide slide--2${isShown.current ? ' on-show' : ''}${isActive ? ' is-active' : ''}`}
			data-slide='2'
			>
			<div className='slide__background'>
				<img src='src/assets/images/slide2-bg2.png' alt='' />
			</div>

			<div className='slide__content'>
				<div className='slide__title slide-in-on-show'>
					Edge-Szenario
				</div>
				<div className='slide__subtitle slide-in-on-show'>
					Edge (On-Prem)&nbsp;— Gleiches Ergebnis, strikte Datenbarrieren
				</div>
				<div className='slide__text slide-in-on-show'>
					Die gesamte Verarbeitung läuft innerhalb des Gerresheimer-Perimeters: Postgres&nbsp;+&nbsp;MinIO&nbsp;+&nbsp;schnelle
					spaltenorientierte Verarbeitung. Die Matching-Logik ist identisch zur Cloud, daher
					sind Schulung und Ergebnisse gleich. Keine Dateien oder Prompts verlassen das Netzwerk;
					EZB-FX-Caches aktualisieren sich nach Ihrem Zeitplan. Optional fasst ein lokales LLM
					Befunde zusammen&nbsp;— alle Entscheidungen bleiben menschlich und werden auditiert.
				</div>
			</div>

			<MiniSlider
				slideIndex={2}
				keyPoints={[
					'<strong>Keine SAP-Änderungen erforderlich</strong>&nbsp;— Funktioniert auf Basis von Standard-Exports; OData-Integration bei Bedarf später optional.',
					'<strong>Von Grund auf erklärbar</strong>&nbsp;— Jeder Vorschlag zeigt Begründungscodes und wird in ein unveränderliches Audit-Log geschrieben.',
					'<strong>Schneller Rollout</strong>&nbsp;— Entra ID&nbsp;SSO, Private Endpoints, Services mit Datenhaltung in der&nbsp;EU.'
				]}
			/>
		</div>
	)
}

export default Slide1
