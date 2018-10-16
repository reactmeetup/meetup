export default (search = (searchedTerm) =>
	fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=66TJUz8nGSLBwGwCuitVPJPmsiwpLdlH&q=${searchedTerm}&limit=25&offset=0&rating=G&lang=en&limit=30`
	).then((response) => response.json()));
