import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pets,setPets] = useState([]);
    const [adopt,setAdopt] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[adopt])
    
    return(
        <>
            <Link to="/new">add a pet to the shelter</Link>
            <h4>These pets are looking for a good home</h4>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet,i) => <tr key={i}>
                                            <td>
                                                {pet.name}
                                            </td>
                                            <td>{pet.type}</td>
                                            <td>
                                                <Link to={`/details/${pet._id}`}>details</Link> | 
                                                <Link to={`/edit/${pet._id}`}>edit</Link>
                                                
                                            </td>
                                            </tr>)
                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;