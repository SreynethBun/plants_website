const images = import.meta.glob('../../assets/images/*.{png,jpg}', { eager: true, import: 'default' });
const imageMap = {};
for (const path in images) {
  // Extract the file name (e.g., 'hero.png')
  const fileName = path.split('/').pop();
  imageMap[fileName] = images[path];
}

import { FaStar } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";

export const Navmenu =[
    {
        title: 'Home',
        id: '',
    },
    {
        title: 'Plans Type',
        Path: '/',
    },
    {
        title: 'More',
        Path: '/',
    },
    {
        title: 'Contact',
        Path: '/',
    },
]

export const SellingData = [
    {
        img: imageMap['hero.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },
    {
        img: imageMap['Pasted.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },
    {
        img: imageMap['Posted1.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },
    {
        img: imageMap['Posted2.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },
    {
        img: imageMap['image.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },
    {
        img: imageMap['posted3.png'],
        title: 'Calathea plant',
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 'Rs. 359/-',
        icon: <FaOpencart />
    },

]

export const CusReview = [
    {
        img: imageMap['review-3.jpg'],
        title: 'Maxn Raval',
        rating:(<div className="flex space-x-1 text-xl"><FaStar /><FaStar /><FaStar /> <FaStar /> <IoStarHalf /></div>),
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
        img: imageMap['review-1.jpg'],
        title: 'venely k',
        rating:(<div className="flex space-x-1 text-xl"><FaStar /><FaStar /><FaStar /> <FaStar /> <IoStarHalf /></div>),
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
        img: imageMap['review-2.jpg'],
        title: 'Lii thakur',
        rating:(<div className="flex space-x-1 text-xl"><FaStar /><FaStar /><FaStar /> <FaStar /> <IoStarHalf /></div>),
        desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },

]

export const best02 = [
    {
        title: 'We Have Small And Best O2 Plants Collection’s',
        img: imageMap['hero.png'],
        decription1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        decription2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        butt: 'Explore',
    },
    // {
    //     title: 'We Have Small And Best O2 Plants Collection’s',
    //     img: imageMap['cart-2.png'],
    //     decription1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    //     decription2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    //     butt: 'Explore',
    // },
    // {
    //     title: 'We Have Small And Best O2 Plants Collection’s',
    //     img: imageMap['Pasted.png'],
    //     decription1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    //     decription2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    //     butt: 'Explore',
    // },
]



