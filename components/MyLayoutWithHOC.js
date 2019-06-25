import Header from './header';

const MyLayoutWithHOCStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const MyLayoutWithHOC = (Page) => {
    return ()=> (
        <div style={MyLayoutWithHOCStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default MyLayoutWithHOC;