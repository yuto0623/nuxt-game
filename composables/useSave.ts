export const useSave = () => {
	const {
		clickCount,
		count,
		shopList,
		// thinVillagersCount,
		// thinVillagersIncrementCount,
		// thinVillagersPrice,
		incrementCount,
		decrementCount,
	} = useNumberStates();

	const saveImport = async (file: File) => {
		const reader = new FileReader();
		reader.readAsText(file);
		await reader.addEventListener("load", () => {
			const json = JSON.parse(reader.result as string);
			clickCount.value = json.clickCount;
			count.value = json.count;
			shopList.thinVillagers.count.value = json.thinVillagersCount;
			shopList.thinVillagers.incrementCount.value =
				json.thinVillagersIncrementCount;
			shopList.thinVillagers.price.value = json.thinVillagersPrice;
		});
	};

	const saveExport = () => {
		console.log("saveOutput");
		const data = {
			clickCount: clickCount.value,
			count: count.value,
			thinVillagersCount: shopList.thinVillagers.count.value,
			thinVillagersIncrementCount: shopList.thinVillagers.incrementCount.value,
			thinVillagersPrice: shopList.thinVillagers.price.value,
		};
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
