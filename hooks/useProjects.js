import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { client } from '../utils/createContentfulClient'

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const getProjects = async () => {
		const entries = await client.getEntries({
			content_type: 'projects',
		})
		const formattedEntries = entries.items.sort((x, y)=>x.fields.order - y.fields.order).map(entry => {
			const { 
				fields: {
					name,
					summary,
					profilePicture,
					acknowledgement,
					brief,
				}, 
				sys: {
					id,
					createdAt,
				},
			} = entry;
			return {
				name,
				summary,
				profilePicture: `https:${profilePicture.fields.file.url}`,
				acknowledgement,
				id,
				createdAt,
			}
		})
		console.log('FormattedEntries: ', formattedEntries)
		setProjects(formattedEntries)
	}
	useEffect(() => {
		getProjects();
	}, [])
	return { projects }
}
export default useProjects