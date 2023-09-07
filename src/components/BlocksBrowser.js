import { TabPanel } from "@mui/base";
import { API } from "../uitls/common";
import { Card } from "@mui/material";
import ReactTimeAgo from "react-time-ago";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BlockCard from "./BlockCard";

export default function BlocksBrownser() {
  const [blocks, setBlocks] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // GET with fetch API
  useEffect(() => {
    const fetchPost = async () => {
      fetch(API.BLOCKS({ pageLength: 10, pageNumber: page }))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlocks(blocks.concat(data));
        })
        .catch((err) => {
          alert(err);
        });
    };
    fetchPost();
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const resetPage = () => setPage(0);

  return (
    <TabPanel>
      <InfiniteScroll
        dataLength={blocks.length} //This is important field to render the next data
        next={nextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={resetPage}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {blocks.map((block) => (
          <BlockCard data={block}></BlockCard>
        ))}
      </InfiniteScroll>
    </TabPanel>
  );
}
