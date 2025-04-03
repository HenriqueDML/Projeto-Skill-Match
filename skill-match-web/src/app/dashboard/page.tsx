"use client";
import NavBar from "@/components/nav-bar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default function DashboardPage() {
    // Feedbacks recebidos por mês
    const feedbacksPorMes = [
        { mes: "Jan", quantidade: 10 },
        { mes: "Fev", quantidade: 15 },
        { mes: "Mar", quantidade: 20 },
        { mes: "Abr", quantidade: 5 },
    ];

    // Feedbacks positivos vs negativos
    const feedbacksTipo = [
        { tipo: "Positivos", valor: 60 },
        { tipo: "Negativos", valor: 20 },
    ];

    const cores = ["#3086dc", "#22ffcf"];

    // Últimos feedbacks recebidos
    const ultimosFeedbacks = [
        { autor: "João Silva", comentario: "Ótimo profissional, muito dedicado!" },
        { autor: "Ana Souza", comentario: "Precisa melhorar a comunicação, mas é esforçado." },
        { autor: "Carlos Lima", comentario: "Entrega sempre no prazo, recomendo!" },
    ];

    return (
        <>
            <NavBar active="dashboard" />
            <main className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold mb-6">Dashboard de Feedbacks</h2>

                {/* Gráfico de Barras - Feedbacks por Mês */}
                <div className="bg-slate-900 rounded p-6 mb-6 w-full max-w-2xl">
                    <h3 className="text-lg font-bold mb-4">Feedbacks Recebidos por Mês</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={feedbacksPorMes}>
                            <XAxis dataKey="mes" stroke="#ffffff" />
                            <YAxis stroke="#ffffff" />
                            <Tooltip />
                            <Bar dataKey="quantidade" fill="#2196F3" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Gráfico de Pizza - Positivos vs Negativos */}
                <div className="bg-slate-900 rounded p-6 mb-6 w-full max-w-2xl">
                    <h3 className="text-lg font-bold mb-4">Feedbacks Positivos vs Negativos</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={feedbacksTipo}
                                dataKey="valor"
                                nameKey="tipo"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {feedbacksTipo.map((_, index) => (
                                    <Cell key={index} fill={cores[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Lista de Últimos Feedbacks */}
                <div className="bg-slate-900 rounded p-6 w-full max-w-2xl">
                    <h3 className="text-lg font-bold mb-4">Últimos Feedbacks Recebidos</h3>
                    <ul className="space-y-4">
                        {ultimosFeedbacks.map((fb, index) => (
                            <li key={index} className="bg-slate-800 p-4 rounded">
                                <strong>{fb.autor}</strong>: {fb.comentario}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}
