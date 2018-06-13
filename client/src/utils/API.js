import axios from 'axios';

const URL ='https://api.nytimes.com/svc/search/v2/articlesearch.json';
const KEY = 'e167471ecd274f53962769e06c849f2b';

export default {
	getData(search){
		return axios.get(`${URL}?q=${search}=&sort=newest&api-key=${KEY}');
	},
	getSavedArticles(){
		return axios.get("/api/articles");
	},
	saveArticles(Article){
		return axios.post("api/articles", Article)
	},
	deleteArticle(id) {
		return axios.delete("api/articles/" + id);
	}
};