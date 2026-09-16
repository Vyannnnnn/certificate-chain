export const certificateABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "certificateId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issueAt",
        type: "uint256",
      },
    ],
    name: "CertificateIssued",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "certificateId",
        type: "string",
      },
    ],
    name: "issueCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "certificateId",
        type: "string",
      },
    ],
    name: "verifyCertificate",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "issueAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
