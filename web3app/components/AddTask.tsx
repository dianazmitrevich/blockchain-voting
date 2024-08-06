import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { contract } from "../utils/contract";

export const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskName, setTaskName] = useState("");

    return (
        <div
            style={{
                width: "100%",
                position: "relative",
            }}>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    position: "absolute",
                    right: "0",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#222",
                    color: "#fff",
                    fontSize: "12px",
                    cursor: "pointer",
                }}>
                Add Task
            </button>
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.75)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "99",
                    }}>
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "20px",
                            background: "#222",
                            borderRadius: "8px",
                            minWidth: "300px",
                        }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                padding: "5px",
                                borderRadius: "4px",
                                border: "none",
                                color: "#fff",
                                fontSize: "12px",
                                cursor: "pointer",
                            }}>
                            Close
                        </button>
                        <p
                            style={{
                                fontSize: "12px",
                                marginTop: "30px",
                                marginBottom: "5px",
                            }}>
                            Enter task description:
                        </p>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Enter task..."
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "none",
                                marginBottom: "10px",
                            }}
                        />
                        <TransactionButton
                            transaction={() =>
                                prepareContractCall({
                                    contract: contract,
                                    method: "createTask",
                                    params: [taskName],
                                })
                            }
                            onTransactionConfirmed={() => {
                                setIsModalOpen(false);
                                setTaskName("");
                                alert("Task created successfully!");
                            }}
                            style={{
                                width: "100%",
                                fontSize: "12px",
                                padding: "10px",
                            }}>
                            Add Task
                        </TransactionButton>
                    </div>
                </div>
            )}
        </div>
    );
};
