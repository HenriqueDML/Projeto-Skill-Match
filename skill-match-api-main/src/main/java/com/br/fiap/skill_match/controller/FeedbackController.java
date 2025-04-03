package com.br.fiap.skill_match.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fiap.skill_match.model.Feedback;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {
    
    // Simulação do banco de dados
    private List<Feedback> feedbacks = new ArrayList<>();

    // INDEX - Listar todos os feedbacks
    @GetMapping
    public List<Feedback> index() {
        return feedbacks;
    }

    // CREATE -> Criar um novo feedback
    @PostMapping
    public Feedback create(@RequestBody Feedback feedback) {
        
        // Simulando ID auto-increment
        feedback.setId(feedbacks.size() + 1);
        feedbacks.add(feedback);
        return feedback;
    }

    // GET -> Obter um feedback pelo ID
    @GetMapping("/{id}")
    public Feedback getById(@PathVariable int id) {
        return feedbacks.stream()
                .filter(f -> f.getId() == id)
                .findFirst()
                .orElse(null);
    }

}
