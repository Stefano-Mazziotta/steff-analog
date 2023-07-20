interface ILink {
    id: string
    href: string
    description: string
}

export const links:ILink[] = [
    {
        id: '1',
        href: '/home',
        description: 'Home'
    },
    {
        id: '2',
        href: '/gallery',
        description: 'Gallery'
    }
]