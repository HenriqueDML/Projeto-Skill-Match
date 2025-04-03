package com.br.fiap.skill_match.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fiap.skill_match.model.Team;

@RestController
@RequestMapping("/teams")
public class TeamController {
 
    // simulação do banco de dados
    private List<Team> teams = new ArrayList<>();
    
    // INDEX -> Listar todos os times
    @GetMapping
    public List<Team> index() {
        return teams;
    }

    // CREATE -> Criar um novo time
    @PostMapping
    public Team create(@RequestBody Team team) {
        // Simulando ID auto-increment
        team.setId(teams.size() + 1);
        teams.add(team);
        return team;    
    }

    // GET - Obter um time pelo ID
    @GetMapping("/{id}")
    public Team getById(@PathVariable int id) {
        for (Team team : teams) {
            if (team.getId() == id) {
                return team;
            }
        }
        return null;
    }
}
