import style from './style.module.css';

const Layout = (props) => {
    return (
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={style.content}>
            {props.children}
        </main>
    </>);
}

export default Layout;