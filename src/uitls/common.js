const endPoint = "http://localhost:3001";

export const API = {
  LIVE_EVENTS: `${endPoint}/events`,
  STATS: `${endPoint}/stats`,
  BLOCKS: ({ pageLength, pageNumber }) =>
    `${endPoint}/blocks?pl=${pageLength}&pn=${pageNumber}`,
  TRANSACTIONS: (blockNumber) =>
    `${endPoint}/blocks/transactions/${blockNumber}`,
};
