import style from './buildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={style.BuildControl}>
            <div className={style.Label}>{props.label}</div>
            <button disabled={props.isDisabled} className={style.Less} onClick={() => props.removeIngredient(props.type)}>Less</button>
            <button className={style.More} onClick={() => props.addIngredient(props.type)}>More</button>
        </div>
    );
}

export default BuildControl;