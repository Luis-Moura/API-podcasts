import { podcastModel } from "./model-data";
import { dataPodcasts } from "./data";

export const findAllPodcasts = () : podcastModel[] => {  
    
    return dataPodcasts

}

export const filterPodcasts = (podcastName ?: string, episodeName ?: string, categories ?: string[]) : podcastModel[] => {

    let filteredPodcasts = dataPodcasts

    if (podcastName) {
        filteredPodcasts = filteredPodcasts.filter(podcast => podcast.podcastName === podcastName);
    }

    if (episodeName) {
        filteredPodcasts = filteredPodcasts.filter(podcast => podcast.episodeName === episodeName);
    }

    if (categories && categories.length > 0) {
        filteredPodcasts = filteredPodcasts.filter(podcast =>
            categories.every(category => podcast.categories.includes(category))
        );
    }

    return filteredPodcasts

}
