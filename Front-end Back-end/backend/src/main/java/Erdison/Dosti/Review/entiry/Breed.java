package Erdison.Dosti.Review.entiry;



import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "breeds")
public class Breed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Size(min = 1, max = 255)
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String imageUrl;
    @Min(1)
    @Max(5)
    private int trainability;

    @Min(1)
    @Max(30)
    private int minLifeSpan;
    @Min(1)
    @Max(30)
    private int maxLifeSpan;

    private String size;

    public Breed() {
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Breed breed = (Breed) o;

        if (getName() != null ? !getName().equals(breed.getName()) : breed.getName() != null) return false;
        return getDescription() != null ? getDescription().equals(breed.getDescription()) : breed.getDescription() == null;
    }

    @Override
    public int hashCode() {
        int result = getName() != null ? getName().hashCode() : 0;
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        return result;
    }
}



