import "./App.css";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import HomePageTabs from "./components/HomePageTabs";
import { styled } from "@mui/material";
import {
  Avatar,
  Card,
  Chip,
  Divider,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";

function App() {
  return (
    <div>
      <HomePageTabs />
    </div>
  );
}

export default App;
