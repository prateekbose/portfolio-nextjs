import Head from 'next/head'
export default function Footer(){
    return [
        <Head key={-1}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        </Head>,
        <footer key={0}>
            <h1>Like my work,<br/>reach out on my socials</h1>
            <ul>
                <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
                <li><a href="#"><i className="fab fa-github"></i> Github</a></li>
                <li><a href="#"><i className="far fa-envelope"></i> Email</a></li>
            </ul>
        </footer>
    ]
}