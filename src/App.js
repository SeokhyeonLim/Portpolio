import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upper from "./Main/Upper";
import Aboutme from "./Main/Aboutme";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/aboutme" component={Aboutme} />
                {/* 다른 컴포넌트/페이지에 대한 라우트를 추가하세요 */}
                <Route path="/" component={Upper} />
            </Switch>
        </Router>
    );
}

export default App;
