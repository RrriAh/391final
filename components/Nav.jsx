import Link from "next/link";
import React from 'react';

export default function Nav(){
    return(
        <div style={{backgroundColor: "#6495EDFF", textAlign: "center", textTransform: "uppercase"}}>
            <h1 style={{color:"white", padding: "2%"}}> Memo</h1>
            <br/>
            <nav style={{display: "flex", backgroundColor: "#87CEEBFF", padding: "1% 20%"}}>
                <ul style={{ width: "100%", display: "flex", justifyContent: "space-between", listStyleType: "none" }}>
                    <li><Link href="/update">Update Memo</Link></li>
                    <li>
                        <Link href="/display">Display Memo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

