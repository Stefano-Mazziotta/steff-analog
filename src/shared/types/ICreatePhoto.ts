interface ICreatePhoto {
    height: number
    width: number
    title: string
    description: string
    shootDate: Date
    published: boolean
    filmId: number
    cameraId: number
    locationId: number
    createdAt: Date
    updatedAt: Date | null
}