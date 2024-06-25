import { Tabs } from 'expo-router'
import React from 'react'

const TabNavigation = () => {
	return (
		<Tabs>
			<Tabs.Screen name="(songs)" />
			<Tabs.Screen name="artists" />
			<Tabs.Screen name="playlists" />
			<Tabs.Screen name="favourites" />
		</Tabs>
	)
}

export default TabNavigation
