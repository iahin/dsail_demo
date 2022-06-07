import useNews from "../../hooks/useNews";
import NewsItem from "./NewsItem";

const NewsList = ({limit}) => {
	const { news } = useNews(limit);
	return (
		<>
		{news.map(item => (
			<NewsItem key={1} item={item}/>
		))}
		</>
	)
}

export default NewsList