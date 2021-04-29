import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {

    /* automatically take e[0] if its' blank or e*/
    // const handleClick = (e) => {
    //     console.log('hello, ninjas', e);
    // }

    /// wrap the function to prevent invoking at the spot, refer to the following usage in return
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // } 

    // let name = 'mario';
    //invoke useState func, and get the 2 values -> [Variable, function to change the value of the variable] data type can be anything
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState('25');

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
    // }

  
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }

    // const [name, setName] = useState('mario');
   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    

    return ( 
        <div className="home">
            {/* <p>{ name } is { age } years old</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)
            }>Click me again</button> */}

            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }

            {/*pass the blogs state as props to BlogList */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}


            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" /> */}
            {/* <button onClick={()=> setName('luigi')}>change name</button>
            <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;