export const useNumberStates = () => {
	type CountRef = ReturnType<typeof useState<number>>;

	//クリック回数
	const clickCount = useState<number>("clickCount", () => 0);

	//カウント
	const count = useState<number>("count", () => 0);

	//時間の速さ
	const timeSpeed = useState<number>("timeSpeed", () => 1000);

	//やせ細った村人
	const thinVillagers = useShopListState("thinVillagers", 0, 0.1, 10);
	// const thinVillagersCount = useState<number>("thinVillagersCount", () => 0);
	// const thinVillagersIncrementCount = useState<number>(
	// 	"thinVillagersIncrementCount",
	// 	() => 0.1,
	// );
	// const thinVillagersPrice = useState<number>("thinVillagersPrice", () => 10);

	//村人
	const villagers = useShopListState("villagers", 0, 1.5, 100);
	// const villagersCount = useState<number>("villagersCount", () => 0);
	// const villagersIncrementCount = useState<number>(
	// 	"villagersIncrementCount",
	// 	() => 1.5,
	// );
	// const villagersPrice = useState<number>("villagersPrice", () => 100);

	//カウントを増やす
	const incrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value += updateValue;
	};

	//カウントを減らす
	const decrementCount = (countName: CountRef, updateValue = 1) => {
		countName.value -= updateValue;
	};

	return {
		clickCount,
		count,
		timeSpeed,
		shopList: {
			thinVillagers: thinVillagers,
			villagers: villagers,
		},
		// thinVillagersCount,
		// thinVillagersIncrementCount,
		// thinVillagersPrice,
		// villagersCount,
		// villagersIncrementCount,
		// villagersPrice,
		incrementCount,
		decrementCount,
	};
};

//ショップリストの状態管理用関数
const useShopListState = (
	key: string,
	initialCount: number,
	initialIncrementCount: number,
	initialPrice: number,
) => {
	const count = useState<number>(`${key}Count`, () => initialCount);
	const incrementCount = useState<number>(
		`${key}IncrementCount`,
		() => initialIncrementCount,
	);
	const price = useState<number>(`${key}Price`, () => initialPrice);

	return { count, incrementCount, price };
};
