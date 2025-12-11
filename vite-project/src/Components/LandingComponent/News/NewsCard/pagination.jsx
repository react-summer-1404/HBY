const { createRoot } = ReactDOM;

const {  Pagination  } = antd;
const App = () => (
  <>
    <Pagination align="start" defaultCurrent={5} total={50} />
    <br />
    <Pagination align="center" defaultCurrent={5} total={50} />
    <br />
    <Pagination align="end" defaultCurrent={5
      
    } total={50} />
  </>
);
const ComponentDemo = App;


createRoot(mountNode).render(<ComponentDemo />);
