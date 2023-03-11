import { Routes, Route } from "react-router-dom";
import { Layout, ContentListPage, PersonCartPage } from "./index";

export default function AppRoutes(){

    return(
        <>
            <Routes>
                {
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ContentListPage />}></Route>
                        <Route path="/person" element={<PersonCartPage />}></Route>
                    </Route>
                }
            </Routes>
        </>
    );
}