"use client";

import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function TeamsPage() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <span className="text-xl font-bold">SkillMatch</span>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Profissionais</a>
          <a href="#" className="underline font-bold">Times</a>
          <a href="#" className="hover:underline">Feedbacks</a>
        </div>
        <img
          src="/user-avatar.jpg"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </nav>

      {/* Conteúdo */}
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">CodeCrafters</h2>
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Integrantes</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-2">Laura</td>
                <td className="p-2"></td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-2">Vinicius</td>
                <td className="p-2">Ativo</td>
              </tr>
              <tr>
                <td className="p-2">Henrique</td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>

          {/* Botão de opções */}
          <div className="relative mt-4">
            <button onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="text-white" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-700 rounded shadow-lg">
                <button className="flex items-center p-2 hover:bg-gray-600 w-full">
                    <Pencil />
                            Editar
                 </button>
                <button className="flex items-center p-2 hover:bg-gray-600 w-full">
                    <Trash2 />
                        Excluir
                     </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}