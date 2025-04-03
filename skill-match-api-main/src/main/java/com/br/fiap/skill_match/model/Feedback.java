package com.br.fiap.skill_match.model;

public class Feedback {
    private int id;
    private String userName;
    private String comment;

    // exemplo de 1 a 5 estrelas
    private int rating;

    // Construtor Padrão
    public Feedback() {}

    // Construtor
    public Feedback(int id, String userName, String comment, int rating) {
        this.id = id;
        this.userName = userName;
        this.comment = comment;
        this.rating = rating;
    }

    // Getters e Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    
    
}
