import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { client } from '../utils/createContentfulClient'

const useTeam = () => {
	const [peoples, setPeople] = useState([]);
	const getTeam = async () => {
		const entries = await client.getEntries({
			content_type: 'team',
		})
		console.log('Content type: ', entries)
		const formattedEntries = entries.items.sort((x, y)=>x.fields.order - y.fields.order).map(entry => {
			const { fields: {
				linkedInProfileUrl, name, sitProfile, title, profilePicture, order,
				summary,
				memberType,
			}} = entry;
			let data = {};
			if(linkedInProfileUrl) {
				data.linkedInProfile = linkedInProfileUrl;
			}
			if(profilePicture) {
				data.profilePicture = `https:${profilePicture.fields.file.url}`;
			}
			return {
				...data,
				name,
				title, 
				order,
				sitProfile,
				memberType,
				summary,
			}
		})
		setPeople(formattedEntries)
		return peoples;
	}
	useEffect(() => {
		getTeam();
	}, [])
	return { peoples }
}
export default useTeam