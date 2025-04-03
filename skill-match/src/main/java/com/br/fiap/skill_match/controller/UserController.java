package com.br.fiap.skill_match.controller;

import com.br.fiap.skill_match.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "*") // permite chamadas do frontend
public class UserController {

    private List<User> usuarios = new ArrayList<>();

    @PostMapping
    public User cadastrar(@RequestBody User user) {
        // Simulação de ID (incremental)
        user.setId((long) (usuarios.size() + 1));
        usuarios.add(user);
        return user;
    }

    @GetMapping
    public List<User> listar() {
        return usuarios;
    }
}
