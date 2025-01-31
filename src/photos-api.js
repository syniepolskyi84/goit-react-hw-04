import axios from "axios";

export async function searchPhotos(query, page) {

  try{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page: 12,
        client_id: "-NP4tWjTQ-v-ovL0tV4c7m8RBIiEM0fa74HhXPxjWwU",
      },
    });
    return response.data.results;

  } catch (erro){
    throw new Error();
  }
    
}