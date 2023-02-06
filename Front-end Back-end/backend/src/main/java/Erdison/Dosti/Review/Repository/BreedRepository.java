package Erdison.Dosti.Review.Repository;

import Erdison.Dosti.Review.entiry.Breed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BreedRepository extends JpaRepository<Breed,Integer> {


    List<Breed> findByNameEqualsIgnoreCase(String keyword);
}
