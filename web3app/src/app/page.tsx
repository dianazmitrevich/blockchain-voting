import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Accountability } from "../../components/Accountability";

export default function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                minHeight: "100vh",
            }}>
            <h1 style={{ marginBottom: "20px" }}>Accountability App</h1>
            <ConnectEmbed client={client} chain={chain} />
            <Accountability />
        </div>
    );
}
