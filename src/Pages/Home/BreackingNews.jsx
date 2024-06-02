import Marquee from "react-fast-marquee";


const BreackingNews = () => {
    return (
        <div className="flex items-center ">
        <button className="btn btn-secondary">Breacking News</button>
        <p>
        <Marquee pauseOnHover>
I can be a React component, multiple React components, or just some text.
</Marquee>
        </p>
     </div>
    );
};

export default BreackingNews;