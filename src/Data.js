import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'home'
    },
    {
        id: 2,
        href: '#about',
        text: 'about'
    },
    {
        id: 3,
        href: '#services',
        text: 'services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'tours'
    },
]
export const socialLink= [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:2, href:'https://www.facebook.com', icon:'fab fa-facebook'},
    {id:3, href:'https://www.squarespace.com', icon:'fab fa-squarespace'}
]
export const services = [
    {
        id:1, 
        icon:'fas fa-wallet fa-fw', 
        title:'saving money', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id:2, 
        icon:'fas fa-tree fa-fw', 
        title:'endless hiking', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id:3, 
        icon:'fas fa-socks fa-fw', 
        title:'amazing comfort', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
]
export const tour = [
    {
        id: 1,
        image:img1,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'china',
        duration:'6 days',
        amount:'from $2100'
    },
    {
        id: 2,
        image:img2,
        date:'october 1st, 2020',
        title:'best of java',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'indonesia',
        duration:'11 days',
        amount:'from $1400'
    },
    {
        id: 3,
        image: img3,
        date:'september 15th, 2020',
        title:'explore hong kong',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'hong kong',
        duration:'8 days',
        amount:'from $5000'
    },
    {
        id: 4,
        image: img4,
        date:'december 5th, 2019',
        title:'kenya highlights',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'kenya',
        duration:'20 days',
        amount:'from $3300'
    },
]