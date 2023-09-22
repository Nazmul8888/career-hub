import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import JobsCategory from "../JobsCategory/JobsCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>
            <Featured></Featured>
         
        </div>
    );
};

export default Home;