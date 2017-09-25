import React from 'react';
import LeftIcon from './LeftIcon';

export default function RightIcon({size}) {
	return (
		<div style={{transform: 'rotate(180deg)'}}>
			<LeftIcon size={size} />
		</div>
	)
}
