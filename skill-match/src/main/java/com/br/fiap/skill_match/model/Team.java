package com.br.fiap.skill_match.model;

public class Team {
    private int id;
    private String name;
    private TeamStatus status;

    // Construtor padrão
    public Team() {
    }

    // Construtor

    public Team(int id, String name, TeamStatus status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    // Getters e Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TeamStatus getStatus() {
        return status;
    }

    public void setStatus(TeamStatus status) {
        this.status = status;
    }

}
