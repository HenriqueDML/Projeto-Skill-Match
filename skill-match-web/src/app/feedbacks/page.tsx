"use client";

import NavBar from "@/components/nav-bar";
import { useState } from "react";
import { MessageCircleMore, MoreVertical, Pencil, Trash2 } from "lucide-react";

export default function FeedbacksPage() {
    const [menuOpen, setMenuOpen] = useState<number | null>(null);
    
    const feedbacks = [
        { id: 1, remetente: "João Silva", feedback: "Ótima colaboração no projeto!", data: "12/03/2025", nota: 3 },
    ];

    return (
        <>
            <NavBar active="feedbacks" />
            <main className="flex items-center justify-center p-6">
                <div className="bg-slate-900 rounded p-6 w-3/4">
                    <h2 className="text-lg font-bold text-white mb-4">Feedbacks Recebidos</h2>
                    <table className="w-full border-collapse text-white">
                        <thead>
                            <tr className="border-b border-gray-600">
                                <th className="p-2 text-left">Nome do remetente</th>
                                <th className="p-2 text-left">Feedback</th>
                                <th className="p-2 text-left">Data</th>
                                <th className="p-2 text-left">Nota</th>
                                <th className="p-2 text-left">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks.map((item) => (
                                <tr key={item.id} className="border-b border-gray-600">
                                    <td className="p-2">{item.remetente}</td>
                                    <td className="p-2">{item.feedback}</td>
                                    <td className="p-2">{item.data}</td>
                                    <td className="p-2">{"⭐".repeat(item.nota)}</td>
                                    <td className="p-2 relative">
                                        <button onClick={() => setMenuOpen(menuOpen === item.id ? null : item.id)}>
                                            <MoreVertical size={20} />
                                        </button>
                                        {menuOpen === item.id && (
                                            <ul className="absolute right-0 bg-gray-800 shadow-md p-2 rounded text-white">
                                                <li className="p-1 hover:bg-gray-700 cursor-pointer"> 
                                                    <Pencil />
                                                        editar
                                                </li>
                                                <li className="p-1 hover:bg-gray-700 cursor-pointer"> 
                                                    <Trash2 />
                                                        excluir
                                                </li>
                                                <li className="p-1 hover:bg-gray-700 cursor-pointer"> 
                                                    <MessageCircleMore />
                                                        responder
                                                </li>
                                            </ul>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
