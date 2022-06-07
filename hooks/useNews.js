import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { client } from '../utils/createContentfulClient'
import isAfter from 'date-fns/isAfter'

const useNews = (limit) => {
	const [news, setNews] = useState([]);
	const getNews = async (limit) => {
		const query = {
			content_type: 'news',
		}
		console.log('Limit: ', limit)
		if(limit) {
			query.limit = 4;
		}
		const entries = await client.getEntries(query);
		console.log('Entries: ', entries)
		const formattedEntries = entries.items
		.sort((x, y) => {
			const dateX = new Date(x.sys.createdAt)
			const dateY = new Date(y.sys.createdAt)
			console.log('Result: ', dateY, dateX, isAfter(dateY, dateX))
			if(isAfter(dateY, dateX)) {
				return 1;
			}
			return -1;
		})
		.map(entry => {
			const { 
				fields: {
					description,
					image,
					title,
					summary,
				}, 
				sys: {
					id,
					createdAt,
				},
			} = entry;
			return {
				createdAt,
				id,
				description,
				image: `https:${image.fields.file.url}`,
				title,
				summary,
			}
		})
		console.log(formattedEntries)
		setNews(formattedEntries);
	}
	useEffect(() => {
		getNews(limit);
	}, [])
	return { news }
}
export default useNews 