import { TabPanel } from "@mui/base";
import { useEffect, useState } from "react";
import { API } from "../uitls/common";
import CachedIcon from "@mui/icons-material/Cached";
import { JsonView } from "react-json-view-lite";
import Loading from "react-loading";

export default function Stats() {
  const [state, setState] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => loadState(), []);

  const loadState = () => {
    setLoading(true);
    fetch(API.STATS)
      .then((response) => response.json())
      .then((data) => {
        if (data.latestBlock) data["latestBlock"] = data.latestBlock.number;
        if (data.percentageComplition)
          data[
            "percentageComplition"
          ] = `${data.percentageComplition}% Block Chain Has been Synced`;
        setState(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  return (
    <TabPanel>
      <h1>Latest Stats </h1>
      <CachedIcon onClick={loadState} />
      {isLoading ? (
        <Loading height={"20%"} width={"20%"} />
      ) : (
        <JsonView data={state}></JsonView>
      )}
    </TabPanel>
  );
}
