//セーブデータの型
interface saveData {
	clickCount: number;
	count: number;
	[key: string]: number;
}

export const useSave = () => {
	const { clickCount, count, shopList, incrementCount, decrementCount } =
		useNumberStates();

	//セーブ読み込み
	const saveImport = async (file: File) => {
		const reader = new FileReader();
		reader.readAsText(file);
		//jsonを読み込んだら
		await reader.addEventListener("load", () => {
			const json = JSON.parse(reader.result as string);

			//クリック数と現在のカウントをstateにset
			clickCount.value = json.clickCount;
			count.value = json.count;

			//各ショップリストのstateをstateにset
			for (const [key, value] of Object.entries(shopList)) {
				if (!json[`${key}Count`]) continue;
				value.count.value = json[`${key}Count`];
				value.incrementCount.value = json[`${key}IncrementCount`];
				value.price.value = json[`${key}Price`];
			}
		});
	};

	//セーブ書き出し
	const saveExport = () => {
		//共通のstateをdataにset
		const data = {
			clickCount: clickCount.value,
			count: count.value,
		} as saveData;

		//各ショップリストのstateをdataにset
		for (const [key, value] of Object.entries(shopList)) {
			if (value.count.value === 0) continue;
			data[`${key}Count`] = value.count.value;
			data[`${key}IncrementCount`] = value.incrementCount.value;
			data[`${key}Price`] = value.price.value;
		}

		const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		const date = new Date();
		const formattedDate = Intl.DateTimeFormat(undefined, {
			hour12: false,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
		}).format(date);
		const formattedDate2 = formattedDate
			.replace(/\//g, "")
			.replace(" ", "")
			.replace(":", "");
		const saveDataName = `${formattedDate2}_saveData.json`;
		a.href = url;
		a.download = saveDataName;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return { saveImport, saveExport };
};
