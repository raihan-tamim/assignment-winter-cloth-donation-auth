import { Link } from 'react-router';
import errorImg from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto py-5 flex flex-col items-center'>
            <img className='w-2/3 mx-auto  object-cover' src={errorImg} alt="" />
            <h1 className='text-3xl text-purple-600 font-bold text-center my-3'>Page Not Found..!</h1>
            <Link to={-1} className='btn btn-primary '>Go Back</Link>
        </div>
    );
};

export default ErrorPage;