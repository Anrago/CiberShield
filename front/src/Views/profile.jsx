import React from "react";

export default function Profile() {
  const userProfile = JSON.parse(localStorage.getItem("profile"));
  console.log(userProfile.imgPerfil);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    location.reload();
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="card bg-base-100">
        <div className="card-body items-center text-center bg-amber-200">
          <h2 className="card-title">Profile</h2>
          <div className="flex flex-col items-center">
            <img
              src={`http://localhost:3000/${userProfile.imgPerfil}`}
              alt="Avatar"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">{userProfile.name}</h3>
            <p className="text-sm text-gray-600">{userProfile.email}</p>
          </div>
          <button
            onClick={() => logOut()}
            className="btn btn-neutral btn-outline mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
