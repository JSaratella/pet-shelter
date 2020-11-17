import { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const [pet, setPet] = useState(null);
    const [adopt, setAdopt] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [props])


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setAdopt(res.data.results))
            .catch(err => console.log(err));
    }, [adopt])

    const adoptPet = (id, name) => {
        axios.delete(`http://localhost:8000/api/pets/destroy/${id}`)
            .then(res => {
                if (res.data.results) {
                    setAdopt(!adopt);
                    navigate(`/`)
                    console.log(`${name} was adopted!!`)
                }
            })
            .catch(err => console.log(err))
    }

    const handleOnLike = e => {
        this.setState({
            likes: this.state.likes + 1
        });
    };

    return (
        pet ?
            <div className="card col-6 mx-auto">
                <h3>Details about: {pet.name}</h3>
                <button
                    onClick={() => adoptPet(pet._id, pet.name)}
                    className="btn btn-danger">Adopt {pet.name}</button>
                <div className="card-body">
                    <p className="card-text">Pet type: {pet.type}</p>
                    <p className="card-text">Description: {pet.description}</p>
                    <p className="card-text">Skills: {pet.skill1}<br /> {pet.skill2} <br /> {pet.skill3}</p>
                    <button onClick={() => handleOnLike}
                        className="btn btn-success">Like {pet.name}</button>
                    <p> like(s)</p>
                </div>
            </div> : <p>Loading...</p>
    );
}

export default Show;