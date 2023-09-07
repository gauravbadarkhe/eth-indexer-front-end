import { TabPanel } from "@mui/base";
import { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { styled } from "@mui/material";
import { API } from "../uitls/common";

export default function LiveIndexer() {
  const [blocks, setBlock] = useState([]);
  const [listening, setListening] = useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(API.LIVE_EVENTS);

      events.onmessage = (event) => {
        // console.log(event);
        const parsedData = JSON.parse(event.data);
        // console.log(parsedData);

        setBlock((blocks) => blocks.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, blocks]);

  return (
    <TabPanel>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Block #</StyledTableCell>
              <StyledTableCell align="right">Timestamp</StyledTableCell>
              <StyledTableCell align="right">Transaction Count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(blocks)}
            {blocks &&
              blocks.reverse().map((block) => {
                return (
                  block &&
                  Object.keys(block).length > 0 && (
                    <StyledTableRow
                      key={block.number}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <StyledTableCell align="center">
                        <div
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          <ViewInArIcon />
                          {block.number}
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <ReactTimeAgo
                          date={parseInt(block.timestamp) * 1000}
                          locale="en-US"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {block.transactions.length}
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
}
