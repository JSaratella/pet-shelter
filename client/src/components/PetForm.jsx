const PetForm = props => {
    const {form,errors,handleInputChange,handleSubmit,submitValue} = props;
    console.log(form)
    return(
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Pet Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Pet Type:</label>
                <input 
                    type="text" 
                    name="type" 
                    className="form-control"
                    value={form.type}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Pet Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    className="form-control"
                    value={form.description}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
            </div>
            <h6>Skills (optional):</h6>
            <div className="form-group">
                <label htmlFor="skill1">Skill 1:</label>
                <input 
                    type="text" 
                    name="skill1" 
                    className="form-control"
                    value={form.skill1}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill2">Skill 2:</label>
                <input 
                    type="text" 
                    name="skill2" 
                    className="form-control"
                    value={form.skill2}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill3">Skill 3:</label>
                <input 
                    type="text" 
                    name="skill3" 
                    className="form-control"
                    value={form.skill3}
                    onChange={handleInputChange}
                />
            </div>
            <input type="submit" value={submitValue} className="btn btn-info"/>
        </form>
    );
}

export default PetForm;