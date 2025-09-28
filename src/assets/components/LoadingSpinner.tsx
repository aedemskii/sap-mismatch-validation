
import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
	return (
		<div className='loading-spinner'>
			<div className='loading-spinner__text'>Drücken Sie die Eingabetaste, um fortzufahren</div>
		</div>
	)
}

export default LoadingSpinner
