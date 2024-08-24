import { useState, useEffect } from 'react';
import './Home.css';
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [pass, setPass] = useState("");
    const [title, setTitle] = useState("");
    const [passwordList, setPasswordList] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:4000/getPasswords')
            .then(response => {
                console.log("Fetched passwords:", response.data);
                setPasswordList(response.data);
            })
            .catch(err => {
                console.log("Error fetching data:", err);
            });
    }, []);

    function changeHandlerPass(event) {
        setPass(event.target.value);
    }

    function changeHandlerTitle(event) {
        setTitle(event.target.value);
    }

    function clickHandler(event) {
        event.preventDefault();
        toast.success("Password Added Successfully");
        Axios.post('http://localhost:4000/addpass', {
            pass: pass,
            title: title
        }).then(response => {
            console.log("Data sent successfully:", response);
            setPasswordList([...passwordList, { password: pass, title }]);
        }).catch(err => {
            console.log("Error sending data:", err);
        });
    }

    return (
        <div>
            <h2 className='head'>Password Saver</h2>
            <form>
                <div className='parent'>
                    <div className='hel2'>
                        <div className='pas hel'>
                            <input className='temp' id='pass' type='text' placeholder='Ex. pass@123' onChange={changeHandlerPass} />
                        </div>
                        <div className='plat hel'>
                            <input className='temp' id='Platform' type='text' placeholder='Ex. Facebook' onChange={changeHandlerTitle} />
                        </div>
                        <div className='hel'>
                            <button className='button' onClick={clickHandler}>Add Password</button>
                        </div>
                    </div>
                </div>
            </form>
            <button className='allpas' onClick={() => setShow(!show)}>
                {show ? 'Hide Passwords' : 'Show Passwords'}
            </button>
            {show && (
                <div className='passlist'>
                    {passwordList.length > 0 ? (
                        passwordList.map((item, index) => (
                            <div className='passitem' key={index}>
                                <span className='passtitle'>{item.title}</span>
                                <span className='pass'>{item.password}</span>
                            </div>
                        ))
                    ) : (
                        <p>No passwords available</p>
                    )}
                </div>
            )}
            <Toaster />
        </div>
    );
}

export default Home;
