import { Switch, Route } from "react-router-dom";
import { Members } from "./views/Members";
import { Home } from "./views/Home";
import { Board } from "./views/Board";
import { MenuBar } from "./components/MenuBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles/App.css";

function App() {
  return (
    <div className="flex w-screen h-screen text-lg">
      <MenuBar />

      <Route
        render={({ location }) => (
          <SwitchTransition mode={"out-in"}>
            <CSSTransition key={location.key} classNames="fade" timeout={200}>
              <Switch location={location}>
                {/* Switch chooses exactly 1 element and renders it */}
                <Route path="/" component={Home} exact />
                <Route path="/members" component={Members} />
                <Route path="/board/:boardID" component={Board} />
                {<Route path="*" component={Home} />}
              </Switch>
            </CSSTransition>
          </SwitchTransition>
        )}
      />
    </div>
  );
}

export default App;
