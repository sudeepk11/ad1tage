"use client";

import { useContext } from "react";
import PageLink from "./PageLink";
import { AuthContext } from "../../providers/AuthProvider";

export default function AdminNav() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex place-content-center w-screen text-center mx-auto cursor-pointer items-center lg:top-0 overflow-x-scroll scrollbar-hide">
      <PageLink href="/admin">Dashboard</PageLink>
      <PageLink href="/admin/listings">Listings</PageLink>
      {user.role === "admin" && (
        <PageLink href="/admin/categories">Manage Categories</PageLink>
      )}
      <PageLink href="/admin/add-services">Add Services</PageLink>
    </div>
  );
}
