import { Link, Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
    <Outlet />
    </section>
  );
};
export default Home;
