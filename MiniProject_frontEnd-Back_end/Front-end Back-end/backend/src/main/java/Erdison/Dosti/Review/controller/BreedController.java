package Erdison.Dosti.Review.controller;

import Erdison.Dosti.Review.Repository.BreedRepository;
import Erdison.Dosti.Review.entiry.Breed;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/api/breeds")
@CrossOrigin
public class BreedController {
    @Autowired
    private BreedRepository breedRepository;


    @GetMapping
    public List<Breed> getAll() {
        return breedRepository.findAll();
    }

    @GetMapping("/{id}")
    public Breed getBy(@PathVariable Integer id){
        Optional<Breed> resultBreed=breedRepository.findById(id);
        if (resultBreed.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed id:" + id + "Is not found try Again");
        } else {
            return resultBreed.get();
        }
    }

    @GetMapping("/name")
    public List<Breed> getBYName(@RequestParam(name = "keyword", required = false) String str) {
        List<Breed> result = breedRepository.findByNameEqualsIgnoreCase(str);
        return result;
    }
    @PostMapping
    public List<Breed> create(@RequestBody Breed breed){
             breedRepository.save(breed);
             return getAll();
    }

    @PutMapping("/{id}")

    public boolean update(@PathVariable Integer id, @RequestBody Breed breed) {
        Optional<Breed> resultBread = breedRepository.findById(id);
        if (resultBread.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed id:" + id + "Is not found try Again");
        } else {
            if (breed.getId() != id) {
                throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED);
            } else {
                breed.setId(id);
                breedRepository.save(breed);
                return true;
            }
        }
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable Integer id) {
        Optional<Breed> resultBread = breedRepository.findById(id);
        if (resultBread.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Breed id:" + id + "Is not found try Again");
        }else {
            breedRepository.delete(resultBread.get());
        }
        return true;
    }

}