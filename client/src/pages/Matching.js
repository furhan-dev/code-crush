import React from "react";
import UserCard from "../components/userCard";

export default function Matching() {
    return (
        <div className="overlay text-center">
            <main className="flex-row justify-center mb-4">
                <div className="col-10 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <UserCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}