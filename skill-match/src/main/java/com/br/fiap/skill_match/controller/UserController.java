package com.br.fiap.skill_match.controller;

import com.br.fiap.skill_match.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "*")
public class UserController {

    private List<User> usuarios = new ArrayList<>();

    @PostMapping
    public User cadastrar(@RequestBody @Valid User user) {
        user.setId((long) (usuarios.size() + 1));
        usuarios.add(user);
        return user;
    }

    @GetMapping
    public List<User> listar() {
        return usuarios;
    }

}
