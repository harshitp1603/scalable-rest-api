import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const getProfile = async () => {

      try {

        const res = await api.get(
          "/auth/profile"
        );

        setUser(res.data.user);

      } catch (error) {

        console.error(error);
      }
    };

    getProfile();

  }, []);

  return (
    <div>

      <h1>Dashboard</h1>

      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      )}

    </div>
  );
}

export default Dashboard;