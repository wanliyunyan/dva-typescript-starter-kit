"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const dva_1 = require("dva");
const styles = require('./HomePage.css');
function HomePage(props) {
    return (<div className={styles.normal}>
      <h1 className={styles.title}>Dva boilerplate with typescript</h1>
      Count: {props.count}
      <hr />
      <button onClick={() => { props.dispatch({ type: 'count/add' }); }}>Add</button>
      <button onClick={() => { props.dispatch({ type: 'count/addWithDelay' }); }}>Add With Delay</button>
      <button onClick={() => { props.dispatch({ type: 'count/minus' }); }}>Minus</button>
      <button onClick={() => { props.dispatch({ type: 'count/redirect' }); }}>redirect</button>
    </div>);
}
function mapStateToProps(state) {
    return {
        count: state.count,
    };
}
exports.default = dva_1.connect(mapStateToProps)(HomePage);
//# sourceMappingURL=HomePage.jsx.map