"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { contract } from "../utils/contract";
import { Deposit } from "./Deposit";
import { TaskList } from "./TaskList";
import { toEther } from "thirdweb";
import { AddTask } from "./AddTask";

export const Accountability = () => {
    const account = useActiveAccount();

    const { data: depositAmount } = useReadContract({
        contract: contract,
        method: "getDeposit",
    });

    const { data: taskCount } = useReadContract({
        contract: contract,
        method: "getTaskCount",
    });

    if (account) {
        return (
            <div style={{ textAlign: "center", minWidth: "500px" }}>
                <ConnectButton client={client} chain={chain} />
                <div>
                    {depositAmount?.toString() === "0" && taskCount?.toString() === "0" ? (
                        <Deposit />
                    ) : depositAmount?.toString() !== "0" && taskCount?.toString() === "0" ? (
                        <TaskList />
                    ) : (
                        <>
                            <div style={{ marginTop: "20px" }}>
                                <h3>Locked Funds: {toEther(depositAmount!)}</h3>
                                <p style={{ fontSize: "12px" }}>Funds will ne returned once all tasks are completed.</p>
                                <AddTask />
                                <TaskList />
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
};
