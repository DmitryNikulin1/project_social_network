import React from "react";
import { AppWrapperContent, AppWrepper } from "./App.styled";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";

function App(props) {
  return (
    <AppWrepper>
      <Header />
      <Navbar />
      <AppWrapperContent>
        <Routes>
          <Route
            path="/profile"
            element={<Profile profilePage={props.appStore.profilePage} />}
          />
          <Route
            path="/messages"
            element={<Dialogs dialogsPage={props.appStore.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppWrapperContent>
    </AppWrepper>
  );
}

export default App;
