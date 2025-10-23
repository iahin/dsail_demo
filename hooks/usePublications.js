import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { client } from '../utils/createContentfulClient'

const usePublications = () => {
	const [publications, setPublications] = useState([]);
	const getPublications = async () => {
		const entries = await client.getEntries({
			content_type: 'publications',
		})
		console.log('Entries: ', entries)
		const formattedEntries = entries.items.sort((x, y)=>x.fields.order - y.fields.order).map(entry => {
			const { fields: {
				publicationSubheader, publicationTitle,
				publicationUrl, publicationPdfLink,
			}} = entry;
			return {
				publicationSubheader,
				publicationTitle,
				publicationUrl,
				publicationPdfLink,
			}
		})
		setPublications(formattedEntries)
	}
	useEffect(() => {
		getPublications();
	}, [])
	return { publications }
}
export default usePublications 