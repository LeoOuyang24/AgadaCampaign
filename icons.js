
export function getIcon(type)
{
	switch (type)
	{
	case "kingdom":
	case "Kingdom":
		return kingIcon
	case "POI":
	case "Point of Interest":
		return POIIcon
	case "village":
	case "Village":
		return villageIcon
	case "Town":
	case "City":
		return townIcon
	}
}


export let POIIcon = L.icon({
    iconUrl: 'sprites/icons/POI.png',
    iconSize: [16,20]
});

export let kingIcon = L.icon({
	iconUrl: 'sprites/icons/kingdom.png',
	iconSize: [40,30]
})

export let villageIcon = L.icon({
	iconUrl: 'sprites/icons/village.png',
	iconSize: [20,20]
})

let townIcon = L.icon({
	iconUrl: 'sprites/icons/town.png',
	iconSize: [25,25]

})
