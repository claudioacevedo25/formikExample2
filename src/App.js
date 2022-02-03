import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicForm from "./Components/BasicForm"
import FormikForm from "./Components/FormikForm";
import FormikFormComponent from "./Components/FormikFormComponent";
import FormikFormCustomComp from "./Components/FormikFormCustomComp";
import FormikFormWithValidation from "./Components/FormikFormWithValidation";
import FormikFormReducedCode from "./Components/FromikFormReducedCode";
import NavBar from "./Components/NavBar";

const App = () => {
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/basicForm" component={BasicForm}/>
                <Route path="/formikForm" component={FormikForm}/>
                <Route path="/formikFormValidations" component={FormikFormWithValidation}/>
                <Route path="/formikFormLessCode" component={FormikFormReducedCode}/>
                <Route path="/formikFormComponent" component={FormikFormComponent}/>
                <Route path="/formikFormCustomComp" component={FormikFormCustomComp}/>
            </Switch>
        </Router>
    )
}

export default App