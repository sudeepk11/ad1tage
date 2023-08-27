"use client";

import { useContext } from "react";
import PageLink from "./PageLink";
import { AuthContext } from "../../providers/AuthProvider";

export default function AdminNav() {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="flex max-lg:hidden max-lg:peer-checked:block max-lg:fixed max-lg:top-[62px] max-lg:left-0 max-lg:w-full max-lg:h-screen z-20 max-lg:bg-white
    max-lg:text-primary place-content-center w-fit text-center mx-auto cursor-pointer items-center lg:top-0 overflow-x-scroll scrollbar-hide"
    >
      <ul className="flex items-center h-full max-lg:pb-20 max-lg:flex-col max-lg:justify-center max-lg:items-center md:-mr-7">
        <PageLink href="/admin">Dashboard</PageLink>
        <PageLink href="/admin/listings">Listings</PageLink>
        {user.role === "admin" && (
          <PageLink href="/admin/categories">Manage Categories</PageLink>
        )}
        <PageLink href="/admin/add-services">Add Services</PageLink>
        {user.role === "admin" && (
          <PageLink href="/admin/queries">Queries</PageLink>
        )}
      </ul>
    </div>
  );
}
