import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x2f49e38ab18BB7A3d701e0514305bc4E1f968206";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});
