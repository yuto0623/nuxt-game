export const useNumberStates = () => {
	type CountRef = ReturnType<typeof useState<number>>;

	//クリック回数
	const clickCount = useState<number>("clickCount", () => 0);

	//カウント
	const count = useState<number>("count", () => 0);

	//時間の速さ
	const timeSpeed = useState<number>("timeSpeed", () => 1);

	//やせ細った村人
	const thinVillagers = useShopListState(
		"thinVillagers",
		"やせ細った村人",
		0,
		0.1,
		10,
	);

	//村人
	const villagers = useShopListState("villagers", "村人", 0, 1.5, 100);

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
		incrementCount,
		decrementCount,
	};
};

//ショップリストの状態管理用関数
const useShopListState = (
	key: string,
	initialName: string,
	initialCount: number,
	initialIncrementCount: number,
	initialPrice: number,
) => {
	const name = useState<string>(`${key}Name`, () => initialName);
	const count = useState<number>(`${key}Count`, () => initialCount);
	const incrementCount = useState<number>(
		`${key}IncrementCount`,
		() => initialIncrementCount,
	);
	const price = useState<number>(`${key}Price`, () => initialPrice);

	return { key, name, count, incrementCount, price };
};

export type shopState = ReturnType<typeof useShopListState>;
