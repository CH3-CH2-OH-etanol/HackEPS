"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="w-full bg-blue-400 h-16">
      <ul className="flex gap-x-16 justify-center items-center h-full">
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/ajuda")}>Ajuda</li>
        <li>
          <Button onClick={() => router.push("/login")}>
            Iniciar sessió
          </Button>
        </li>
      </ul>
    </div>
  );
}
