import Header from "./Header";
import DraftComponent from "./DraftComponent";
import RTSComponent from "./RTSComponent";
import { Link } from "react-router-dom";
function Main(){
    return (
        <>
            <div class=" ">
                <Header />
                <DraftComponent />
            </div>
        </>
    )
}

export default Main;