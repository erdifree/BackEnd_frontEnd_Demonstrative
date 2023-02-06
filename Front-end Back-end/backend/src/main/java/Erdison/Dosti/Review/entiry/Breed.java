package Erdison.Dosti.Review.entiry;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.Set;

@Entity
@Table(name = "breeds")
public class  Breed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private String imageUrl;


    private int trainability;
    @Size(min=1, max=30)
    private int minLifeSpan;

    @Size(min=1, max=30)
    private int maxLifeSpan;
    private  String size;


//GET & SET


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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getTrainability() {
        return trainability;
    }

    public void setTrainability(int trainability) {
        this.trainability = trainability;
    }

    public int getMinLifeSpan() {
        return minLifeSpan;
    }

    public void setMinLifeSpan(int minLifeSpan) {
        this.minLifeSpan = minLifeSpan;
    }

    public int getMaxLifeSpan() {
        return maxLifeSpan;
    }

    public void setMaxLifeSpan(int maxLifeSpan) {
        this.maxLifeSpan = maxLifeSpan;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
