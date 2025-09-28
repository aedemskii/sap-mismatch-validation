
import React, { useEffect, useRef } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
	const { dispatch } = useAppContext();
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener('load', () => {
			if (textRef.current) {
				textRef.current.classList.add('is-visible');
			}
		});
	}, [dispatch])

	return (
		<div className='loading-spinner'>
			<div ref={textRef} className='loading-spinner__text'>Drücken Sie die Eingabetaste, um fortzufahren</div>
		</div>
	)
}

export default LoadingSpinner
