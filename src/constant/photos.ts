export const photos = [
    {
        id: 1,
        width: 4450,
        height: 2794,
        description: "Ercolano roman statue",
        shootDate: "10/10/2022",
        film: {
            id: 1,
            name: "Kodak Ektar 100",
            createdYear: 2008,
            madeIn: {
                id: 1,
                name: "United State"
            }
        },
        camera: {
            id: 1,
            name: "Asahi Pentax K1000",
            createdYear: 1960,
            madeIn: {
                id: 2,
                name: "Japan"
            }
        },
        location: {
            id: 3,
            name: "Ercolano Archaeological Park",
            city: {
                id: 2,
                name: "Napoli",
                country: {
                    id: "3",
                    name: "Italy"
                }
            }
        },
        category: {
            id: 1,
            name: "Trips"
        },
        src:[
            {
                id: 1,
                url: "http://localhost:3000/gallery/raw/1.jpg",
                quality: {
                    id: 1,
                    name: "raw"
                }
            },
            {
                id: 2,
                url: "http://localhost:3000/gallery/full/1.jpg",
                quality: {
                    id: 2,
                    name: "full"
                }
            },
            {
                id: 3,
                url: "http://localhost:3000/gallery/regular/1.jpg",
                quality: {
                    id: 3,
                    name: "regular"
                }
            },
            {
                id: 4,
                url: "http://localhost:3000/gallery/small/1.jpg",
                quality: {
                    id: 4,
                    name: "small"
                }
            },
            {
                id: 5,
                url: "http://localhost:3000/gallery/thumb/1.jpg",
                quality: {
                    id: 5,
                    name: "thumb"
                }
            }
        ],
        createdTimestamp: 1652116708
    },
    {
        id: 2,
        width: 2899,
        height: 4519,
        description: "Roman sanctuary of ercolano",
        shootDate: "10/10/2022",
        film: {
            id: 1,
            name: "Kodak Ektar 100",
            createdYear: 2008,
            madeIn: {
                id: 1,
                name: "United State"
            }
        },
        camera: {
            id: 1,
            name: "Asahi Pentax K1000",
            createdYear: 1960,
            madeIn: {
                id: 2,
                name: "Japan"
            }
        },
        location: {
            id: 3,
            name: "Ercolano Archaeological Park",
            city: {
                id: 2,
                name: "Napoli",
                country: {
                    id: "3",
                    name: "Italy"
                }
            }
        },
        category: {
            id: 1,
            name: "Trips"
        },
        src:[
            {
                id: 6,
                url: "http://localhost:3000/gallery/raw/2.jpg",
                quality: {
                    id: 1,
                    name: "raw"
                }
            },
            {
                id: 7,
                url: "http://localhost:3000/gallery/full/2.jpg",
                quality: {
                    id: 2,
                    name: "full"
                }
            },
            {
                id: 8,
                url: "http://localhost:3000/gallery/regular/2.jpg",
                quality: {
                    id: 3,
                    name: "regular"
                }
            },
            {
                id: 9,
                url: "http://localhost:3000/gallery/small/2.jpg",
                quality: {
                    id: 4,
                    name: "small"
                }
            },
            {
                id: 10,
                url: "http://localhost:3000/gallery/thumb/2.jpg",
                quality: {
                    id: 5,
                    name: "thumb"
                }
            }
        ],
        createdTimestamp: 1652116708
    },
]

export const categories = [
    {
        id: 1,
        name: "Trips",
    },
    {
        id: 2,
        name: "Street",
    }
];

