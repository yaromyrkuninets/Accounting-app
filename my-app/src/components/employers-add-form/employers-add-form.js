import { Component } from 'react';

// import './employers-add-form.css';
import './employers-add-form.scss';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    static onLog = () => {
        console.log("Hello");
    }

    static logged = "on";

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавте нового працівника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        required
                        minlength="3"
                        maxLength="20"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        required
                        maxLength="20"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

EmployersAddForm.onLog();
console.log(EmployersAddForm.logged())

export default EmployersAddForm;