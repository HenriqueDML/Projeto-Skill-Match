"use client";

import NavBar from "@/components/nav-bar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: ""
    });
    const [mensagem, setMensagem] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMensagem("");
    
        try {
            const response = await fetch("http://localhost:5000/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMensagem("Cadastro realizado com sucesso!");
                setTimeout(() => router.push("/dashboard"), 2000);
            } else {
                // Captura e exibe mensagens de erro do backend
                if (data.errors) {
                    setMensagem(data.errors.map((err: any) => err.message).join(", "));
                } else {
                    setMensagem(data.message || "Erro ao cadastrar");
                }
            }
        } catch (error) {
            setMensagem("Erro ao conectar com o servidor");
        }
    };
    

    return (
        <>
            <NavBar active="login" />
            <main className="flex items-center justify-center p-6">
                <div className="bg-slate-900 rounded p-6 w-96 text-white">
                    <h2 className="text-lg font-bold mb-4">Cadastro</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input 
                            type="text" name="nome" placeholder="Nome" 
                            value={formData.nome} onChange={handleChange}
                            className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required 
                        />

                        <input 
                            type="email" name="email" placeholder="Email" 
                            value={formData.email} onChange={handleChange}
                            className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required 
                        />

                        <input 
                            type="password" name="senha" placeholder="Senha" 
                            value={formData.senha} onChange={handleChange}
                            className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required 
                        />

                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-bold">
                            Cadastrar
                        </button>
                    </form>
                    {mensagem && <p className="text-center mt-4 text-sm">{mensagem}</p>}
                </div>
            </main>
        </>
    );
}
