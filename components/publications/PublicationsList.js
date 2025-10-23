import usePublications from "../../hooks/usePublications";
import PublicationItem from "./PublicationItem";

const PublicationsList = () => {
	const { publications } = usePublications();
	return (
		<>
		{publications.map((publication, index) => (
			<PublicationItem publication={publication}/>
		))}
		</>
	)
}

export default PublicationsList 