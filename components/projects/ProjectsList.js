import { SimpleGrid } from "@chakra-ui/react";
import useProjects from "../../hooks/useProjects";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
	const { projects } = useProjects();
	return (
		<SimpleGrid columns={{sm:1, md:3}} spacing={5}>
		{projects.map((item, key) => (
			<ProjectItem item={item}/>
		))}
		</SimpleGrid>
	)
}

export default ProjectsList 