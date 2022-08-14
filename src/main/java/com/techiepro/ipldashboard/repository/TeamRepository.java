package com.techiepro.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.techiepro.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

     Team findByTeamName(String teamName);

}
