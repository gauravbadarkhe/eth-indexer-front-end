"use client";
import { Button } from "@mui/base";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReactTimeAgo from "react-time-ago";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function BlockCard(data) {
  data = data.data;
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  //   console.log("dda", data.data);
  //   const { number, hash, transactionCount, timestamp, miner } = data;

  return (
    <div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <ReactTimeAgo date={parseInt(data.timestamp) * 1000} locale="en-US" />
      </ErrorBoundary>

      <JsonView
        data={data}
        shouldInitiallyExpand={allExpanded}
        style={defaultStyles}
      />
    </div>

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       {/* <ReactTimeAgo date={parseInt(timestamp) * 1000} locale="en-US" /> */}
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       {number}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       {hash}
    //     </Typography>
    //     <Typography variant="body2">{transactionCount}</Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
