const fetchApi = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`${response.status}:${response.statusText}`);
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default fetchApi;