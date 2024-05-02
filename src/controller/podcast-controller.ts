import { filterPodcastsService, findAllPodcastsService } from "../services/podcast-service"
import { Request, Response } from "express"

export const findAllPodcastsController = (req: Request, res: Response) => {
    const httpResponse = findAllPodcastsService()

    res.status(httpResponse.status).json(httpResponse.body)
}

export const filterPodcastsController = (req: Request, res: Response) => {

    const bodyValue = req.body

    const httpResponse = filterPodcastsService(bodyValue.podcastName, bodyValue.episodeName, bodyValue.categories)

    res.status(httpResponse.status).json(httpResponse.body)
}
