import axios from 'axios';

async function fetchData<T extends object>(url: string): Promise<T> {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

type User = {
    id: string;
    name: string;
    email: string;
}

const fetchedUser: User = await fetchData<User>("https://google.com/");