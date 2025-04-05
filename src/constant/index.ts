type loveStoriesType = {
    title: string,
    date: string,
    img: string,
}

export const loveStories: loveStoriesType[] = [
    {
        title: 'First Meet',
        date: 'Saturday, July 1st, 2023',
        img: 'https://i.pinimg.com/564x/4d/af/3f/4daf3f84c50a9c0170d792a23b733668.jpg',
    },
    {
        title: 'First Date',
        date: 'Tuesday, July 4th, 2023',
        img: 'https://i.pinimg.com/564x/61/08/12/610812f350e80343d291f59b6cd87b3f.jpg',
    },
    {
        title: 'Marriage Proposal',
        date: 'Friday, November 14th, 2023',
        img: 'https://i.pinimg.com/564x/82/97/e4/8297e4b50120c13c5b40bf6feb90f6f7.jpg',
    },
    {
        title: 'Our Engagement',
        date: 'Thursday, January 14th, 2023',
        img: 'https://i.pinimg.com/564x/39/9c/53/399c532db79a9d9cee1bcc14d1939045.jpg',
    },
]

export const tabs: string[] = [ 'couple', 'our story', 'events', 'people', 'gallery', 'wishes']

type eventsDetailsType = {
    title: string,
    date: string,
    img: string,
    time: string,
    venue: string,
}
export const eventsDetails: eventsDetailsType[] = [
    {
        title: 'The Reception',
        date: 'August 1st, 2024',
        time: '9AM - 11PM',
        venue: '32 big bro road, Chanpai, London.',
        img: 'https://i.pinimg.com/474x/ea/b5/87/eab587d1cbb485686f7f975e82111887.jpg',
    },
    {
        title: 'The Ceremony',
        date: 'August 1st, 2024',
        time: '1PM - 3PM',
        venue: '32 big bro road, Chanpai, London.',
        img: 'https://i.pinimg.com/564x/50/76/22/50762292f6e94849dc50e258db6cbdea.jpg'
    },
    {
        title: 'Wedding Party',
        date: 'August 1st, 2024',
        time: '3PM - 8PM',
        venue: '32 big bro road, Chanpai, London.',
        img: 'https://i.pinimg.com/564x/77/3e/6f/773e6f3981ff66f5d9175b6c31fb054b.jpg'
    },
]

export type bridemaidsType = {
    name: string,
    isChief: boolean,
    img: string,
}
export const bridemaids: bridemaidsType[] = [
    {
        name: 'Patience Gates',
        img: 'https://i.pinimg.com/474x/98/3e/45/983e452644ebb81680c60de3f2128a9e.jpg',
        isChief: true,
    },
    {
        name: 'Elizabeth Bush',
        img: 'https://i.pinimg.com/474x/76/b5/a8/76b5a8b6b0bee25d87fb5099dcabf13f.jpg',
        isChief: false,
    },
    {
        name: 'Emily Wright',
        img: 'https://i.pinimg.com/474x/20/a8/f1/20a8f1d2901c29e9eda1ca9f4ca6dbc4.jpg',
        isChief: false,
    },
    {
        name: 'Evelyn',
        img: 'https://i.pinimg.com/474x/09/a2/a8/09a2a876bb0d865b692f65d5f0c6dbbb.jpg',
        isChief: false,
    },
    {
        name: 'Amelia',
        img: 'https://i.pinimg.com/474x/63/9b/75/639b75c237002fca98559a4c39748a98.jpg',
        isChief: false,
    },
]

export const groomsmen: bridemaidsType[] = [
    {
        name: 'Charles Gates',
        img: 'https://i.pinimg.com/474x/6f/42/f7/6f42f7337ff905c9820da0c432c67881.jpg',
        isChief: true,
    },
    {
        name: 'John Beckham',
        img: 'https://i.pinimg.com/474x/8f/0b/2e/8f0b2ec5e74f39b4f7fbc791e7420f3e.jpg',
        isChief: false,
    },
    {
        name: 'Wright Daniels',
        img: 'https://i.pinimg.com/474x/2c/15/22/2c15222f332f689b4cf89dd886af7d1d.jpg',
        isChief: false,
    },
    {
        name: 'William',
        img: 'https://i.pinimg.com/474x/5b/a1/d6/5ba1d6537a6c86a28c058e915f9efbc7.jpg',
        isChief: false,
    },
    {
        name: 'George',
        img: 'https://i.pinimg.com/474x/7a/6d/ee/7a6deea20ed6587875ae2215ac2a6286.jpg',
        isChief: false,
    },
]