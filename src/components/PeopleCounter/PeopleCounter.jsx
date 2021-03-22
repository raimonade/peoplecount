import React, { useState, useEffect } from 'react';
import s from './PeopleCounter.module.scss';
import * as DigestFetch from 'digest-fetch';
import UserScreen from '../UserScreen/UserScreen';

const url = 'http://192.168.1.108/cgi-bin/videoStatServer.cgi?action=getSummary&channel=1';
const auth = {
	name: 'admin',
	pass: 'Lupata1488*',
};

const exampleData = `summary.Channel=0
summary.EnteredSubtotal.Hour=0
summary.EnteredSubtotal.Today=0
summary.EnteredSubtotal.Total=1
summary.EnteredSubtotal.TotalInTimeSection=0
summary.ExitedSubtotal.Hour=0
summary.ExitedSubtotal.Today=0
summary.ExitedSubtotal.Total=10
summary.ExitedSubtotal.TotalInTimeSection=0
summary.InsideSubtotal.Total=0
summary.RuleName=NumberStat
summary.UTC=1615580510`;

const PeopleCounter = () => {
	const [apiData, setapiData] = useState({});
	const limit = 1;
	async function requestCamera() {
		const client = new DigestFetch(auth.name, auth.pass);
		client.fetch(url, {})
			.then((res) => res.text())
			.then((data) => formatData(data));
	}

	function formatData(data) {
		const regex = /(?:E(?:xitedSubtotal|nteredSubtotal)|InsideSubtotal)\.Total=[0-9]+/g;
		const result = data.match(regex);
		const destObj = {};

		const l = result.length;
		for (let i = 0; i < l; i++) {
			const item = result[i];
			// Sadalu key:{val}
			const key = item.match(/^[a-zA-Z]+/);
			const val = item.match(/[0-9]+/);
			// Single result grupas met veselu kaudzi ar datu
			// tp janem [0]tais val, kas ir tas rezultats
			destObj[key[0]] = Number(val[0]);
		}
		setapiData(destObj);
	}

	useEffect(() => {
		requestCamera();
		// formatData(exampleData);
	}, []);

	return (
		<div className={s.Wrapper}>
			<UserScreen
				limit={limit}
				entered={apiData.EnteredSubtotal || 0}
				exited={apiData.ExitedSubtotal || 0}
				inside={apiData.InsideSubtotal || 0}
			/>
		</div>
	);
};

export default PeopleCounter;
