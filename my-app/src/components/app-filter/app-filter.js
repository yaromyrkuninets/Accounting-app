import './app-filter.css'

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Всі працівники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'moreThen1000', label: 'З/П більше 1000$'}
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;