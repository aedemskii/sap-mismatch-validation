import React, { useEffect } from 'react'
import { useAppContext, APP_STATE, APP_REDUCER_ACTION } from '../hooks/useAppContext';
import LoadingSpinner from './LoadingSpinner'
import Intro from './Intro'
import Slider from './Slider'

const App: React.FC = () => {
	const { state, dispatch } = useAppContext();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
		  if (e.key === 'Enter') {
			document.removeEventListener('keydown', handleKeyDown);
			dispatch({ type: APP_REDUCER_ACTION.SHOW_INTRO });
		  }
		};

		const handleLoad = () => {
		  document.addEventListener('keydown', handleKeyDown);
		};

		window.addEventListener('load', handleLoad);

		return () => {
		  // снимаем оба обработчика при размонтировании
		  window.removeEventListener('load', handleLoad);
		  document.removeEventListener('keydown', handleKeyDown);
		};
	  }, [dispatch]);

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
