import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/login.jsx";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> {/* 루트 경로를 로그인 페이지로 설정 */}

                    {/* AppLayout을 적용할 경로들을 별도의 그룹으로 정의 */}
                    <Route element={<AppLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        {/* 필요한 경우 여기에 추가 경로를 정의할 수 있습니다 */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
