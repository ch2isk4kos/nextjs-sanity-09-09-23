"use client" // render sanity on the next.js client rather than the server

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

function AdminPage() {
  return <NextStudio config={config} />;
}

export default AdminPage;