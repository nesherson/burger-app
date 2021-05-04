import style from './buildControls.module.css';

import BuildControl from './buildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    return (
        <div className={style.BuildControls}>
            {controls.map(control => {
                return <BuildControl key={control.label} label={control.label} type={control.type} />
            })}
        </div>
    );
}

export default BuildControls;