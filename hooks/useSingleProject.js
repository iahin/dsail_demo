import { Box, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem';
import { Para } from '../components/shared/Text';
import { client } from '../utils/createContentfulClient'

const useSingleProject = (id) => {
	const [singleProject, setSingleProject] = useState(null);
	const getSingleProject = async (projectId) => {
		console.log('ProjectId: ', projectId)
		const entry = await client.getEntry(projectId);
		const { 
			fields: {
				name,
				summary,
				profilePicture,
				acknowledgement,
				brief,
				members,
				projectOutput,
			}, 
			sys: {
				id,
			},
		} = entry;
		console.log('entry: ', entry.fields)
		const formattedBrief = brief.content.map((content) => {
			const { nodeType } = content;
			if(nodeType === 'paragraph') {
				const { value, marks } = content.content[0];
				return {
					type: nodeType,
					value,
					marks,
				}
			} else if(nodeType === 'embedded-asset-block') {
				const imageUrl = content.data.target.fields.file.url;
				return {
					type: 'assets',
					value: imageUrl,
				}
			} else if(['unordered-list'].includes(nodeType)) {
				const { content: htmlContents } = content.content[0].content[0]
				const pointContent = htmlContents.map(html => {
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
				return {
					type: 'html',
					data: (
						<UnorderedList style={{
							marginLeft: '50px',
						}}>
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
		const formattedProject = {
			name,
			summary,
			profilePicture: `https:${profilePicture.fields.file.url}`,
			acknowledgement,
			members,
			id,
			brief: formattedBrief,
			projectOutput,
		}
		console.log('FormattedProject: ', formattedProject)
		setSingleProject(formattedProject)
	}
	useEffect(() => {
		console.log('project id: ', id)
		if(id) {
			getSingleProject(id);
		}
	}, [id])
	return { singleProject }
}
export default useSingleProject 