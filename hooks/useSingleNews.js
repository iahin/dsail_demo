import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { client } from '../utils/createContentfulClient'
import { Box, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import { Para } from '../components/shared/Text';

const useSingleNews = (id) => {
	const [singleNews, setSingleNews] = useState(null);
	const getSingleNews = async (newsId) => {
		const entry = await client.getEntry(newsId);
		const { 
			fields: {
				description,
				desc,
				image,
				title,
			}, 
			sys: {
				id,
				createdAt,
			},
		} = entry;
		let formattedDesc;
		if(desc) {
			formattedDesc = desc.content.map((content) => {
				const { nodeType } = content;
				console.log('Node type')
				if(nodeType === 'paragraph') {
					const { value, marks } = content.content[0];
					return {
						type: 'parsed',
						data: content.content.map(x => {
							if(x.marks.length > 0) {
								let style = {};
								if((x.marks || []).find(x=>x.type === 'bold')) {
									console.log('Returning bold')
									style.fontWeight = 600;
									return (
										<span style={style}>{x.value}</span>
									)
								}
							} else {
								return (
									<span>{x.value}</span>
								)
							}
						}),
						// marks,
					}
				} else if(nodeType === 'embedded-asset-block') {
					const imageUrl = content.data.target.fields.file.url;
					return {
						type: 'assets',
						value: imageUrl,
					}
				} else if(['unordered-list'].includes(nodeType)) {
					console.log('Unordered content: ', content.content)
					const pointContents = content.content.map(x => {
						return x.content[0].content.map(html => {
							const { value, marks } = html;
							let style = {
								marginLeft: 0,
							}
							if((marks || []).find(x=>x.type === 'bold')) {
								style.fontWeight = 600;
							}
							return (
								<span style={style}>{value}</span>
							)
						})
					})
					return {
						type: 'html',
						data: (
							<UnorderedList style={{
								marginLeft: '50px',
							}}>
								{pointContents.map(pointContent => (
									<ListItem style={{
										listStyleType: 'disc',
										color: '#000',
									}}>
										<Para style={{
											marginLeft: 0,
										}}>
											{pointContent}
										</Para>
									</ListItem>
								))}
							</UnorderedList>
						),
					};
				} else if (['ordered-list'].includes(nodeType)) {
					const pointContent = content.content.map(listItem => {
						return (
							<ListItem style={{
								color: '#000',
							}}>
								<Para style={{
									marginLeft: '0px'
								}}>
								{listItem.content[0].content.map(item => {
									const { value, marks } = item;

									let style = {
										marginLeft: 0,
									}
									if((marks || []).find(x=>x.type === 'bold')) {
										style.fontWeight = 600;
									}
									return (
										<span style={style}>{value}</span>
									)
								})}
								</Para>
							</ListItem>
						)
					})
					return {
						type: 'html',
						data: (
							<OrderedList style={{
								marginLeft: '50px',
							}}>
								{pointContent}
							</OrderedList>
						),
					};
				}
			})
		} else {
			formattedDesc = description;
		}
		console.log('Formatted: ', formattedDesc)
		const formattedNews = {
			createdAt,
			id,
			description: formattedDesc,
			image: `https:${image.fields.file.url}`,
			title,
		}
		setSingleNews(formattedNews)
	}
	useEffect(() => {
		if(id) {
			getSingleNews(id);
		}
	}, [id])
	return { singleNews }
}
export default useSingleNews 