import './app-info.css';


const Appinfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії Apple</h1>
            <h2>Загальна кількість працівників: {employees}</h2>
            <h2>Премію получать: {increased}</h2>
        </div>
    );
};

export default Appinfo