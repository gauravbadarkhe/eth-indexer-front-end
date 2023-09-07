import { Tab, tabClasses } from "@mui/base/Tab";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tabs } from "@mui/base/Tabs";
import { styled } from "@mui/system";
import { buttonClasses } from "@mui/base";

import LiveIndexer from "./LiveIndexer";
import BlocksBrownser from "./BlocksBrowser";
import Stats from "./Stats";
export default function HomePageTabs() {
  return (
    <Tabs defaultValue={0}>
      <StyledTabsList>
        <StyledTab value={0}>Live Indexer</StyledTab>
        <StyledTab value={1}>Browse Blocks</StyledTab>
        <StyledTab value={2}>Stats</StyledTab>
      </StyledTabsList>
      <LiveIndexer value={0}></LiveIndexer>
      <BlocksBrownser value={1}></BlocksBrownser>
      <Stats value={1}></Stats>
    </Tabs>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledLiveIndexer = styled(LiveIndexer)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
      min-width: 400px;
      background-color: ${blue[500]};
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: space-between;
      box-shadow: 0px 4px 6px ${
        theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
      };
      `
);
