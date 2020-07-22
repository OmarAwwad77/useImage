import React from 'react';
import { useImage } from './hooks/useImage';
import './App.css';

const imageUrl = 'https://picsum.photos/id/237/1000/500';

function App() {
	const { hasLoaded, hasError, hasStartedInitialFetch } = useImage(imageUrl);

	return (
		<div className='App'>
			<header className='App-header'>
				{!hasLoaded && <span>Loading..........</span>}
				{hasLoaded && (
					<div
						style={{ height: 500, width: 1000, background: `url(${imageUrl})` }}
					/>
				)}
			</header>
		</div>
	);
}

export default App;
