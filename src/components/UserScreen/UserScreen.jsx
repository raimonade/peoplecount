import React, { useState } from 'react';
import s from './UserScreen.module.scss';
import People from 'assets/svgs/users.svg';
import Hexagon from 'assets/svgs/hexagon.svg';
import Pedestrian from 'assets/svgs/walking.svg';
import Hand from 'assets/svgs/hand-paper.svg';

const UserScreen = ({ limit, entered, exited, inside }) => {
	const [allowed, setallowed] = useState(entered < limit);
	console.log('limit', limit, 'entered', entered, 'exited', exited, 'inside', inside);
	return (
		<div className={s.Screen} allowed={allowed.toString()}>
			<div className={s.PeopleCount}>
				<People />
				<span>
					{entered} / {limit}
				</span>
			</div>
			<div className={s.Body}>
				<div className={s.Icon}>
					{allowed ? (
						<Pedestrian />
					) : (
						<>
							<Hexagon /> <Hand className={s.Hand} />
						</>
					)}
				</div>
				<h1>
					{allowed
						? 'IEEJA ATĻAUTA'
						: (!allowed && entered && exited && inside)
						? 'IEEJA AIZLIEGTA'
						: 'KĻŪME IEGŪSTOT DATUS'}{' '}
				</h1>
			</div>
		</div>
	);
};

export default UserScreen;
