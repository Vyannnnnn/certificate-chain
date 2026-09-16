import { Contract, ethers } from "ethers";
import { certificateABI } from "./abi";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
console.log("PRIVATE_KEY length:", process.env.PRIVATE_KEY?.length);
console.log(
  "PRIVATE_KEY starts with 0x:",
  process.env.PRIVATE_KEY?.startsWith("0x"),
);
const privateKey = process.env.PRIVATE_KEY!.startsWith("0x")
  ? process.env.PRIVATE_KEY!
  : `0x${process.env.PRIVATE_KEY}`;
const wallet = new ethers.Wallet(privateKey, provider);


export const contract = new Contract(
  process.env.Contract_Address!,
  certificateABI,
  wallet,
);

export async function verifyCertificateOnChain(certificateNumber: string) {
  const result = await contract.verifyCertificate(certificateNumber);

  return {
    exists: result[0],
    issuedAt: Number(result[1]),
  };
}

export async function issueCertificateOnBlockchain(certificateNumber: string) {
  const tx = await contract.issueCertificate(certificateNumber);

  const receipt = await tx.wait();

  return {
    txHash: receipt.hash,
  };
}
