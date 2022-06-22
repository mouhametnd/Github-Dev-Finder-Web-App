const fetchSuggestions = async ({ query, setState }) => {
  try {
    setState({ isLoading: true, error: null });

    const request = await fetch(`https://api.github.com/search/users?q=${query}`);
    if (!request.ok) throw request;
    const response = await request.json();

    const suggestions = [];
    for (let i = 0; i < response.items.length; i++) {
      if (i === 20) break;
      suggestions.push(response.items[i]);
    }
    
    setState({ isLoading: false, suggestions, error: null });
  } catch (error) {
    setState({ isLoading: false, suggestions: [], error });
  }
};

export default fetchSuggestions;
