export const useNumberStates = () => {
	type CountRef = ReturnType<typeof useState<number>>;

	//カウント
	const count = useState<number>("count", () => 0);

	//時間の速さ
	const timeSpeed = useState<number>("timeSpeed", () => 1000);

	//やせ細った村人
	const thinVillagersCount = useState<number>("thinVillagersCount", () => 0);
	const thinVillagersIncrementCount = useState<number>(
		"thinVillagersIncrementCount",
		() => 0.1,
	);
	const thinVillagersCountPrice = useState<number>(
		"thinVillagersCountPrice",
		() => 10,
	);

	//村人
	const villagersCount = useState<number>("villagersCount", () => 0);
	const villagersIncrementCount = useState<number>(
		"villagersIncrementCount",
		() => 1.5,
	);
	const villagersCountPrice = useState<number>(
		"villagersCountPrice",
		() => 100,
	);

	//カウントを増やす
	const incrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value += updateValue;
	};

	//カウントを減らす
	const decrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value -= updateValue;
	};

	return {
		count,
		timeSpeed,
		thinVillagersCount,
		thinVillagersIncrementCount,
		thinVillagersCountPrice,
		villagersCount,
		villagersIncrementCount,
		villagersCountPrice,
		incrementCount,
		decrementCount,
	};
};
