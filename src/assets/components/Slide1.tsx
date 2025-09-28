
import React, { useEffect, useRef } from 'react'
import type { SlideProps } from '../../assets/utils/types'
import MiniSlider from './MiniSlider';

const Slide1: React.FC<SlideProps> = ({ isActive }) => {
	const slideRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const isShown = useRef(false);

	useEffect(() => {
		const slideElement = slideRef.current;
		const videoElement = videoRef.current;
		if (!videoElement || !slideElement) {
			return;
		}
		if (isActive && !isShown.current) {
			setTimeout(() => {
				isShown.current = true;
				slideElement.classList.add('on-show');
				// Rewind and play the video when the slide becomes active
				videoElement.playbackRate = 0.7;
				videoElement.currentTime = 0;
				const playPromise = videoElement.play();
				if (playPromise !== undefined) {
					playPromise.catch(error => {
						// Ignore the AbortError which is thrown when a play() request
						// is interrupted by a pause() call. This is expected in a slider.
						if (error.name !== 'AbortError') {
							console.error('Video play failed:', error);
						}
					});
				}
			}, 200)
		}

		return () => {
			if (videoElement) {
				videoElement.pause();
			}
		}
	}, [isActive]);

	return (
		<div
			ref={slideRef}
			className={`slide slide--1${isShown.current ? ' on-show' : ''}${isActive ? ' is-active' : ''}`}
			data-slide='1'
			>
			<div className='slide__background'>
				<video
					ref={videoRef}
					muted
					playsInline
					className='slide__video'
				>
					<source src={`${import.meta.env.BASE_URL}/videos/slide1.mp4`} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>

			<div className='slide__content'>
				<div className='slide__title slide-in-on-show'>
				Cloud-Szenario
				</div>
				<div className='slide__subtitle slide-in-on-show'>
					Cloud (EU)&nbsp;— Verwandelt Exporte in&nbsp;Minuten in&nbsp;Korrekturlisten
				</div>
				<div className='slide__text slide-in-on-show'>
					Das Finance-Team lädt Standard-SAP-Exporte (XLSX/CSV) hoch. Das System validiert
					Spalten, normalisiert Daten (Datum, Dezimalstellen, Währung) und bildet anschließend per
					Amount/Date-Blocking Kandidatenpaare. Ein robuster Matcher (Ungarischer Algorithmus +
					Feature-Scoring) schlägt 1:1- (und 1:n-) Zuordnungen mit klaren Begründungscodes
					(Reason Codes) vor. Reviewer akzeptieren im&nbsp;Batch und laden eine Korrekturliste (Fix
					List) für SAP herunter&nbsp;— der gesamte Betrieb erfolgt in&nbsp;EU-Azure mit Private Link, Key Vault
					und Entra ID&nbsp;SSO.
				</div>
			</div>

			<MiniSlider
				slideIndex={1}
				keyPoints={[
					'<strong>Perimeter-First</strong>&nbsp;— Dateien, Logs und Prompts verbleiben in&nbsp;der Gerresheimer-Infrastruktur.',
					'<strong>Bewältigt große Exporte</strong>&nbsp;— Spaltenorientierte ETL und effizientes Blocking halten die Prüfung flüssig und reaktionsschnell.',
					'<strong>Operative Parität</strong>&nbsp;— Gleiche Abgleichsregeln, gleiche Nachweise, gleiche Korrekturliste&nbsp;— nur andere Infrastruktur.'
				]}
			/>
		</div>
	)
}

export default Slide1
