'use client';
import { useState } from 'react';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErros([]);
    setMensagem('');
  };

  const validar = () => {
    const novosErros = [];

    if (!formData.nome.trim()) novosErros.push('Nome é obrigatório');
    if (!formData.email.includes('@')) novosErros.push('Email inválido');
    if (formData.senha.length < 6) novosErros.push('Senha deve ter no mínimo 6 caracteres');

    return novosErros;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errosValidados = validar();

    if (errosValidados.length > 0) {
      setErros(errosValidados);
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.errors) setErros(data.errors);
        else setErros(['Erro desconhecido ao cadastrar']);
        return;
      }

      setMensagem('Usuário cadastrado com sucesso!');
      setFormData({ nome: '', email: '', senha: '' });
    } catch (error) {
      setErros(['Erro de conexão com o servidor']);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl  text-slate-600 font-bold mb-6 text-center">Cadastro</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-600 text-sm font-medium">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block  text-slate-600 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block  text-slate-600 text-sm font-medium">Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>

      {mensagem && <p className="mt-4 text-green-600 font-semibold">{mensagem}</p>}

      {erros.length > 0 && (
        <ul className="mt-4 text-red-600 list-disc list-inside">
          {erros.map((erro, i) => (
            <li key={i}>{erro}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
