import { filterPodcasts, findAllPodcasts } from "../database/podcast-database"

export const findAllPodcastsService = () => {
    const data = findAllPodcasts()

    let response

    if (data.length > 0){
        response = {
            status : 200,
            body : data
        }
    }
    else{
        response = {
            status : 204,
            body : null
        }
    }

    return response

}

export const filterPodcastsService = (podcastName ?: string, episodeName ?: string, categories ?: string[]) => {

    const data = filterPodcasts(podcastName, episodeName, categories)

    let response    
    
    if (podcastName == undefined && episodeName == undefined && categories == undefined){

        response = {
            status : 400,
            body : null
        }
    }

    else if (data.length > 0 && podcastName != '' && episodeName != '' && categories?.length != 0){
        response = {
            status : 200,
            body : data
        }
    }

    else{
        response = {
            status : 204,
            body : null
        }
    }

    return response

}
