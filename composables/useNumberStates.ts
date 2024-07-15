export const useNumberStates = () => {
	type CountRef = ReturnType<typeof useState<number>>;

	const count = useState<number>("count", () => 0);

	const thinVillagersCount = useState<number>("thinVillagersCount", () => 0);
	const thinVillagersIncrementCount = useState<number>(
		"thinVillagersIncrementCount",
		() => 0.1,
	);
	const thinVillagersCountPrice = useState<number>(
		"thinVillagersCountPrice",
		() => 10,
	);

	const villagersCount = useState<number>("villagersCount", () => 0);
	const villagersCountPrice = useState<number>(
		"villagersCountPrice",
		() => 100,
	);

	const incrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value += updateValue;
	};

	const decrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value -= updateValue;
	};

	return {
		count,
		thinVillagersCount,
		thinVillagersIncrementCount,
		thinVillagersCountPrice,
		incrementCount,
		decrementCount,
	};
};
