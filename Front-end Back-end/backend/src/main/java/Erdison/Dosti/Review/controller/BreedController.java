package Erdison.Dosti.Review.controller;

import Erdison.Dosti.Review.Repository.BreedRepository;
import Erdison.Dosti.Review.entiry.Breed;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/breeds")
@CrossOrigin
public class BreedController {
    @Autowired
    private BreedRepository breedRepository;
    //Search all with requestParam
    @GetMapping
    public List<Breed> getAll(@RequestParam (name="keyword",required = false)String s){
        if(Strings.isBlank(s)){
            return breedRepository.findAll();
        }else{
            return breedRepository.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(s,s);
        }
    }
    //SearchById
    @GetMapping("/{id}")
    public Breed getById(@PathVariable Integer id){
        Optional<Breed> result=breedRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Breed Not Found");
        }
    }
    //Create
    @PostMapping
    public Breed createANewBreed(@Valid @RequestBody Breed breed){
        Optional<Breed> result=breedRepository.findById(breed.getId());
        if(result.isEmpty()){
            return breedRepository.save(breed);
        }else{
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED,"Breed Already Exists");
        }
    }
    //Delete
    @DeleteMapping("/{id}")
    public void deleteBreed(@PathVariable Integer id){

        if(breedRepository.existsById(id)){
            breedRepository.deleteById(id);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Breed Not Found");
        }

    }
    //Update
    @PutMapping("/{id}")
    public Breed updateBreed( @PathVariable Integer id ,@Valid @RequestBody Breed breed ){
        if(breedRepository.existsById(id)){
            breed.setId(id);
            return breedRepository.save(breed);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Breed Not Found");
        }
    }

}