"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Ajuda() {
    const router = useRouter();

    return (
        <div className="">
            <div className="text-center mt-12 bg-blue-600">
                <h1 className="text-blue-600 text-center mb-12 font-bold">hola</h1>
                <p className="mt-12">Bon dia</p>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
                <Textarea className="max-w-200" placeholder="Type your message here." />

                <Button
                    variant="outline"
                    className="bg-blue-600 text-white"
                    onClick={() => router.push("/iniciar-sessio")}
                >
                    Iniciar Sessio
                </Button>
            </div>

            <Image
                src="/foto_portada/vercel.svg"
                alt="foto de vercel"
                width={300}
                height={300}
            />
        </div>
    );
}
