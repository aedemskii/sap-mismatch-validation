import React, { useEffect } from 'react'
import { useAppContext, APP_STATE, APP_REDUCER_ACTION } from '../hooks/useAppContext';
import LoadingSpinner from './LoadingSpinner'
import Intro from './Intro'
import Slider from './Slider'

const App: React.FC = () => {
	const { state, dispatch } = useAppContext();

	useEffect(() => {
		window.addEventListener('load', () => {
			dispatch({ type: APP_REDUCER_ACTION.SHOW_INTRO });
		});
	}, )

	return (
		<div
			className={`app${state.value === APP_STATE.LOADING ? ' on-load' : ''}${state.value === APP_STATE.INTRO ? ' on-intro' : ''}`}
			>
			<LoadingSpinner />
			<Intro />
			<Slider />
		</div>
	)
}

export default App
