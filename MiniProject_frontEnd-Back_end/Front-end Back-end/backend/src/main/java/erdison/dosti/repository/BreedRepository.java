package erdison.dosti.repository;



import erdison.dosti.entity.Breed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BreedRepository extends JpaRepository<Breed,Integer> {
    List<Breed> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String keyword,String seconda);
}

